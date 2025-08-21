import styled from "styled-components/native";
import LinearGradient from "react-native-linear-gradient";


export const ScrollContainer = styled.ScrollView`
    padding: 32px 16px;
    background: #F8F9FA;

`

export const Container = styled.View`
    justify-content: center;
    gap: 12px;
    background: #F8F9FA;
    padding-bottom: 100px;
`

export const Title = styled.Text`
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 16px;
    color: #3B6255;
    text-align: center;

`

export const SubTitle = styled.Text`
    font-size: 18px;
    margin-bottom: 24px;
    color: #5F5F5F;
    text-align: center;
`


export const ButtonGradient = styled(LinearGradient).attrs({start: {x: 0.5, y: 0},
    colors: ["#578C7A", "#223931"], end: {x: 0.5, y: 4},})`

    padding: 12px 16px;
    border-radius: 14px;
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 12px;
`

export const ButtonText = styled.Text`
    color: white;
    font-weight: bold;
    font-size: 16px;
`


export const FileUploadButton = styled.TouchableOpacity`
    width: fit-content;
    padding: 8px 16px;
    background: #B2D7CA44;
    border: 1px solid #578C7A;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 14px;
    justify-content: center;
    border-radius: 14px;
`
export const FileUploadIcon = styled.Image`
    width: 48px;
    height: 24px;
`

export const FileUploadButtonText = styled.Text`
    color: #3B6255;
    width: 80px;
    line-height: 16px;
    font-size: 12px;
`

export const FileUploaderLabel = styled.Text`
    color: #5F5F5F;
`

export const FileUploaderContainer = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 24px;
    margin-bottom: 16px;
    justify-content: center;
`