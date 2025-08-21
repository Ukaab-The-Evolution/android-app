import {
    Background,
    Container,
    Icon,
    IconContainer,
    IconHoverContainer,
    IconHoveredBackgroundContainer
} from "../styles/BottomTabBar.ts";
import {NavigationHelpers, NavigationRoute, ParamListBase, TabNavigationState} from "@react-navigation/native";
import {BottomTabNavigationEventMap} from "@react-navigation/bottom-tabs";
import {ImageSourcePropType, TouchableWithoutFeedback} from "react-native";
import Animated from 'react-native-reanimated';
import {useTheme} from "styled-components";
import {Path} from "react-native-svg";


interface BottomTabBarProps {
    state: TabNavigationState<ParamListBase>;
    navigation: NavigationHelpers<ParamListBase, BottomTabNavigationEventMap>;
}

type IconProps = {
    source: ImageSourcePropType
    width: number
    height: number
}

const icons: Record<string, IconProps> = {
    "Home": {"source": require("../assets/icons/Home.png"), "width": 28, "height": 28},
    "OrderPage": {"source": require( "../assets/icons/Booking.png"), "width": 32, "height": 32},
    "Trucks": {"source": require("../assets/icons/CargoTruck.png"), "width": 32, "height": 32},
    "Drivers": {"source": require("../assets/icons/TruckDriver.png"), "width": 32, "height": 32},
    "About": {"source": require("../assets/icons/UserCircle.png"), "width": 26, "height": 26},
}

const AnimatedIconHoverContainer = Animated.createAnimatedComponent(IconHoverContainer)
const AnimatedIconContainer = Animated.createAnimatedComponent(IconContainer)

const BottomTabBar = ({navigation, state}: BottomTabBarProps) => {
    const theme = useTheme();
    return <Background>
        <Container colors={["#223931", "#578C7A"]}>
            {state.routes.map((route: NavigationRoute<ParamListBase, string>, index: number) => {
                let active = route.name === state.routeNames[state.index]
                let style = {
                    transitionProperty: ["transform"],
                    transitionDuration: 0,
                    transform: [{ translateY: active ? -20 : 0 }],
                    fill: active ? "#F8F9FA" : "transparent",
                    justifyContent: active ? "start": "center"
                }
                let iconStyle = {
                    transitionProperty: "backgroundColor",
                    transitionDuration: 0,
                    backgroundColor: active ?  "#578C7A": "transparent"
                }
                return <TouchableWithoutFeedback key={route.key} onPress={() => navigation.navigate(route.name)}>
                    <AnimatedIconHoverContainer style={style}>
                        <IconHoveredBackgroundContainer fill={style.fill} viewBox="0 0 75 20">
                            <Path d="M0.00390625 1.00391C3.35923 10.7885 9.10221 19.4735 16.263 25.1076C23.4239 30.7416 31.7162 33.4186 39.9547 32.7559C48.1932 32.0932 55.9562 28.1247 62.1341 21.4176C68.312 14.7106 71.2399 11.2003 74.0038 1.00391L35.9849 0.913726L0.00390625 1.00391Z"/>
                        </IconHoveredBackgroundContainer>
                        <AnimatedIconContainer style={iconStyle}>
                            <Icon {...icons[route.name]}/>
                        </AnimatedIconContainer>
                    </AnimatedIconHoverContainer>

                </TouchableWithoutFeedback>
            })}
        </Container>
    </Background>
}


export default BottomTabBar

