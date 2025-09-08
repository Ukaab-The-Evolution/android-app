// API Configuration
export const API_CONFIG = {
  // Production backend URL - Render endpoint
  BASE_URL: 'https://web-app-4n1r.onrender.com/api/v1',
  AUTH_BASE_URL: 'https://web-app-4n1r.onrender.com/api/v1/auth',

  TIMEOUT: 10000, // 10 seconds
};

// API endpoints
export const ENDPOINTS = {
  // Health check
  HEALTH: '/health',

  // Authentication
  LOGIN: '/login',
  SIGNUP: '/signup',
  LOGOUT: '/logout',
  ME: '/me',
  UPDATE_PASSWORD: '/updatePassword',
  FORGOT_PASSWORD: '/forgotPassword',
  RESET_PASSWORD: '/resetPassword',
  SEND_OTP: '/send-otp',
  VERIFY_OTP: '/verify-otp',
  RESEND_OTP: '/resend-otp',

  // Admin
  CREATE_ADMIN: '/createAdmin',
};
