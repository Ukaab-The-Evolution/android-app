import {createContext, PropsWithChildren, useEffect, useMemo} from "react";
import {GoogleSignin} from "@react-native-google-signin/google-signin";
import AuthService, {AuthInterface} from "../services/AuthService.ts";
import Config from "react-native-config";

export const AuthContext = createContext<AuthInterface | null>(null)

const AuthProvider = ({children}: PropsWithChildren) => {
    const authService: AuthService = useMemo(() => new AuthService(), [])

    useEffect(() => {
        // Configure Google Sign-In with your Web Client ID
        GoogleSignin.configure({
            webClientId: Config.GOOGLE_WEB_CLIENT_ID,
        });

    }, []);



    return <AuthContext.Provider value={authService}>
        {children}
    </AuthContext.Provider>;
}

export default AuthProvider