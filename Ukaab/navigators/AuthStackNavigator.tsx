import {createNativeStackNavigator} from "@react-navigation/native-stack";
import OTPVerification from "../screens/OTPVerification.tsx";
import {NavigationContainer} from "@react-navigation/native";
import {BottomTabNavigator} from "./BottomTabNavigator.tsx";
import ForgotPassword from "../screens/ForgotPassword.tsx";
import ResetPassword from "../screens/ResetPassword.tsx";

const Navigator = createNativeStackNavigator();


const AuthStackNavigator = () => {
    return <NavigationContainer>
        <Navigator.Navigator initialRouteName="Main App" screenOptions={{ headerShown: false }}>
            <Navigator.Screen name="OTP Verification" component={OTPVerification}/>
            <Navigator.Screen name="Forgot Password" component={ForgotPassword}/>
            <Navigator.Screen name="Main App" component={BottomTabNavigator}/>
            <Navigator.Screen name="Reset Password" component={ResetPassword}/>
        </Navigator.Navigator>
    </NavigationContainer>
}


export default AuthStackNavigator;