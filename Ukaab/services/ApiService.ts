import AsyncStorage from '@react-native-async-storage/async-storage';
import { API_CONFIG } from '../config/api';

export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
  token?: string;
}

class ApiService {
  private baseURL: string;
  private authBaseURL: string;

  constructor() {
    this.baseURL = API_CONFIG.BASE_URL;
    this.authBaseURL = API_CONFIG.AUTH_BASE_URL;
  }

  /**
   * Get stored auth token
   */
  private async getAuthToken(): Promise<string | null> {
    try {
      return await AsyncStorage.getItem('accessToken');
    } catch (error) {
      console.error('Failed to get auth token:', error);
      return null;
    }
  }

  /**
   * Make HTTP request with proper headers and error handling
   */
  private async makeRequest<T>(
    url: string,
    options: RequestInit = {},
    useAuthBase: boolean = false
  ): Promise<ApiResponse<T>> {
    try {
      const fullUrl = `${useAuthBase ? this.authBaseURL : this.baseURL}${url}`;

      // Get auth token if available
      const token = await this.getAuthToken();

      const defaultHeaders: Record<string, string> = {
        'Content-Type': 'application/json',
      };

      // Add authorization header if token exists
      if (token) {
        defaultHeaders['Authorization'] = `Bearer ${token}`;
      }

      const config: RequestInit = {
        ...options,
        headers: {
          ...defaultHeaders,
          ...options.headers,
        },
        timeout: API_CONFIG.TIMEOUT,
      };

      const response = await fetch(fullUrl, config);
      const responseText = await response.text();

      let responseData;
      try {
        if (!responseText.trim()) {
          return {
            success: false,
            error: `Server returned empty response. Status: ${response.status}`,
          };
        }
        responseData = JSON.parse(responseText);
      } catch (parseError) {
        return {
          success: false,
          error: `Invalid JSON response. Status: ${response.status}`,
        };
      }

      if (!response.ok) {
        let errorMessage = `HTTP ${response.status}`;

        if (responseData?.message) {
          errorMessage = responseData.message;
        } else if (responseData?.error) {
          errorMessage = responseData.error;
        } else if (response.status === 401) {
          errorMessage = 'Invalid credentials. Please check your email and password.';
        } else if (response.status === 404) {
          errorMessage = 'Service not found. Please contact support.';
        } else if (response.status >= 500) {
          errorMessage = 'Server error. Please try again later.';
        }

        return {
          success: false,
          error: errorMessage,
        };
      }

      // Handle different success response formats
      const result: ApiResponse<T> = {
        success: true,
        data: responseData.data || responseData.user || responseData,
        message: responseData.message,
      };

      // Check for token in different possible locations
      if (responseData.token) {
        result.token = responseData.token;
      } else if (responseData.access_token) {
        result.token = responseData.access_token;
      } else if (responseData.data?.token) {
        result.token = responseData.data.token;
      }

      return result;

    } catch (error: any) {
      console.error('API Request failed:', error);

      if (error.name === 'TypeError' && error.message.includes('fetch')) {
        return {
          success: false,
          error: 'Network error: Unable to connect to server.',
        };
      }

      return {
        success: false,
        error: error.message || 'Network error occurred',
      };
    }
  }

  /**
   * GET request
   */
  async get<T>(url: string, useAuthBase: boolean = false): Promise<ApiResponse<T>> {
    return this.makeRequest<T>(url, { method: 'GET' }, useAuthBase);
  }

  /**
   * POST request
   */
  async post<T>(
    url: string,
    data?: any,
    useAuthBase: boolean = false
  ): Promise<ApiResponse<T>> {
    return this.makeRequest<T>(
      url,
      {
        method: 'POST',
        body: data ? JSON.stringify(data) : undefined,
      },
      useAuthBase
    );
  }

  /**
   * PATCH request
   */
  async patch<T>(
    url: string,
    data?: any,
    useAuthBase: boolean = false
  ): Promise<ApiResponse<T>> {
    return this.makeRequest<T>(
      url,
      {
        method: 'PATCH',
        body: data ? JSON.stringify(data) : undefined,
      },
      useAuthBase
    );
  }

  /**
   * PUT request
   */
  async put<T>(
    url: string,
    data?: any,
    useAuthBase: boolean = false
  ): Promise<ApiResponse<T>> {
    return this.makeRequest<T>(
      url,
      {
        method: 'PUT',
        body: data ? JSON.stringify(data) : undefined,
      },
      useAuthBase
    );
  }

  /**
   * DELETE request
   */
  async delete<T>(url: string, useAuthBase: boolean = false): Promise<ApiResponse<T>> {
    return this.makeRequest<T>(url, { method: 'DELETE' }, useAuthBase);
  }

  /**
   * Health check
   */
  async healthCheck(): Promise<ApiResponse> {
    return this.get('/health');
  }
}

export const apiService = new ApiService();
