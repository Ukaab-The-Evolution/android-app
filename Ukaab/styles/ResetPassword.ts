import styled from "styled-components/native";
import {ImageBackground} from "react-native";
import LinearGradient from "react-native-linear-gradient";



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
    color: #5F5F5F;
    font-size: 12px;
    margin-bottom: 32px;
    font-weight: 600;
    font-family: Poppins-Medium;
`

export const FormContainer = styled.View`
    background: #E8EDEC;
    border-radius: 16px;
    padding: 24px 16px;
    display: flex;
    margin: 24px;
`

export const FormTitle = styled.Text`
    font-size: 24px;
    color: #333333;
    margin-bottom: 24px;
    font-family: Poppins-Bold;
`

export const Row = styled.View`
    flex-direction: row;
    display: flex;
    align-items: center;
    gap: 12px;
`

export const FormLogoContainer = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;
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
    colors: ["#578C7A", "#223931"], end: {x: 0.5, y: 4},})`

    padding: 10px 8px;
    border-radius: 100px;
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 12px;
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

export const TextInput = styled.TextInput`
    color: #3B6255;
    font-size: 12px;
    flex: 1;
    padding: 8px 12px;
    font-family: Poppins-Regular;
`
export const TextInputIconContainer = styled.View`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px 14px;
    border-left-width: 1px;
    border-left-color: #CFD9E0;

`

export const PasswordRequirementsContainer = styled.View`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    margin-bottom: 32px;

`

export const PasswordRequirementText = styled.Text`
    color: #525252;
    font-size: 10px;
    font-family: Poppins-Regular;
`