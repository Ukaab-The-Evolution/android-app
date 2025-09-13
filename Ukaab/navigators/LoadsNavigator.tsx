import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoadRequestsPage from "../screens/LoadRequestsPage";
import AcceptedLoadsPage from "../screens/AcceptedLoadsPage";
import DetailedView from "../screens/DetailedView";

const Navigator = createNativeStackNavigator();

const LoadsNavigator = () => {
    return (
        <Navigator.Navigator screenOptions={{ headerShown: false }}>
            <Navigator.Screen name="LoadRequests" component={LoadRequestsPage} />
            <Navigator.Screen name="AcceptedLoads" component={AcceptedLoadsPage} />
            <Navigator.Screen name="DetailedView" component={DetailedView} />
        </Navigator.Navigator>
    );
};

export default LoadsNavigator;
