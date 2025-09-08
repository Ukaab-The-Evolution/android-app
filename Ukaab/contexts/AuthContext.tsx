import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import AuthService from '../services/AuthService';

interface User {
  id: string;
  email: string;
  // Add other user properties as needed
}

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => Promise<void>;
  checkAuthStatus: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  /**
   * Check authentication status when app starts
   * This runs automatically when the app launches
   */
  const checkAuthStatus = async () => {
    console.log('🔍 Checking authentication status...');
    setIsLoading(true);

    try {
      const response = await AuthService.checkAuthStatus();

      if (response.success && response.user) {
        setUser(response.user);
        setIsAuthenticated(true);
        console.log('✅ User is authenticated:', response.user.email);
      } else {
        setUser(null);
        setIsAuthenticated(false);
        console.log('❌ User is not authenticated');
      }
    } catch (error) {
      console.error('💥 Auth status check failed:', error);
      setUser(null);
      setIsAuthenticated(false);
    } finally {
      setIsLoading(false);
    }
  };

  /**
   * Login function to be used by Login screen
   */
  const login = async (email: string, password: string): Promise<boolean> => {
    setIsLoading(true);

    try {
      const response = await AuthService.login({ email, password });

      if (response.success && response.user) {
        setUser(response.user);
        setIsAuthenticated(true);
        console.log('✅ Context: User logged in successfully');
        return true;
      } else {
        console.log('❌ Context: Login failed');
        return false;
      }
    } catch (error) {
      console.error('💥 Context: Login error:', error);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  /**
   * Logout function
   */
  const logout = async () => {
    setIsLoading(true);

    try {
      await AuthService.logout();
      setUser(null);
      setIsAuthenticated(false);
      console.log('✅ Context: User logged out successfully');
    } catch (error) {
      console.error('💥 Context: Logout error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Check auth status when component mounts
  useEffect(() => {
    checkAuthStatus();
  }, []);

  const value: AuthContextType = {
    user,
    isLoading,
    isAuthenticated,
    login,
    logout,
    checkAuthStatus,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

/**
 * Custom hook to use authentication context
 * Use this in any component that needs auth functionality
 */
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
};

export default AuthContext;
