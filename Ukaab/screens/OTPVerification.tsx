import {
    FormContainer,
    FormTitle,
    BackgroundImage,
    ButtonGradient,
    ButtonText,
    FormDescription,
    FormLogoContainer, FormLogoText, FormLogo,
    LinearGradientContainer, MainContainer
} from "../styles/OTPVerification.ts";
import {StyleSheet, TouchableNativeFeedback} from "react-native";
import OtpInputs from "react-native-otp-inputs";

const OTPVerificationScreen = () => {
    return <MainContainer>

        <LinearGradientContainer colors={["#223931", "#406C5D", "#579983", "#C6E6DC", "#E6EDEC"]}>
            <BackgroundImage source={require("../assets/images/TruckingMobileBackground.jpg")} />
        </LinearGradientContainer>
        <FormContainer style={styles["form-shadow"]}>
            <FormLogoContainer>
                <FormLogo source={require("../assets/icons/LogoGreen.png")}/>
                <FormLogoText>Ukaab</FormLogoText>
            </FormLogoContainer>
            <FormTitle>OTP Verification</FormTitle>
            <FormDescription>We have sent you Email please check your Mail and Complete OTP Code</FormDescription>
            <OtpInputs inputContainerStyles={styles["otp-input-container"]} style={styles["otp-inputs-container"]}
                       handleChange={() => null} autofillFromClipboard={true} numberOfInputs={6}
                       inputStyles={styles["otp-input"]}/>
            <TouchableNativeFeedback useForeground={true}>
                <ButtonGradient style={styles["button-drop-shadow"]} colors={["#578C7A", "#223931"]}>
                    <ButtonText>Verify</ButtonText>
                </ButtonGradient>
            </TouchableNativeFeedback>
        </FormContainer>
    </MainContainer>
}


const styles = StyleSheet.create({
    "otp-inputs-container": {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 32,
    },
    "otp-input-container": {
        height: 44,
        width: 44,
        borderRadius: 6,
        borderWidth: 1,
        borderColor: "#578C7A",
        backgroundColor: "#B2D7CA66",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    "otp-input": {
        color: "#3B6255",
        fontFamily: "Poppins-Regular",
        fontSize: 18,
        lineHeight: 18
    },
    "form-shadow": {
        boxShadow: "0px 8px 24px #17171788"
    },
    "button-drop-shadow": {
        boxShadow: "0px 6px 12px #0000003B"
    }
})


export default OTPVerificationScreen;