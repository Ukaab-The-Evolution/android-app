import styled from "styled-components/native";
import LinearGradient from "react-native-linear-gradient";
import Svg from "react-native-svg";

export const Background = styled.View`
    background-color: #F8F9FA;
    height: 56px;
    display: flex;
    flex-direction: column-reverse;
`

export const Container = styled(LinearGradient).attrs(({ theme }) => ({
    end: { x: 0.5, y: 0 },
    start: { x: 0.5, y: 1 }
}))`
    display: flex;
    flex-direction: row;
    height: 56px;
    padding: 0 24px;
    align-items: center;
    border-top-right-radius: 48px;
    position: relative;
    border-top-left-radius: 48px;
    justify-content: space-evenly;
    background-color: ${({ theme }) => theme.palette.primary};
`

type IconContainerProps = {
    active: boolean;
};


export const IconContainer = styled.View`
    border-radius: 100%;
    padding: 8px;
`

export const IconHoveredBackgroundContainer = styled(Svg)`
    width: 100%;
    height: 100%;
    position: absolute;
`

export const IconHoverContainer = styled.View`
    border-radius: 100%;
    position: relative;
    aspect-ratio: 1;
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: start;
`

type IconProps = {
    width: number
    height: number
}

export const Icon = styled.Image<IconProps>`
    width: 32px;
    height: 32px;
`