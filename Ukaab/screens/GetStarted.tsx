import React from "react";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import {
  Container,
  Content,
  TopSection,
  LogoContainer,
  LogoImage,
  LogoText,
  HeaderContent,
  MainTitle,
  Subtitle,
  DescriptionText,
  ButtonGradient,
  ButtonText,
  ButtonArrow,
  BottomSection,
  ImageContainer,
  MainImage,
  BottomTextContainer,
  BottomMainText,
  BottomSubText,
  SupportSection,
  SupportText,
} from "../styles/GetStarted";

const GetStarted = () => {
  const navigation = useNavigation<StackNavigationProp<any>>();

  const handleGetStarted = () => {
    navigation.navigate("Role Selection");
  };

  return (
    <Container>
      <Content>
        <TopSection>
          <LogoContainer>
            <LogoImage source={require("../assets/images/logo2.png")} resizeMode="contain" />
            <LogoText>Ukaab</LogoText>
          </LogoContainer>

          <HeaderContent>
            <MainTitle>Ready to transform your logistics?</MainTitle>
            <Subtitle>Fast & Secure</Subtitle>
          </HeaderContent>

          <DescriptionText>
            Welcome to Ukaab, your all-in-one logistics partner. Track, assign,
            and manage your shipments effortlessly and in real time.
          </DescriptionText>

          <TouchableOpacity activeOpacity={0.9} style={{ width: "100%" }} onPress={handleGetStarted}>
            <ButtonGradient>
              <ButtonText>Get Started</ButtonText>
              <ButtonArrow>»</ButtonArrow>
            </ButtonGradient>
          </TouchableOpacity>
        </TopSection>

        <BottomSection>
          <ImageContainer>
            <MainImage
              source={require("../assets/images/truck_illustration.png")}
              resizeMode="contain"
            />
          </ImageContainer>

          <BottomTextContainer>
            <BottomMainText>No More Long Delays</BottomMainText>
            <BottomSubText>
              Get your loads moving faster, smarter, and on time, every time.
            </BottomSubText>
          </BottomTextContainer>

          <SupportSection>
            <SupportText>Support</SupportText>
          </SupportSection>
        </BottomSection>
      </Content>
    </Container>
  );
};

export default GetStarted;
