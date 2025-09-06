import styled from "styled-components/native";
import {TouchableNativeFeedback} from "react-native";
import LinearGradient from "react-native-linear-gradient";

export const Button = styled(TouchableNativeFeedback)`
    border-radius: 100px;
`

type ButtonGradientProps = {
    disabled?: boolean
}

export const Gradient = styled(LinearGradient).attrs({start: {x: 0.5, y: 0},
    colors: ["#578C7A", "#223931"], end: {x: 0.5, y: 4}
})<ButtonGradientProps>`
    padding: 10px 8px;
    opacity: ${({disabled}) => (disabled ? 0.6 : 1)};
    overflow: hidden;
    border-radius: 100px;
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 12px;
    flex: 1;
`

export const Text = styled.Text`
    color: white;
    font-size: 12px;
    font-family: Poppins-SemiBold;
`