import {createNativeStackNavigator} from "@react-navigation/native-stack";
import OTPVerification from "../screens/OTPVerification.tsx";
import {createNavigationContainerRef, LinkingOptions, NavigationContainer} from "@react-navigation/native";
import {BottomTabNavigator} from "./BottomTabNavigator.tsx";
import ForgotPassword from "../screens/ForgotPassword.tsx";
import ResetPassword from "../screens/ResetPassword.tsx";
import Register from "../screens/Register.tsx";
import AyanGetStarted from "../screens/AyanGetStarted.tsx";
import ChooseRole from "../screens/ChooseRole.tsx";
import AyanLogin from "../screens/AyanLogin.tsx";
import {useContext, useEffect} from "react";
import {AyanAuthContext} from "../providers/AyanAuthProvider.tsx";
import {Linking} from "react-native";
import GetStarted from "../screens/GetStarted.tsx";
import RoleSelection from "../screens/RoleSelection.tsx";
import Login from "../screens/Login.tsx";
import LoadRequestsPage from "../screens/LoadRequestsPage.tsx";


// TEMPORARY: Set to true to skip login and go directly to main app
const SKIP_LOGIN_FOR_DEV = true;

// Add to the AuthStackNavigatorParamList type
export type AuthStackNavigatorParamList = {
    "OTP Verification": { email: string };
    "Register": { role: "Driver" | "Shipper" | "Company" };
    "Ayan Login": { role: "Driver" | "Shipper" | "Company" };
    "Forgot Password"?: never;
    "Reset Password": { token: string };
    "Main App"?: never;
    "Ayan Get Started"?: never;
    "Choose Role"?: never;
    "Get Started"?: never;
    "Role Selection"?: never;
    "Login"?: never;
    "LoadRequestsPage"?: never;
};

const Navigator = createNativeStackNavigator<AuthStackNavigatorParamList>();

export const navigationRef = createNavigationContainerRef<AuthStackNavigatorParamList>();


const AuthStackNavigator = () => {
    const authProvider = useContext(AyanAuthContext)

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

    // Determine initial route based on development flag
    const initialRoute = SKIP_LOGIN_FOR_DEV ? "Main App" : "Ayan Get Started";

    return (
        <NavigationContainer ref={navigationRef} linking={linking}>
            <Navigator.Navigator initialRouteName={initialRoute} screenOptions={{headerShown: false}}>
                <Navigator.Screen name="OTP Verification" component={OTPVerification}/>
                <Navigator.Screen name="Forgot Password" component={ForgotPassword}/>
                <Navigator.Screen name="Main App" component={BottomTabNavigator}/>
                <Navigator.Screen name="Reset Password" component={ResetPassword}/>
                <Navigator.Screen name="Register" component={Register}/>
                <Navigator.Screen name="Ayan Get Started" component={AyanGetStarted}/>
                <Navigator.Screen name="Choose Role" component={ChooseRole}/>
                <Navigator.Screen name="Ayan Login" component={AyanLogin}/>
                <Navigator.Screen name="Get Started" component={GetStarted}/>
                <Navigator.Screen name="Role Selection" component={RoleSelection}/>
                <Navigator.Screen name="Login" component={Login}/>
                <Navigator.Screen name="LoadRequestsPage" component={LoadRequestsPage}/>
            </Navigator.Navigator>
        </NavigationContainer>
    )
}


export default AuthStackNavigator;