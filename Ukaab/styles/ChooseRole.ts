import styled from "styled-components/native";
import {ImageBackground, TouchableNativeFeedback} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import {BlurView} from "@react-native-community/blur";



export const MainContainer = styled.View`
    display: flex;
    justify-content: center;
    height: 100%;
    width: 100%;
`

export const BackgroundImage = styled(ImageBackground)`
    display: flex;
    justify-content: center;
    height: 100%;
    width: 100%;
    opacity: 0.5;
`

export const LinearGradientContainer = styled(LinearGradient).attrs({
    colors: ["#223931", "#406C5D", "#579983", "#C6E6DC", "#E6EDEC"],
    locations: [0.11, 0.34, 0.5, 0.85, 1],
    start: {x: 0.5, y: 1},
    end: {x: 0.5, y: 0},

})`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    opacity: 0.75;
    position: absolute;
`

export const FormDescription = styled.Text`
    color: #333333;
    font-size: 12px;
    font-family: Poppins-Regular;
    margin-bottom: 16px;
`

export const FormContainer = styled.View`
    background: #E8EDEC;
    border-radius: 16px;
    border: 1px solid #3B6255;
    padding: 24px 24px;
    display: flex;
    margin: 24px;
`

export const FormTitle = styled.Text`
    font-size: 24px;
    color: #333333;
    margin-bottom: 8px;
    font-family: Poppins-Bold;
`

export const Row = styled.View`
    flex-direction: row;
    display: flex;
    align-items: center;
    gap: 16px;
`

export const FormLogoContainer = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;
    margin-bottom: 20px;
    margin-top: 16px;

`

export const FormLogo = styled.Image`
    width: 40px;
    height: 28px;
`
export const FormLogoText = styled.Text`
    color: #3B6255;
    font-size: 20px;
    font-family: Radley-Regular;
`

export const Button = styled(TouchableNativeFeedback)`
    border-radius: 100px;
`


export const ButtonGradient = styled(LinearGradient).attrs({start: {x: 0.5, y: 0},
    colors: ["#578C7A", "#223931"], end: {x: 0.5, y: 4}
})`
    padding: 10px 8px;
    border-radius: 100px;
    align-items: center;
    display: flex;
    flex-direction: row;
    overflow: hidden;
    justify-content: center;
    gap: 12px;
    margin-top: 16px;
    margin-bottom: 24px;
`

export const ButtonText = styled.Text`
    color: white;
    font-size: 12px;
    font-family: Poppins-SemiBold;
`

export const DropDownContainer = styled.View`
    display: flex;
    gap: 6px;
    flex-direction: column;
    margin-bottom: 16px;
    position: relative;
`


export const DropDownLabel = styled.Text`
    font-size: 12px;
    color: #7B7F8D;
    font-family: Poppins-Regular;
`

export const DropDownButton = styled(TouchableNativeFeedback).attrs({
    useForeground: true,
})`
    
`

export const DropDown = styled.View`
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
    padding-right: 8px;
`


export const DropDownListBlur = styled(BlurView).attrs({
    key: "dropDownListBlur",
    blurAmount: 4,
    blurRadius: 4,
    blurType: "light"
})`
    position: absolute;
    background: #B2D7CA3B;
    height: 100%;
    width: 100%;
`

export const DropDownList = styled.View<{visible?: boolean}>`
    background-color: transparent;
    overflow: hidden;
    border: #578C7A;
    color: #3B6255;
    font-size: 12px;
    border-radius: 8px;
    top: 64px;
    z-index: 100;
    width: 100%;
    flex: 1;
    display: ${({visible}) => (visible ? "flex" : "none")};
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    position: absolute;
`

export const DropDownItemButton = styled(TouchableNativeFeedback).attrs({
    useForeground: true
})`
    
    
`

export const DropDownItem = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: start;
    width: 100%;
`

export const DropDownText = styled.Text`
    color: #3B6255;
    font-size: 12px;
    padding: 8px 12px;
    font-family: Poppins-Regular;
`


export const IconButton = styled(TouchableNativeFeedback).attrs({
    useForeground: true,
    background: TouchableNativeFeedback.Ripple("#17171711", true)
})`
    padding: 8px;
    border-radius: 100px;
`

export const TextFieldError = styled.Text`
    font-size: 10px;
    font-family: Poppins-Regular;
    color: #e58686;
`