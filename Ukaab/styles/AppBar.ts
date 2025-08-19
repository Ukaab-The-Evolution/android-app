import styled from "styled-components/native";
import LinearGradient from "react-native-linear-gradient";

export const Container = styled(LinearGradient).attrs({
    start: {x: 0.5, y: 0},
    end: {x: 0.5, y: 1}
})`
   
    height: 100%;
`

export const Logo = styled.Image`
    width: 50px;
    height: 35px;
    margin-left: 16px;
`


export const MenuIcon = styled.Image`
    width: 30px;
    height: 30px;
    margin-left: auto;
    margin-right: 16px;
`

