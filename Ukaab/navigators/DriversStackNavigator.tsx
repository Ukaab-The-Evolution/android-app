import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";
import * as React from "react";
import Drivers from "../screens/Drivers.tsx";
import DriverRegistration from "../screens/DriverRegistration.tsx";
import DriverDocuments from "../screens/DriverDocuments.tsx";

export type DriversStackNavigatorParamList = {
    "Drivers"?: never
    "Driver Registration"?: never
    "Driver Documents"?: never
};


const Navigator = createNativeStackNavigator<DriversStackNavigatorParamList>()


const DriversStackNavigator = () => {
    return (
        <Navigator.Navigator screenOptions={{ headerShown: false }}>
            <Navigator.Screen name="Drivers" component={Drivers}/>
            <Navigator.Screen name="Driver Registration" component={DriverRegistration}/>
            <Navigator.Screen name="Driver Documents" component={DriverDocuments}/>
        </Navigator.Navigator>
    )
}
export default DriversStackNavigator;