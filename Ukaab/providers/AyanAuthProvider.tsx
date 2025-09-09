import {createContext, PropsWithChildren, useEffect, useMemo} from "react";
import {GoogleSignin} from "@react-native-google-signin/google-signin";
import AyanAuthService, {AyanAuthInterface} from "../services/AyanAuthService.ts";
import Config from "react-native-config";

export const AyanAuthContext = createContext<AyanAuthInterface | null>(null)

const AyanAuthProvider = ({children}: PropsWithChildren) => {
    const authService: AyanAuthService = useMemo(() => new AyanAuthService(), [])

    useEffect(() => {
        // Configure Google Sign-In with your Web Client ID
        GoogleSignin.configure({
            webClientId: Config.GOOGLE_WEB_CLIENT_ID,
        });

    }, []);



    return <AyanAuthContext.Provider value={authService}>
        {children}
    </AyanAuthContext.Provider>;
}

export default AyanAuthProvider