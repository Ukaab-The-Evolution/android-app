import React, { useEffect } from "react";
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withRepeat,
    withTiming,
    Easing,
} from "react-native-reanimated";
import { LoaderCircle } from "lucide-react-native";

interface SpinnerProps {
    size?: number;
    color?: string;
}

const AnimatedLoader = Animated.createAnimatedComponent(LoaderCircle);

const BasicSpinner: React.FC<SpinnerProps> = ({ size = 24, color = "#FFFFFF" }) => {
    const rotation = useSharedValue(0);

    useEffect(() => {
        rotation.value = withRepeat(
            withTiming(360, {
                duration: 1000,
                easing: Easing.linear,
            }),
            -1, // infinite
            false
        );
    }, [rotation]);

    const animatedStyle = useAnimatedStyle(() => ({
        transform: [{ rotate: `${rotation.value}deg` }],
    }));

    return <AnimatedLoader size={size} color={color} style={animatedStyle} />;
};


export default BasicSpinner;
