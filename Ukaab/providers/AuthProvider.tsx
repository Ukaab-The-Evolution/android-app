import {createContext, PropsWithChildren, useEffect, useMemo} from "react";
import {GoogleSignin} from "@react-native-google-signin/google-signin";
import AuthService, {AuthInterface} from "../services/AuthService.ts";

export const AuthContext = createContext<AuthInterface | null>(null)

const AuthProvider = ({children}: PropsWithChildren) => {
    const authService: AuthService = useMemo(() => new AuthService(), [])

    useEffect(() => {
        // Configure Google Sign-In with your Web Client ID
        GoogleSignin.configure({
            webClientId: "680987785000-el7nsp7c8ni553i4odauo8clsndj853i.apps.googleusercontent.com",
        });

    }, []);



    return <AuthContext.Provider value={authService}>
        {children}
    </AuthContext.Provider>;
}

export default AuthProvider