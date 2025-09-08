import {createNativeStackNavigator} from "@react-navigation/native-stack";
import OTPVerification from "../screens/OTPVerification.tsx";
import {NavigationContainer} from "@react-navigation/native";
import {BottomTabNavigator} from "./BottomTabNavigator.tsx";
import ForgotPassword from "../screens/ForgotPassword.tsx";
import ResetPassword from "../screens/ResetPassword.tsx";
import GetStarted from "../screens/GetStarted.tsx";
import RoleSelection from "../screens/RoleSelection.tsx";
import Login from "../screens/Login.tsx";

const Navigator = createNativeStackNavigator();


const AuthStackNavigator = () => {
    return <NavigationContainer>
        <Navigator.Navigator initialRouteName="Get Started" screenOptions={{ headerShown: false }}>
            <Navigator.Screen name="Get Started" component={GetStarted}/>
            <Navigator.Screen name="Role Selection" component={RoleSelection}/>
            <Navigator.Screen name="Login" component={Login}/>
            <Navigator.Screen name="OTP Verification" component={OTPVerification}/>
            <Navigator.Screen name="Forgot Password" component={ForgotPassword}/>
            <Navigator.Screen name="Reset Password" component={ResetPassword}/>
            <Navigator.Screen name="Main App" component={BottomTabNavigator}/>
        </Navigator.Navigator>
    </NavigationContainer>
}


export default AuthStackNavigator;