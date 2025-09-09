import {createNativeStackNavigator} from "@react-navigation/native-stack";
import OTPVerification from "../screens/OTPVerification.tsx";
import {createNavigationContainerRef, LinkingOptions, NavigationContainer} from "@react-navigation/native";
import {BottomTabNavigator} from "./BottomTabNavigator.tsx";
import ForgotPassword from "../screens/ForgotPassword.tsx";
import ResetPassword from "../screens/ResetPassword.tsx";
import Register from "../screens/Register.tsx";
import GetStarted from "../screens/GetStarted.tsx";
import ChooseRole from "../screens/ChooseRole.tsx";
import Login from "../screens/Login.tsx";
import {useContext, useEffect} from "react";
import {AuthContext} from "../providers/AuthProvider.tsx";
import {Linking} from "react-native";

export type AuthStackNavigatorParamList = {
    "OTP Verification": { email: string };
    "Register": { role: "Driver" | "Shipper" | "Company" };
    "Login": { role: "Driver" | "Shipper" | "Company" };
    "Forgot Password"?: never;
    "Reset Password": { token: string };
    "Main App"?: never;
    "Get Started"?: never;
    "Choose Role"?: never;
};

const Navigator = createNativeStackNavigator<AuthStackNavigatorParamList>();

export const navigationRef = createNavigationContainerRef<AuthStackNavigatorParamList>();


const AuthStackNavigator = () => {
    const authProvider = useContext(AuthContext)

    const linking: LinkingOptions<ReactNavigation.RootParamList> = {
        prefixes: ["https://web-app-4n1r.onrender.com"],
        config: {
            screens: {
                ResetPassword: "reset-password",
            }
        }
    }
    const handleUniversalLink = (url: string) => {
        console.log("Deep link received:", url);

        try {
            const parsed = new URL(url);
            const token = parsed.searchParams.get("token"); // e.g. /reset-password?token=abcd123

            if (token) {
                if (navigationRef.isReady()) {
                    console.log("Received token ", token);
                    navigationRef.navigate("Reset Password", {token});
                }
            }
        } catch (err) {
            console.error("Failed to parse deep link:", err);
        }
    }
    useEffect(() => {

        const sub = Linking.addEventListener("url", ({url}) => handleUniversalLink(url));
        Linking.getInitialURL().then((url) => url && handleUniversalLink(url));

        return () => sub.remove();
    }, []);
    return (
        <NavigationContainer ref={navigationRef} linking={linking}>
            <Navigator.Navigator initialRouteName={authProvider?.authenticated ? "Main App" : "Get Started"} screenOptions={{headerShown: false}}>
                <Navigator.Screen name="OTP Verification" component={OTPVerification}/>
                <Navigator.Screen name="Forgot Password" component={ForgotPassword}/>
                <Navigator.Screen name="Main App" component={BottomTabNavigator}/>
                <Navigator.Screen name="Reset Password" component={ResetPassword}/>
                <Navigator.Screen name="Register" component={Register}/>
                <Navigator.Screen name="Get Started" component={GetStarted}/>
                <Navigator.Screen name="Choose Role" component={ChooseRole}/>
                <Navigator.Screen name="Login" component={Login}/>
            </Navigator.Navigator>
        </NavigationContainer>
    )
}


export default AuthStackNavigator;