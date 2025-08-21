import styled from "styled-components/native";
import {ImageBackground} from "react-native";
import LinearGradient from "react-native-linear-gradient";



export const MainContainer = styled.View`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
`

export const BackgroundImage = styled(ImageBackground)`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    opacity: 0.5;
`

export const LinearGradientContainer = styled(LinearGradient).attrs({
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
    color: #5F5F5F;
    font-size: 12px;
    font-family: Poppins-Medium;
`

export const FormContainer = styled.View`
    background: #E8EDEC;
    border: 1px solid #3B6255;
    border-radius: 16px;
    padding: 24px 16px;
    display: flex;
    margin: 24px;
    
`

export const FormTitle = styled.Text`
    font-size: 24px;
    color: #333333;
    margin-bottom: 16px;
    font-family: Poppins-Bold;

`


export const FormLogoContainer = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;
    margin-top: 16px;
    margin-bottom: 20px;

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

export const ButtonGradient = styled(LinearGradient).attrs({start: {x: 0.5, y: 0},
    end: {x: 0.5, y: 4},})`

    padding: 10px 8px;
    border-radius: 100px;
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 12px;
    margin-bottom: 16px;
`

export const ButtonText = styled.Text`
    color: white;
    font-size: 12px;
    font-family: Poppins-SemiBold;

`
