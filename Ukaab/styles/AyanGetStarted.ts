import styled from "styled-components/native";
import LinearGradient from "react-native-linear-gradient";
import {TouchableNativeFeedback} from "react-native";

export const GradientMainContainer = styled(LinearGradient)`
    flex: 1;
    padding: 16px 24px;
`

export const LogoContainer = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;
    margin-bottom: 28px;
    margin-top: 32px;

`

export const Logo = styled.Image`
    width: 50px;
    height: 35px;
`
export const LogoText = styled.Text`
    color: #3B6255;
    font-size: 24px;
    font-family: Radley-Regular;
`
export const Question = styled.Text`
    font-size: 24px;
    font-family: Poppins-Bold;
    color: #333333;
`

export const Title = styled.Text`
    font-size: 24px;
    font-family: Poppins-Medium;
    color: #3B6255;
    margin-bottom: 24px;
`

export const Description = styled.Text`
    font-size: 12px;
    font-family: Poppins-Regular;
    color: #333333;
    margin-bottom: 28px;
`

export const ButtonGradient = styled(LinearGradient).attrs({start: {x: 0.5, y: 0},
    colors: ["#578C7A", "#223931"], end: {x: 0.5, y: 4}
})`
    padding: 12px 8px;
    overflow: hidden;
    border-radius: 100px;
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: center;
    overflow: hidden;
    gap: 12px;
`

export const ButtonText = styled.Text`
    color: white;
    font-size: 12px;
    font-family: Poppins-SemiBold;
    line-height: 12px;
`

export const Button = styled(TouchableNativeFeedback).attrs({useForeground: true})`
    border-radius: 100px;
`

export const SecondaryTitle = styled.Text`
    font-size: 25px;
    font-family: Poppins-SemiBold;
    text-align: center;
    color: #FFFFFF;
`

export const SecondaryDescription = styled.Text`
    font-size: 12px;
    margin-top: 12px;
    font-family: Poppins-Regular;
    color: #FFFFFF;
    text-align: center;
    margin-bottom: 40px;
`

export const Image = styled.Image`
    width: 78%;
    height: 24%;
    margin-top: 48px;
    margin-bottom: 24px;
    align-self: center;
`

export const SupportLinkText = styled.Text`
    font-size: 16px;
    font-family: Poppins-Medium;
    color: #FFFFFF;
`

export const SupportLink = styled.TouchableOpacity`
    flex-direction: row;
    display: flex;
    align-items: center;
    gap: 14px;
    align-self: center;
`