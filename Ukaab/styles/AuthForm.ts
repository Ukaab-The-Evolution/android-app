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
    border: 1px solid #3B6255;
    padding: 24px 0;
    display: flex;
    margin: 24px;
`

export const FormScrollView = styled.ScrollView`
    padding: 0 16px;
`