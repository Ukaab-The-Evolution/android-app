import {
    BackgroundImage, ButtonGradient, ButtonText,
    FormContainer, FormDescription,
    FormLogo,
    FormLogoContainer, FormLogoText, FormTitle,
    LinearGradientContainer, MainContainer,Row,
    TextFieldLabel, TextField, TextFieldContainer
} from "../styles/ForgotPassword.ts";
import {StyleSheet, TouchableNativeFeedback} from "react-native";
import BackArrowIcon from "../icons/BackArrowIcon.tsx";

const ForgotPassword = () => {
    return (
        <MainContainer>
            <LinearGradientContainer colors={["#223931", "#406C5D", "#579983", "#C6E6DC", "#E6EDEC"]}>
                <BackgroundImage source={require("../assets/images/TruckingMobileBackground.jpg")} />
            </LinearGradientContainer>

            <FormContainer style={styles["form-shadow"]}>
                <FormLogoContainer>
                    <FormLogo source={require("../assets/icons/LogoGreen.png")}/>
                    <FormLogoText>Ukaab</FormLogoText>
                </FormLogoContainer>
                <Row>
                    <BackArrowIcon />
                    <FormTitle>Forgot Password</FormTitle>
                </Row>
                <FormDescription>Enter your email and we’ll send you a password otp to reset your password:</FormDescription>
                <TextFieldContainer>
                    <TextFieldLabel>Email</TextFieldLabel>
                    <TextField/>
                </TextFieldContainer>
                <TouchableNativeFeedback useForeground={true}>
                    <ButtonGradient style={styles["button-drop-shadow"]}  colors={["#578C7A", "#223931"]}>
                        <ButtonText>Submit</ButtonText>
                    </ButtonGradient>
                </TouchableNativeFeedback>
            </FormContainer>
        </MainContainer>
    );
}

const styles = StyleSheet.create({
    "form-shadow": {
        boxShadow: "0px 8px 24px #17171788"
    },
    "button-drop-shadow": {
        boxShadow: "0px 6px 12px #0000003B"
    }
})

export default ForgotPassword