import 'react-native-url-polyfill/auto';
import { createClient } from '@supabase/supabase-js';
import Config from 'react-native-config';

// Environment variables with fallbacks for development
const supabaseUrl = Config.NEXT_PUBLIC_SUPABASE_URL || 'https://aolinrjyoaxafvmedasr.supabase.co';
const supabaseAnonKey = Config.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFvbGlucmp5b2F4YWZ2bWVkYXNyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM3MzQzODcsImV4cCI6MjA2OTMxMDM4N30.q4j39ENJisC7I-p-q9RelMfAbjOhh7O8kYuE-6bMJMc';

// Validate configuration
if (!supabaseUrl || !supabaseAnonKey) {
    console.error('❌ Supabase configuration missing. Please check your .env file.');
    throw new Error('Missing Supabase configuration');
}

console.log('✅ Supabase configured for database operations');

/**
 * Supabase client configured for database operations only
 * Authentication is handled by Render backend
 */
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
        autoRefreshToken: false, // Auth handled by Render backend
        persistSession: false,   // Session management through Render
        detectSessionInUrl: false,
    },
});

/**
 * Service for direct database operations with Supabase
 * Used after authentication is completed through Render backend
 */
export class SupabaseService {
    /**
     * Get user profile from Supabase database
     * @param userId - User ID from authenticated session
     * @returns Promise with user profile data
     */
    static async getUserProfile(userId: string) {
        try {
            const { data, error } = await supabase
                .from('users')
                .select('*')
                .eq('id', userId)
                .single();

            if (error) throw error;
            return { success: true, data };
        } catch (error: any) {
            console.error('Failed to get user profile:', error);
            return { success: false, error: error.message };
        }
    }

    /**
     * Update user profile in Supabase
     * @param userId - User ID to update
     * @param updates - Profile data to update
     * @returns Promise with updated user data
     */
    static async updateUserProfile(userId: string, updates: Record<string, any>) {
        try {
            const { data, error } = await supabase
                .from('users')
                .update(updates)
                .eq('id', userId)
                .select()
                .single();

            if (error) throw error;
            return { success: true, data };
        } catch (error: any) {
            console.error('Failed to update user profile:', error);
            return { success: false, error: error.message };
        }
    }

    /**
     * Get all trucking companies from Supabase
     * @returns Promise with trucking companies data
     */
    static async getTruckingCompanies() {
        try {
            const { data, error } = await supabase
                .from('trucking_companies')
                .select('*');

            if (error) throw error;
            return { success: true, data };
        } catch (error: any) {
            console.error('Failed to get trucking companies:', error);
            return { success: false, error: error.message };
        }
    }

    /**
     * Get trucking company by ID
     * @param companyId - Company ID to fetch
     * @returns Promise with company data
     */
    static async getTruckingCompanyById(companyId: string) {
        try {
            const { data, error } = await supabase
                .from('trucking_companies')
                .select('*')
                .eq('id', companyId)
                .single();

            if (error) throw error;
            return { success: true, data };
        } catch (error: any) {
            console.error('Failed to get trucking company:', error);
            return { success: false, error: error.message };
        }
    }
}
