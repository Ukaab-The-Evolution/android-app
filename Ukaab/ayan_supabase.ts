import {createClient} from '@supabase/supabase-js';
import Config from 'react-native-config';



const ayanSupabaseUrl = Config.SUPABASE_URL!;
const ayanSupabaseAnonKey = Config.SUPABASE_ANON_KEY!;
export const ayan_supabase = createClient(ayanSupabaseUrl, ayanSupabaseAnonKey, {
    auth: {
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: false,
    },
});
