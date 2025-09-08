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

export const FormContainer = styled.View`
    background: #E8EDEC;
    border-radius: 16px;
    padding: 25px;
    display: flex;
    margin: 24px;
    gap: 20px;
`

export const FormLogoContainer = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 6px;
`

export const FormLogo = styled.Image`
    width: 40px;
    height: 28px;
`

export const FormLogoText = styled.Text`
    color: #3B6255;
    font-size: 20px;
    font-family: Radley-Regular;
    font-weight: 400;
`

export const HeaderSection = styled.View`
    flex-direction: column;
    gap: 10px;
`

export const FormTitle = styled.Text`
    font-size: 24px;
    color: #333333;
    font-family: Poppins-Bold;
    font-weight: 700;
`

export const FormDescription = styled.Text`
    color: #5F5F5F;
    font-size: 12px;
    font-weight: 600;
    font-family: Poppins-Medium;
`

export const SignUpRow = styled.View`
    flex-direction: row;
    align-items: flex-start;
    gap: 6px;
`

export const SignUpText = styled.Text`
    color: #7B7F8D;
    font-size: 12px;
    font-family: Poppins-Regular;
    font-weight: 400;
    line-height: 18px;
`

export const SignUpLink = styled.Text`
    color: #3B6255;
    font-size: 12px;
    font-family: Poppins-Medium;
    font-weight: 500;
    line-height: 18px;
    text-decoration-line: underline;
`

export const FormFieldsSection = styled.View`
    flex-direction: column;
    gap: 16px;
    padding-top: 2px;
    padding-bottom: 2px;
`

export const TextFieldContainer = styled.View`
    flex-direction: column;
    gap: 7px;
`

export const TextFieldLabel = styled.Text`
    color: #7B7F8D;
    font-size: 12px;
    font-family: Poppins-Regular;
    font-weight: 400;
`

export const TextField = styled.View`
    background-color: rgba(178, 215, 202, 0.23);
    border-radius: 6px;
    border-width: 1px;
    border-color: #578C7A;
    flex-direction: row;
    align-items: center;
    min-height: 32px;
`

export const TextInput = styled.TextInput`
    flex: 1;
    padding-horizontal: 12px;
    padding-vertical: 6px;
    color: #3B6255;
    font-size: 12px;
    font-family: Poppins-Regular;
    font-weight: 400;
`

export const PasswordFieldContainer = styled.View`
    flex-direction: column;
    gap: 9px;
`

export const PasswordInputContainer = styled.View`
    flex-direction: row;
    align-items: center;
`

export const PasswordDivider = styled.View`
    width: 1px;
    height: 30px;
    background-color: #CFD9E0;
    margin-right: 13px;
`

export const TextInputIconContainer = styled.View`
    padding-right: 16px;
    flex-direction: row;
    align-items: center;
    gap: 13px;
`

export const ButtonGradient = styled(LinearGradient).attrs({
    colors: ["#223931", "#578C7A"],
    start: { x: 0, y: 0 },
    end: { x: 0, y: 1 },
})`
    padding-horizontal: 25px;
    padding-vertical: 9px;
    border-radius: 50px;
    align-items: center;
    justify-content: center;
    gap: 11px;
    flex-direction: row;
`

export const ButtonText = styled.Text`
    color: white;
    font-size: 12px;
    font-family: Poppins-SemiBold;
    font-weight: 600;
`

export const RememberMeRow = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const RememberMeContainer = styled.View`
    flex-direction: row;
    align-items: center;
    gap: 7px;
`

export const CheckboxContainer = styled.TouchableOpacity`
    width: 13px;
    height: 13px;
    border-radius: 4px;
    border-width: 1px;
    border-color: #3B6255;
    align-items: center;
    justify-content: center;
`

export const RememberMeText = styled.Text`
    color: #7B7F8D;
    font-size: 11px;
    font-family: Poppins-Regular;
    font-weight: 400;
    line-height: 20px;
`

export const ForgotPasswordLink = styled.Text`
    color: #1C4532;
    font-size: 11px;
    font-family: Poppins-Medium;
    font-weight: 500;
    text-decoration-line: underline;
    line-height: 16.5px;
`

export const OrSection = styled.View`
    flex-direction: column;
    gap: 13px;
`

export const OrDividerRow = styled.View`
    flex-direction: row;
    align-items: center;
    gap: 16px;
`

export const OrDividerLine = styled.View`
    flex: 1;
    height: 1px;
    background-color: #578C7A;
`

export const OrText = styled.Text`
    color: #7B7F8D;
    font-size: 10px;
    font-family: Inter-Medium;
    font-weight: 500;
    line-height: 20px;
`

export const GoogleButton = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 20px;
    padding-horizontal: 26px;
    padding-vertical: 8px;
    border-radius: 30px;
    border-width: 1px;
    border-color: #578C7A;
`

export const GoogleIcon = styled.Image`
    width: 18px;
    height: 17px;
`

export const GoogleText = styled.Text`
    color: #7B7F8D;
    font-size: 12px;
    font-family: Inter-Medium;
    font-weight: 500;
    line-height: 28px;
`
