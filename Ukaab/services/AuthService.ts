import AsyncStorage from '@react-native-async-storage/async-storage';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { apiService } from './ApiService';
import { SupabaseService } from '../supabase';
import { ENDPOINTS } from '../config/api';

export interface LoginCredentials {
  email?: string;
  phone?: string;
  password: string;
}

export interface SignupCredentials {
  email?: string;
  phone?: string;
  password: string;
  user_type: 'admin' | 'driver' | 'shipper' | 'trucking_company';
  full_name: string;
  cnic?: string;
  owns_company?: boolean;
  company_name?: string;
  company_address?: string;
  fleet_size?: number;
}

export interface AuthResponse {
  success: boolean;
  user?: any;
  session?: any;
  token?: string;
  error?: string;
  requiresOTP?: boolean;
  user_id?: number;
}

export interface OTPVerificationData {
  user_id: number;
  otp_code: string;
}

class AuthService {

  initializeGoogleSignIn() {
    GoogleSignin.configure({
      // Use the Google web client ID provided// by your backend team
      webClientId: '680987785000-el7nsp7c8ni553i4odauo8clsndj853i.apps.googleusercontent.com',
      offlineAccess: true,
    });
    console.log('🔧 Google Sign-In configured');
  }

  /**
   * Login through Render backend, then fetch user data from Supabase if needed
   */
  async login(credentials: LoginCredentials): Promise<AuthResponse> {
    try {
      console.log('🔐 Starting login process with Render backend...');

      const loginData = {
        email: credentials.email,
        password: credentials.password,
      };

      // Step 1: Authenticate through Render backend
      const response = await apiService.post(ENDPOINTS.LOGIN, loginData, true);

      if (!response || !response.data) {
        return { success: false, error: "No response from server" };
      }

      const { data, token } = response;

      if (!token && !data.token) {
        return { success: false, error: "No authentication token received" };
      }

      const authToken = token || data.token;
      console.log('✅ Authentication successful with Render backend');

      // Step 2: Store session data
      await this.storeUserSession(data, authToken);

      // Step 3: Optionally fetch additional user data from Supabase if needed
      let userData = data.user || data;
      if (data.user_id || data.id) {
        const profileResult = await SupabaseService.getUserProfile(data.user_id || data.id);
        if (profileResult.success) {
          userData = { ...userData, ...profileResult.data };
          console.log('✅ Enhanced user data fetched from Supabase');
        }
      }

      return {
        success: true,
        user: userData,
        token: authToken,
        session: { access_token: authToken, user: userData },
      };

    } catch (error: any) {
      console.error('💥 Login error:', error);
      return {
        success: false,
        error: error.response?.data?.message || error.message || 'Login failed',
      };
    }
  }

  /**
   * Signup through Render backend (which handles Supabase user creation)
   */
  async signup(credentials: SignupCredentials): Promise<AuthResponse> {
    try {
      console.log('📝 Starting signup process with Render backend...');

      const response = await apiService.post(ENDPOINTS.SIGNUP, credentials, true);

      if (!response.success) {
        return {
          success: false,
          error: response.error,
        };
      }

      const { data } = response;

      if (data) {
        console.log('✅ Signup successful, OTP verification required');
        return {
          success: true,
          user: data,
          requiresOTP: true,
          user_id: data?.user_id || data?.id,
        };
      }

      return {
        success: false,
        error: 'Signup failed - no user data received',
      };

    } catch (error: any) {
      console.error('💥 Signup error:', error);
      return {
        success: false,
        error: error.message || 'Signup failed',
      };
    }
  }

  /**
   * Verify OTP through Render backend
   */
  async verifyOTP(otpData: OTPVerificationData): Promise<AuthResponse> {
    try {
      console.log('🔢 Verifying OTP through Render backend...');

      const response = await apiService.post(ENDPOINTS.VERIFY_OTP, otpData, true);

      if (!response.success) {
        return {
          success: false,
          error: response.error,
        };
      }

      const { data, token } = response;

      if (data && (token || data.token)) {
        const authToken = token || data.token;
        console.log('✅ OTP verification successful');

        // Store user session
        await this.storeUserSession(data, authToken);

        return {
          success: true,
          user: data.user || data,
          token: authToken,
          session: { access_token: authToken, user: data.user || data },
        };
      }

      return {
        success: false,
        error: 'OTP verification failed - no user data or token received',
      };

    } catch (error: any) {
      console.error('💥 OTP verification error:', error);
      return {
        success: false,
        error: error.message || 'OTP verification failed',
      };
    }
  }

  /**
   * Resend OTP
   */
  async resendOTP(user_id: number): Promise<AuthResponse> {
    try {
      console.log('🔄 Resending OTP for user ID:', user_id);

      const response = await apiService.post(ENDPOINTS.RESEND_OTP, { user_id }, true);

      if (!response.success) {
        console.error('❌ Resend OTP error:', response.error);
        return {
          success: false,
          error: response.error,
        };
      }

      console.log('✅ OTP resent successfully');
      return {
        success: true,
      };

    } catch (error: any) {
      console.error('💥 Unexpected resend OTP error:', error);
      return {
        success: false,
        error: error.message || 'An unexpected error occurred',
      };
    }
  }

  /**
   * Store user session in AsyncStorage for persistence
   */
  private async storeUserSession(user: any, token: string): Promise<void> {
    try {
      const sessionData = {
        user,
        token,
        access_token: token,
        expires_at: Date.now() + (7 * 24 * 60 * 60 * 1000), // 7 days
      };

      await AsyncStorage.setItem('userSession', JSON.stringify(sessionData));
      await AsyncStorage.setItem('accessToken', token);
      await AsyncStorage.setItem('user', JSON.stringify(user));
      console.log('💾 Session stored successfully');
    } catch (error) {
      console.error('💾 Failed to store session:', error);
    }
  }

  /**
   * Check if user is already logged in
   */
  async checkAuthStatus(): Promise<AuthResponse> {
    try {
      const token = await AsyncStorage.getItem('accessToken');

      if (!token) {
        console.log('❌ No stored token found');
        return { success: false, error: 'No stored token' };
      }

      // Verify token with backend
      const response = await apiService.get(ENDPOINTS.ME, true);

      if (!response.success) {
        console.error('🔍 Auth check error:', response.error);
        // Clear invalid session
        await this.clearStoredSession();
        return { success: false, error: response.error };
      }

      const { data } = response;

      if (data) {
        console.log('✅ User is already authenticated');
        return {
          success: true,
          user: data,
          token: token,
          session: { access_token: token, user: data },
        };
      }

      console.log('❌ No user data received');
      return { success: false, error: 'No user data' };
    } catch (error: any) {
      console.error('💥 Auth check failed:', error);
      await this.clearStoredSession();
      return { success: false, error: error.message };
    }
  }

  /**
   * Logout user and clear all stored data
   */
  async logout(): Promise<void> {
    try {
      console.log('🚪 Logging out user...');

      // Clear local storage first
      await this.clearStoredSession();

      // Optionally call logout endpoint if available
      try {
        await apiService.post(ENDPOINTS.LOGOUT, {}, true);
      } catch (error) {
        // Ignore logout endpoint errors as we've already cleared local data
        console.log('ℹ️ Logout endpoint call failed, but local session cleared');
      }

      console.log('✅ Logout successful');
    } catch (error) {
      console.error('💥 Logout error:', error);
    }
  }

  /**
   * Clear stored session data
   */
  private async clearStoredSession(): Promise<void> {
    try {
      await AsyncStorage.multiRemove(['userSession', 'accessToken', 'user']);
      console.log('🗑️ Stored session cleared');
    } catch (error) {
      console.error('🗑️ Failed to clear session:', error);
    }
  }

  /**
   * Get current user from storage
   */
  async getCurrentUser() {
    try {
      const userStr = await AsyncStorage.getItem('user');
      return userStr ? JSON.parse(userStr) : null;
    } catch (error) {
      console.error('Failed to get current user:', error);
      return null;
    }
  }

  /**
   * Update password
   */
  async updatePassword(currentPassword: string, newPassword: string): Promise<AuthResponse> {
    try {
      console.log('🔐 Updating password...');

      const response = await apiService.patch(ENDPOINTS.UPDATE_PASSWORD, {
        currentPassword,
        newPassword,
      }, true);

      if (!response.success) {
        console.error('❌ Password update error:', response.error);
        return {
          success: false,
          error: response.error,
        };
      }

      console.log('✅ Password updated successfully');
      return {
        success: true,
      };

    } catch (error: any) {
      console.error('💥 Unexpected password update error:', error);
      return {
        success: false,
        error: error.message || 'An unexpected error occurred',
      };
    }
  }

  /**
   * Forgot password
   */
  async forgotPassword(email: string): Promise<AuthResponse> {
    try {
      console.log('📧 Sending forgot password email...');

      const response = await apiService.post(ENDPOINTS.FORGOT_PASSWORD, { email }, true);

      if (!response.success) {
        console.error('❌ Forgot password error:', response.error);
        return {
          success: false,
          error: response.error,
        };
      }

      console.log('✅ Forgot password email sent successfully');
      return {
        success: true,
      };

    } catch (error: any) {
      console.error('💥 Unexpected forgot password error:', error);
      return {
        success: false,
        error: error.message || 'An unexpected error occurred',
      };
    }
  }

  /**
   * Reset password with token
   */
  async resetPassword(token: string, newPassword: string): Promise<AuthResponse> {
    try {
      console.log('🔐 Resetting password with token...');

      const response = await apiService.patch(`${ENDPOINTS.RESET_PASSWORD}/${token}`, {
        newPassword,
      }, true);

      if (!response.success) {
        console.error('❌ Password reset error:', response.error);
        return {
          success: false,
          error: response.error,
        };
      }

      console.log('✅ Password reset successfully');
      return {
        success: true,
      };

    } catch (error: any) {
      console.error('💥 Unexpected password reset error:', error);
      return {
        success: false,
        error: error.message || 'An unexpected error occurred',
      };
    }
  }

  /**
   * Login with Google using the new backend
   */
  async loginWithGoogle(): Promise<AuthResponse> {
    try {
      console.log('🔐 Starting Google Sign-In...');

      // This would need to be implemented based on your backend's Google OAuth flow
      // For now, returning a placeholder
      return {
        success: false,
        error: 'Google Sign-In not implemented with new backend yet',
      };

    } catch (error: any) {
      console.error('💥 Google Sign-In error:', error);
      return {
        success: false,
        error: error.message || 'Google Sign-In failed',
      };
    }
  }
}

export default new AuthService();
