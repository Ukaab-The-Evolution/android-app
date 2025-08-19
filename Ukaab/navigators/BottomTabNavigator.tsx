// @flow
import * as React from 'react';
import BottomTabBar from "../components/BottomTabBar.tsx";
import Home from "../screens/Home.tsx";
import OrderPage from "../screens/OrderPage.tsx";
import About from "../screens/About.tsx";
import {BottomTabBarProps, BottomTabNavigationOptions, createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {
    Container as AppBarContainer,
    Logo as AppBarLogo,
    MenuIcon,
} from "../styles/AppBar.ts"
import DriversStackNavigator from "./DriversStackNavigator.tsx";
import TrucksStackNavigator from "./TrucksStackNavigator.tsx";
import {TouchableNativeFeedback} from "react-native";

const Navigator = createBottomTabNavigator();

export const BottomTabNavigator = () => {
    const tabBar = (props: BottomTabBarProps) => <BottomTabBar {...props}/>
    const screenOptions: BottomTabNavigationOptions = {
        animation: "shift",
        sceneStyle: {backgroundColor: "#F8F9FA"},
        tabBarStyle: {elevation: 0},
        headerBackground: () => <AppBarContainer colors={["#578C7A", "#223931"]}/>,
        headerBackgroundContainerStyle: {boxShadow: "0px 5px 10px #00000044"},
        headerTitle: () => null,
        headerLeft: () => <AppBarLogo source={require("../assets/icons/LogoWhite.png")}/>,
        headerRight: () => (
            <TouchableNativeFeedback useForeground={true}>
                <MenuIcon source={require("../assets/icons/Stack.png")} />
            </TouchableNativeFeedback>
        )
    }

    return(
        <Navigator.Navigator tabBar={tabBar} screenOptions={screenOptions}>
            <Navigator.Screen name="Home" component={Home}/>
            <Navigator.Screen name="OrderPage" component={OrderPage}/>
            <Navigator.Screen name="Trucks" component={TrucksStackNavigator}/>
            <Navigator.Screen name="Drivers" component={DriversStackNavigator}/>
            <Navigator.Screen name="About" component={About}/>
        </Navigator.Navigator>
    );
};