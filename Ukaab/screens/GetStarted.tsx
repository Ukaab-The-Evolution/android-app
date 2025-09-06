import {
    GradientMainContainer,
    LogoContainer,
    Logo,
    LogoText,
    Question,
    Title,
    Description, ButtonGradient, ButtonText, Button, Image, SecondaryTitle, SecondaryDescription, SupportLink,
    SupportLinkText
} from "../styles/GetStarted.ts";
import DoubleChevronRightIcon from "../icons/DoubleChevronRightIcon.tsx";
import { StyleSheet } from "react-native";
import SupportAgentIcon from "../icons/SupportAgentIcon.tsx";
import {useNavigation} from "@react-navigation/native";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {AuthStackNavigatorParamList} from "../navigators/AuthStackNavigator.tsx";

const GetStarted = () => {
    const navigation = useNavigation<NativeStackNavigationProp<AuthStackNavigatorParamList>>();
    return (
        <GradientMainContainer  end={{x: 0.5, y: 0}} start={{x: 0.5, y: 1}} locations={[0, 0.14, 0.3, 0.58, 1]}
                               colors={["#223931", "#406C5D", "#579983", "#C6E6DC", "#E6EDEC"]}>
            <LogoContainer>
                <Logo source={require("../assets/icons/Logo.png")} />
                <LogoText>Ukaab</LogoText>
            </LogoContainer>
            <Question>Ready to transform your logistics?</Question>
            <Title>Fast & Secure</Title>
            <Description>Welcome to Ukaab — your all‑in‑one logistics partner. Track, assign, and manage your shipments effortlessly and in real time!</Description>

            <Button onPress={() => navigation.navigate("Choose Role")}>
                <ButtonGradient style={styles["button-drop-shadow"]} colors={["#578C7A", "#223931"]} end={{x: 0.5, y: 4}}>
                    <ButtonText>Get Started</ButtonText>
                    <DoubleChevronRightIcon color="#FFFFFF" size={16} />
                </ButtonGradient>
            </Button>

            <Image source={require("../assets/images/Laptop.png")} />
            <SecondaryTitle>No More Long Delays</SecondaryTitle>
            <SecondaryDescription>Get your loads moving faster, smarter, and on time — every time.</SecondaryDescription>
            <SupportLink>
                <SupportAgentIcon size={20} />
                <SupportLinkText>Support</SupportLinkText>
            </SupportLink>
        </GradientMainContainer>
    );
}


const styles = StyleSheet.create({
    "button-drop-shadow": {
        boxShadow: "0px 6px 12px #0000003B"
    },
})

export default GetStarted;