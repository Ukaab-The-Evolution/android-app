import {createContext, PropsWithChildren, useContext, useEffect, useMemo, useState} from "react";
import {GoogleSignin} from "@react-native-google-signin/google-signin";
import AyanAuthService, {AyanAuthInterface} from "../services/AyanAuthService.ts";
import Config from "react-native-config";
import User from "../models/User.ts";


interface AyanAuthContextInterface extends AyanAuthInterface {
    authenticated: boolean;
    token: string | null;
    user: User | null;
}

export const AyanAuthContext = createContext<AyanAuthContextInterface | null>(null)

const AyanAuthProvider = ({children}: PropsWithChildren) => {
    const authService: AyanAuthService = useMemo(() => new AyanAuthService(), [])
    const [authenticated, setAuthenticated] = useState(false)
    const [token, setToken] = useState<string | null>(null)
    const [user, setUser] = useState<User | null>(null)



    useEffect(() => {
        // Configure Google Sign-In with your Web Client ID
        GoogleSignin.configure({
            webClientId: Config.GOOGLE_WEB_CLIENT_ID,
        });
    }, []);

    useEffect(() => {
        authService.getToken().then((value) => {
            setToken(value);
            if(value){
                authService.getMe(value).then((data) => {
                    setUser(data);
                }).catch((error) => {
                    console.log("Error", error);
                    authService.deleteToken().then(() => setToken(null)).catch(() => setToken(null));
                })
            }
            setAuthenticated(value !== null);
        })
    }, [authService]);




    return <AyanAuthContext.Provider value={{authenticated, token, user, ...authService}}>
        {children}
    </AyanAuthContext.Provider>;
}

export const useAyanAuth = () => {
    return useContext(AyanAuthContext)
}

export default AyanAuthProvider