import Config from "react-native-config";
import {GoogleSignin} from "@react-native-google-signin/google-signin";
import {supabase} from "../supabase.ts";
import {User} from "@supabase/supabase-js";
import * as Keychain from 'react-native-keychain';

export interface AyanAuthInterface {
    register: (form: UserRegister, userType: "Driver" | "Company" | "Shipper") => Promise<any>;
    login: (form: UserLogin) => Promise<any>;
    continueWithGoogle: (values: { name: string }) => Promise<User | undefined>;
    verifyOtp: (email: string, otp: string) => Promise<any>;
    forgotPassword: (email: string) => Promise<any>;
    token: () => Promise<string | null>;
    authenticated: Promise<boolean>;
    resetPassword: (token: string, form: PasswordUpdate) => Promise<any>;
}
export interface UserRegister {
    fullName: string;
    email: string;
    password: string;
    phone?: string;
    companyCode: string;
}

export interface UserLogin {
    email: string;
    password: string;
}

export interface PasswordUpdate {
    confirmPassword: string;
    password: string;
}

class AyanAuthService implements AyanAuthInterface {

    token = async () => {
        try {
            const data = await Keychain.getGenericPassword()
            if(data){
                return data.password
            }
            return null
        }
        catch(err){
            return null
        }
    }

    resetPassword = async (token: string, form: PasswordUpdate) => {
        const headers = {
            "Content-Type": "application/json",
        }

        const response = await fetch(`${Config.API_URL}/api/v1/auth/resetPassword/${token}`, {
            headers: headers,
            method: "PATCH",
            body: JSON.stringify({newPassword: form.password})
        })
        if (!response.ok) {
            throw response;
        }
        const data = await response.json()
        await Keychain.setGenericPassword("access_token", data.token)
        return data
    }

    get authenticated(){
        return this.token().then((value) => {
            return !!value;
        });
    }

    forgotPassword = async (email: string): Promise<any> => {
        const headers = {
            "Content-Type": "application/json",
            "apikey": Config.SUPABASE_ANON_KEY!,
            "Authorization": `Bearer ${Config.SUPABASE_ANON_KEY!}`
        }

        const response = await fetch(`${Config.API_URL}/api/v1/auth/forgotPassword`, {
            headers: headers,
            method: "POST",
            body: JSON.stringify({email})
        })
        if (!response.ok) {
            throw response;
        }
        return await response.json()
    }
    verifyOtp = async (email: string, otp: string) => {
        const headers = {
            "Content-Type": "application/json",
            "apikey": Config.SUPABASE_ANON_KEY!,
            "Authorization": `Bearer ${Config.SUPABASE_ANON_KEY!}`
        }

        const body = {
            toEmail: email,
            otp: otp,
        }
        const response = await fetch(`${Config.API_URL}/api/v1/auth/verify-otp`, {
            headers: headers,
            method: "POST",
            body: JSON.stringify(body)
        })
        if (!response.ok) {
            throw response;
        }
        const data = await response.json()
        await Keychain.setGenericPassword("access_token", data.token)
        return data
    }

    register = async (form: UserRegister, userType: "Driver" | "Company" | "Shipper") => {
        const headers = {
            "Content-Type": "application/json",
        }
        const userMapping = {
            "Driver": "driver",
            "Company": "trucking_company",
            "Shipper": "shipper",
        }
        const body = {
            "email": form.email,
            "password": form.password,
            "user_type": userMapping[userType],
            "full_name": form.fullName
        }
        const response = await fetch(`${Config.API_URL}/api/v1/auth/signup`, {
            method: "POST",
            headers: headers,
            body: JSON.stringify(body),
        })
        if (!response.ok) {
            throw response;
        }
        const otp = await fetch(`${Config.API_URL}/api/v1/auth/send-otp`, {
            method: "POST",
            headers: headers,
            body: JSON.stringify({toEmail: body.email})
        })
        if (!otp.ok) {
            throw otp;
        }

        return await response.json()
    }

    login = async (form: UserLogin) => {
        const headers = {
            "Content-Type": "application/json",
            "apikey": Config.SUPABASE_ANON_KEY!,
            "Authorization": `Bearer ${Config.SUPABASE_ANON_KEY!}`
        }

        const response = await fetch(`${Config.API_URL}/api/v1/auth/login`, {
            method: "POST",
            headers: headers,
            body: JSON.stringify(form),
        })
        if (!response.ok) {
            throw response;
        }
        const data = await response.json()
        await Keychain.setGenericPassword("access_token", data.token)
        return data
    }

    continueWithGoogle = async (values: { name: string }) => {

        await GoogleSignin.hasPlayServices();
        // Open Google Sign-In prompt
        const userInfo = await GoogleSignin.signIn();
        // Get the ID token from Google
        const idToken = userInfo.data?.idToken;
        // Send token to Supabase for authentication
        if (idToken) {
            const {data, error} = await supabase.auth.signInWithIdToken({
                provider: 'google',
                token: idToken,
            });
            if (error) {
                throw error;
            }
            if (data.user) {
                const body = {
                    id: data.user?.id,
                    email: data.user?.email,
                    name: data.user?.user_metadata.name,
                    avatar_url: data.user?.user_metadata.avatar_url,
                    provider: data.user?.app_metadata.provider,
                    created_at: data.user?.created_at
                }
                const headers = {
                    "Content-Type": "application/json",
                    "apikey": Config.SUPABASE_ANON_KEY!,
                    "Authorization": `Bearer ${Config.SUPABASE_ANON_KEY!}`
                }
                const response = await fetch(`${Config.SUPABASE_URL}/auth/v1/callback`,
                    {method: "POST", headers: headers, body: JSON.stringify(body)});

                if (!response.ok) {
                    throw response;
                }
            }
            return data.user
        }

    }

}


export default AyanAuthService