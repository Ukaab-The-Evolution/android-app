import styled from "styled-components/native";
import {TouchableNativeFeedback} from "react-native";
import LinearGradient from "react-native-linear-gradient";


export const Row = styled.View`
    flex-direction: row;
    display: flex;
    align-items: center;
    gap: 16px;
`


type ButtonGradientProps = {
    disabled?: boolean
}

export const ButtonGradient = styled(LinearGradient).attrs({start: {x: 0.5, y: 0},
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

export const ButtonText = styled.Text`
    color: white;
    font-size: 12px;
    font-family: Poppins-SemiBold;
`

export const TextFieldContainer = styled.View`
    display: flex;
    gap: 6px;
    flex-direction: column;
    margin-bottom: 16px;
    position: relative;
`


export const TextFieldLabel = styled.Text`
    font-size: 12px;
    color: #7B7F8D;
    font-family: Poppins-Regular;
`

export const TextField = styled.View`
    background-color: #B2D7CA3B;
    border: #578C7A;
    color: #3B6255;
    font-size: 12px;
    border-radius: 8px;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
`

export const TextFieldError = styled.Text`
    font-size: 10px;
    fontfamily: Poppins-Regular;
    color: #e58686;
`


export const TextInput = styled.TextInput.attrs({
    placeholderTextColor: "#3B625588",
})`
    color: #3B6255;
    font-size: 12px;
    flex: 1;
    padding: 8px 12px;
    font-family: Poppins-Regular;
`

export const GoogleSignInFormModalContainer = styled.View`
    background: #00000022;
    align-items: center;
    justify-content: center;
    flex: 1;
`

export const GoogleSignInFormContainer = styled.View`
    background: #FFFFFF;
    padding: 24px;
    border-radius: 8px;
    border: 1px solid #D4D4D4;
`

export const GoogleSignInFormTitle = styled.Text`
    color: #3B6255;
    font-size: 20px;
    font-family: Poppins-Medium;
    margin-bottom: 48px;
    margin-top: 8px;
`

export const GoogleSignInFormText = styled.Text`
    font-size: 18px;
    font-family: Poppins-Regular;
    color: #171717;
    margin-bottom: 24px;;
`

export const SecondaryButton = styled.View`
    background: #D4D4D4;
    border-radius: 100px;
    padding: 10px 8px;
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`

export const SecondaryButtonText = styled.Text`
    color: #171717;
    font-size: 12px;
    font-family: Poppins-Medium;
`

export const IconButton = styled(TouchableNativeFeedback).attrs({
    useForeground: true,
    background: TouchableNativeFeedback.Ripple("#17171711", true)
})`
    padding: 8px;
    border-radius: 100px;
`

export const GoogleButtonContainer = styled.View`
    background: transparent;
    border: 1px solid #578C7A;
    border-radius: 100px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 12px 14px;
    align-items: center;
    gap: 16px;
`

export const GoogleButtonText = styled.Text`
    font-family: Poppins-Medium;
    font-size: 12px;
    color: #7B7F8D;
    line-height: 12px;
`

export const GoogleIcon = styled.Image`
    width: 18px;
    height: 18px;
`