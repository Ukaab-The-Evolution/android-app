import styled from "styled-components/native";

export const Container = styled.View`
    display: flex;
    gap: 6px;
    flex-direction: column;
    margin-bottom: 16px;
    position: relative;
`



export const Label = styled.Text`
    font-size: 12px;
    color: #7B7F8D;
    font-family: Poppins-Regular;
`

export const Input  = styled.View`
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

export const Error = styled.Text`
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