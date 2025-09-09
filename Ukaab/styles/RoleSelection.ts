import styled from "styled-components/native";
import LinearGradient from "react-native-linear-gradient";
import { ImageBackground } from "react-native";

export const Root = styled(ImageBackground)`
  flex: 1;
`;

export const Gradient = styled(LinearGradient).attrs({
  colors: [
    "rgba(34, 57, 49, 0.4)",
    "rgba(64, 108, 93, 0.4)",
    "rgba(87, 153, 131, 0.4)",
    "rgba(198, 230, 220, 0.4)",
    "rgba(230, 237, 236, 0.4)",
  ],
  start: { x: 0.5, y: 0 },
  end: { x: 0.5, y: 1 },
})`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const FloatingLabel = styled.View`
  position: absolute;
  left: 86px;
  top: 406px;
  width: 222px;
  height: 36px;
  justify-content: center;
`;

export const FloatingRect = styled.View`
  position: absolute;
  left: 0px;
  top: 0px;
  width: 222px;
  height: 36px;
  background-color: rgba(178, 215, 202, 0.23);
  border-radius: 10px;
  border-width: 1px;
  border-color: #3B6255;
`;

export const FloatingLabelText = styled.Text`
  position: absolute;
  left: 12px;
  top: 8px;
  color: rgba(59, 98, 85, 0.72);
  font-size: 16px;
  font-family: Poppins-Bold;
`;

export const Card = styled.View`
  width: 341px;
  height: 436px;
  background-color: #E8EDEC;
  border-radius: 16px;
  border-width: 1px;
  border-color: #3B6255;
  padding-left: 25px;
  padding-right: 25px;
  padding-top: 31px;
  padding-bottom: 31px;
  align-items: center;
  justify-content: center;
`;

export const CardContent = styled.View`
  flex: 0;
  width: 100%;
`;

export const LogoRow = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Logo = styled.Image`
  width: 50px;
  height: 36px;
`;

export const LogoText = styled.Text`
  margin-left: 7px;
  font-size: 24px;
  color: #3B6255;
  font-family: Radley-Regular;
  font-weight: 400;
`;

export const HeaderBlock = styled.View`
  margin-top: 14px;
  margin-bottom: 14px;
`;

export const Title = styled.Text`
  color: #333333;
  font-size: 24px;
  font-family: Poppins-Bold;
  line-height: 30px;
`;

export const Subtitle = styled.Text`
  color: #333333;
  font-size: 12px;
  margin-top: 8px;
  font-family: Poppins-Regular;
`;

export const RoleLabel = styled.Text`
  align-self: flex-start;
  color: #7B7F8D;
  font-size: 12px;
  font-family: Poppins-Regular;
  margin-top: 12px;
  margin-bottom: 6px;
  font-weight: 400;
`;

export const DropdownWrapper = styled.View`
  width: 100%;
  position: relative;
`;

export const DropdownHeader = styled.TouchableOpacity`
  width: 100%;
  padding-vertical: 9px;
  padding-horizontal: 18px;
  background-color: rgba(178, 215, 202, 0.23);
  border-radius: 6px;
  border-width: 1.3px;
  border-color: #578C7A;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const DropdownHeaderText = styled.Text`
  color: #3B6255;
  font-size: 12px;
  font-family: Poppins-Regular;
`;

export const DropdownArrow = styled.Text`
  color: #3B6255;
  font-size: 16px;
`;

export const DropdownList = styled.View`
  position: absolute;
  top: 100%;
  left: 0px;
  width: 100%;
  background-color: #D9DFDD;
  border-color: #3B6255;
  border-width: 1px;
  border-top-width: 0px;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  overflow: hidden;
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.1;
  shadow-radius: 4px;
  elevation: 3;
  z-index: 999;
`;

export const OptionBox = styled.TouchableOpacity`
  width: 100%;
  height: 31px;
  justify-content: center;
  padding-left: 11px;
  border-bottom-width: 1px;
  border-bottom-color: #3B6255;
`;

export const OptionText = styled.Text`
  color: rgba(59, 98, 85, 0.72);
  font-size: 16px;
  font-family: Poppins-Regular;
  font-weight: 400;
`;

export const ButtonGradient = styled(LinearGradient).attrs({
  colors: ["#223931", "#578C7A"],
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
  gap: 11px;
  shadow-color: #000;
  shadow-offset: 0px 4px;
  shadow-opacity: 0.25;
  shadow-radius: 12px;
  elevation: 6;
`;

export const ButtonText = styled.Text`
  color: #FFFFFF;
  font-size: 15px;
  font-family: Poppins-SemiBold;
  font-weight: 600;
`;

export const ButtonArrow = styled.Text`
  color: #FFFFFF;
  font-size: 20px;
  font-family: Poppins-Medium;
  font-weight: 300;
  margin-left: 8px;
  letter-spacing: -1px;
`;
