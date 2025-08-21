import styled from "styled-components/native";
import LinearGradient from "react-native-linear-gradient";


export const ScrollContainer = styled.ScrollView`
    padding: 24px 0 0;
    background: #F8F9FA;
`


export const Title = styled.Text`
    font-size: 28px;
    margin-bottom: 16px;
    color: #3B6255;
    font-family: Poppins-Bold;
    text-align: center;
`

export const TextFieldContainer = styled.View`
    display: flex;
    gap: 6px;
    flex-direction: column;
    padding: 0 40px;
`

export const Label = styled.Text`
    font-size: 14px;
    color: #3B6255;
    font-family: Poppins-Medium;
`

export const TextField = styled.TextInput`
    background-color: #B2D7CA3B;
    border: 1px solid #578C7A;
    color: #3B6255;
    font-size: 14px;
    border-radius: 8px;
    padding: 8px 14px;
    font-family: Poppins-Regular;
`

export const Container = styled.View`
    justify-content: center;
    gap: 12px;
    padding-bottom: 84px;
    background: #F8F9FA;
    height: 100%;
`



export const ButtonGradient = styled(LinearGradient).attrs
({
    start: {x: 0.5, y: 0},
    end: {x: 0.5, y: 2}
})`

    padding: 12px 16px;
    border-radius: 10px;
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 12px;
    margin-top: 20px;
    margin-left: 16px;
    margin-right: 16px;
`

export const ButtonText = styled.Text`
    color: white;
    font-size: 16px;
    font-family: Poppins-SemiBold;
    line-height: 16px;
`

