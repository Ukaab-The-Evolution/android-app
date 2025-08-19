import React from "react";
import { StyleProp, ViewStyle } from "react-native";
import Svg, { Path } from "react-native-svg";

type IconProps = {
    size?: number;
    color?: string;
    style?: StyleProp<ViewStyle>;
};

const DoubleChevronRightIcon: React.FC<IconProps> = ({size = 24, color = "black", style}) => {
    return (
        <Svg
            width={size}
            height={size}
            viewBox="0 0 18 18"
            fill="none"
            style={style}
        >
            <Path
                d="M9.75 12.75L13.5 9L9.75 5.25"
                stroke={color}
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Path
                d="M4.5 12.75L8.25 9L4.5 5.25"
                stroke={color}
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    );
};

export default DoubleChevronRightIcon;
