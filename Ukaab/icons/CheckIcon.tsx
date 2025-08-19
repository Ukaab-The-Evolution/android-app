import React from "react";
import { StyleProp, ViewStyle } from "react-native";
import Svg, { Path } from "react-native-svg";

type IconProps = {
    size?: number;
    color?: string;
    style?: StyleProp<ViewStyle>;
};

const CheckIcon: React.FC<IconProps> = ({size = 24, color = "black", style}) => {
    return (
        <Svg
            width={size}
            height={size}
            viewBox="0 0 14 14"
            fill="none"
            style={style} // pass down styles
        >
            <Path
                d="M11.6668 3.5L5.25016 9.91667L2.3335 7"
                stroke={color}
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    );
};

export default CheckIcon;
