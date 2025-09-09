import styled from "styled-components/native";



export const FormDescription = styled.Text`
    color: #7B7F8D;
    font-size: 12px;
    font-family: Poppins-Regular;
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

export const LoginLink = styled.Text`
    font-size: 12px;
    font-family: Poppins-Medium;
    color: #3B6255;
    text-decoration: underline;
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
    line-height: 10px;
`

export const DividerContainer = styled.View`
    display: flex;
    flex-direction: row;
    gap: 16px;
    align-items: center;
    margin: 16px 0;
`


export const Divider = styled.View`
    height: 1px;
    flex: 1;
    padding: 0;
    margin: 0;
    border-radius: 100px;
    background: #578C7A;
`

export const DividerText = styled.Text`
    color: #7B7F8D;
    font-size: 10px;
    font-family: Poppins-Regular;
`
