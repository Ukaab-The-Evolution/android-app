import styled from "styled-components/native";
import LinearGradient from "react-native-linear-gradient";
import { ImageBackground } from "react-native";

export const Container = styled(LinearGradient).attrs(props => ({
  colors: [
    "#E6EDEC",
    "#C6E6DC",
    "#579983",
    "#406C5D",
    "#223931",
  ],
  start: { x: 0.5, y: 0 },
  end: { x: 0.5, y: 1 },
}))`
  flex: 1;
`;

export const Content = styled.View`
  flex: 1;
  justify-content: space-between;
  padding-horizontal: 28px;
  padding-top: 48px;
  padding-bottom: 20px;
`;

export const TopSection = styled.View`
  align-items: flex-start;
  width: 100%;
`;

export const LogoContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 18px;
`;

export const LogoImage = styled.Image`
  width: 40px;
  height: 30px;
`;

export const LogoText = styled.Text`
  margin-left: 8px;
  color: ${props => props.theme.palette.primary};
  font-size: 22px;
  font-family: ${props => props.theme.fonts.radleyRegular};
  font-weight: 400;
`;

export const HeaderContent = styled.View`
  margin-bottom: 12px;
`;

export const MainTitle = styled.Text`
  color: ${props => props.theme.palette.black};
  font-size: 26px;
  font-family: ${props => props.theme.fonts.poppinsBold};
  font-weight: 700;
  line-height: 32px;
  margin-bottom: 6px;
`;

export const Subtitle = styled.Text`
  color: ${props => props.theme.palette.primary};
  font-size: 20px;
  font-family: ${props => props.theme.fonts.poppinsMedium};
  font-weight: 500;
`;

export const DescriptionText = styled.Text`
  color: ${props => props.theme.palette.black};
  font-size: 14px;
  font-family: ${props => props.theme.fonts.poppinsRegular};
  line-height: 20px;
  margin-top: 10px;
  margin-bottom: 16px;
`;

export const ButtonGradient = styled(LinearGradient).attrs({
  colors: ["#578C7A", "#223931"],
  start: { x: 0, y: 0 },
  end: { x: 0, y: 1 },
})`
  margin-top: 18px;
  border-radius: 50px;
  padding-horizontal: 25px;
  padding-vertical: 6px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  shadow-color: #000;
  shadow-offset: 0px 4px;
  shadow-opacity: 0.25;
  shadow-radius: 12px;
  elevation: 6;
`;

export const ButtonText = styled.Text`
  color: ${props => props.theme.palette.white};
  font-size: 15px;
  font-family: ${props => props.theme.fonts.poppinsSemiBold};
  font-weight: 600;
`;

export const ButtonArrow = styled.Text`
  color: ${props => props.theme.palette.white};
  font-size: 20px;
  font-family: ${props => props.theme.fonts.poppinsMedium};
  font-weight: 300;
  margin-left: 8px;
  letter-spacing: -1px;
`;

export const BottomSection = styled.View`
  flex: 1;
  padding-horizontal: 20px;
  padding-top: 50px;
  padding-bottom: 60px;
  align-items: center;
  justify-content: space-between;
  min-height: 500px;
`;

export const ImageContainer = styled.View`
  width: 100%;
  align-items: center;
  margin-bottom: 15px;
`;

export const MainImage = styled.Image`
  width: 280px;
  height: 200px;
`;

export const BottomTextContainer = styled.View`
  width: 100%;
  align-items: center;
  margin-bottom: 25px;
`;

export const BottomMainText = styled.Text`
  color: ${props => props.theme.palette.white};
  font-size: 28px;
  font-family: ${props => props.theme.fonts.poppinsBold};
  font-weight: 700;
  text-align: center;
  margin-bottom: 12px;
  line-height: 32px;
`;

export const BottomSubText = styled.Text`
  color: ${props => props.theme.palette.white};
  font-size: 14px;
  font-family: ${props => props.theme.fonts.poppinsRegular};
  font-weight: 400;
  text-align: center;
  line-height: 20px;
  padding-horizontal: 10px;
`;

export const SupportSection = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 8px;
  padding-bottom: 4px;
  width: 100%;
  justify-content: center;
`;

export const SupportText = styled.Text`
  color: ${props => props.theme.palette.white};
  font-size: 16px;
  font-family: ${props => props.theme.fonts.poppinsMedium};
  font-weight: 500;
`;
