import {createNativeStackNavigator} from "@react-navigation/native-stack";
import * as React from "react";
import Trucks from "../screens/Trucks.tsx";
import TruckDetail from "../screens/TruckDetail.tsx";
import TruckDocument from "../screens/TruckDocument.tsx";

const Navigator = createNativeStackNavigator()


const TrucksStackNavigator = () => {
    return (
        <Navigator.Navigator screenOptions={{ headerShown: false }}>
            <Navigator.Screen name="Trucks" component={Trucks}/>
            <Navigator.Screen name="Truck Detail" component={TruckDetail}/>
            <Navigator.Screen name="Truck Document" component={TruckDocument}/>
        </Navigator.Navigator>
    )
}
export default TrucksStackNavigator;