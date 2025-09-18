import Config from "react-native-config";
import {GoogleSignin} from "@react-native-google-signin/google-signin";
import {supabase} from "../supabase.ts";
import {User} from "@supabase/supabase-js";
import UkaabUser from "../models/User.ts";
import * as Keychain from 'react-native-keychain';
import Geolocation from '@react-native-community/geolocation';

export interface AyanAuthInterface {
    register: (form: UserRegister, userType: "Driver" | "Company" | "Shipper") => Promise<any>;
    login: (form: UserLogin) => Promise<any>;
    continueWithGoogle: (values: { name: string }) => Promise<User | undefined>;
    verifyOtp: (email: string, otp: string) => Promise<any>;
    forgotPassword: (email: string) => Promise<any>;
    getToken: () => Promise<string | null>;
    resetPassword: (token: string, form: PasswordUpdate) => Promise<any>;
    getMe: (token: string) => Promise<UkaabUser>;
    deleteToken: () => Promise<any>;
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

    getToken = async () => {
        try {
            const data = await Keychain.getGenericPassword()
            if (!data) return null
            return data.password
        }
        catch (error) {
            return null;
        }
    }

    deleteToken = async () => {
        try {
            await Keychain.resetGenericPassword()
        }
        catch (error) {
            return null;
        }
    }

    getMe = async (token: string): Promise<UkaabUser> => {
        const headers = {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }

        const response = await fetch(`${Config.API_URL}/api/v1/auth/me`, {
            headers: headers,
            method: "GET"
        })
        if (!response.ok) {
            throw response;
        }
        const data = await response.json()
        console.log(data.data.user)
        return new UkaabUser(data)
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


    forgotPassword = async (email: string): Promise<any> => {
        const headers = {
            "Content-Type": "application/json",
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
        let accessDenied = false;
        Geolocation.requestAuthorization(undefined, () => {
            accessDenied = true;
        })

        return {"access_denied": accessDenied, "data": await response.json()};
    }

    login = async (form: UserLogin) => {
        const headers = {
            "Content-Type": "application/json",
        }

        const response = await fetch(`${Config.API_URL}/api/v1/auth/login`, {
            method: "POST",
            headers: headers,
            body: JSON.stringify(form),
        })
        if (!response.ok) {
            console.log("Response", await response.json())
            throw response;
        }
        const data = await response.json()
        await Keychain.setGenericPassword("access_token", data.token)
        let accessDenied = false;
        Geolocation.requestAuthorization(undefined, () => {
            accessDenied = true;
        })

        return {"access_denied": accessDenied, "data": data};
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
                    "apikey": Config.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
                    "Authorization": `Bearer ${Config.NEXT_PUBLIC_SUPABASE_ANON_KEY!}`
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