import {createNativeStackNavigator} from "@react-navigation/native-stack";
import * as React from "react";
import DriverDocuments from "../screens/DriverDocuments.tsx";
import About from "../screens/About.tsx";

export type AboutStackNavigatorParamList = {
    "Details"?: never
    "Upload CNIC"?: never
};


const Navigator = createNativeStackNavigator<AboutStackNavigatorParamList>()


const DriversStackNavigator = () => {
    return (
        <Navigator.Navigator screenOptions={{ headerShown: false }}>
            <Navigator.Screen name="Details" component={About}/>
            <Navigator.Screen name="Upload CNIC" component={DriverDocuments}/>
        </Navigator.Navigator>
    )
}
export default DriversStackNavigator;