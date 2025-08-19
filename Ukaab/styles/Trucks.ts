import styled from "styled-components/native";
import LinearGradient from "react-native-linear-gradient";


export const Container = styled.View`
    padding: 16px;
    padding-top: 40px;
    align-items: center;
    justify-content: center;
    background: #F8F9FA;
    gap: 48px;
`


export const ButtonGradient = styled(LinearGradient).attrs({
    start: {x: 0.5, y: 0},
    end: {x: 0.5, y: 2}
})`

    padding: 12px 16px;
    border-radius: 14px;
    align-items: center;
    width: 100%;
`

export const ButtonText = styled.Text`
    color: white;
    font-size: 16px;
    font-family: Poppins-SemiBold;
`

export const TruckContainer = styled.View`
    display: flex;
    background: #FFFFFF;
    padding: 8px;
    height: fit-content;
    border-radius: 10px;
    flex: 1;
`

export const TruckPhotoPlaceholder = styled.View`
    height: 140px;
    background: #578C7A;
    width: 100%;
`

export const TruckPhotoImage = styled.Image`
    height: 140px;
    background: #578C7A;
    width: 100%;
`

export const TruckName = styled.Text`
    font-size: 13px;
    color: #3B6255;
    width: 100%;
    font-family: Poppins-Bold;
`

export const TruckAttribute = styled.Text`
    font-size: 11px;
    color: #5F5F5F;
    width: 100%;
    font-family: Poppins-Medium;
`