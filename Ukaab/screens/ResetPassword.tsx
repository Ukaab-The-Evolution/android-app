import {
    BackgroundImage, ButtonGradient, ButtonText,
    FormContainer, FormDescription,
    FormLogo,
    FormLogoContainer, FormLogoText, FormTitle,
    LinearGradientContainer, MainContainer, Row,
    TextFieldLabel, TextField, TextFieldContainer, PasswordRequirementsContainer, PasswordRequirementText,
    TextInput, TextInputIconContainer
} from "../styles/ResetPassword.ts";
import {StyleSheet, TouchableNativeFeedback} from "react-native";
import CheckIcon from "../icons/CheckIcon.tsx";
import EyeIcon from "../icons/EyeIcon.tsx";

const ResetPassword = () => {
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
                    <FormTitle>Reset Password</FormTitle>
                </Row>

                <FormDescription>Setup your new password</FormDescription>

                <TextFieldContainer style={{marginBottom: 16}}>
                    <TextFieldLabel>New Password</TextFieldLabel>
                    <TextField>
                        <TextInput/>
                        <TextInputIconContainer>
                            <EyeIcon color="#718096" size={18}/>
                        </TextInputIconContainer>
                    </TextField>
                </TextFieldContainer>

                <PasswordRequirementsContainer>
                    <Row style={{gap: 12}}>
                        <CheckIcon color="#578C7A" size={14}/>
                        <PasswordRequirementText>Contains at least one capital character</PasswordRequirementText>
                    </Row>
                    <Row style={{gap: 12}}>
                        <CheckIcon color="#578C7A" size={14}/>
                        <PasswordRequirementText>At least 8 characters</PasswordRequirementText>
                    </Row>
                    <Row style={{gap: 12}}>
                        <CheckIcon color="#578C7A" size={14}/>
                        <PasswordRequirementText>Contains a number or symbol</PasswordRequirementText>
                    </Row>
                </PasswordRequirementsContainer>

                <TextFieldContainer style={{marginBottom: 28}}>
                    <TextFieldLabel>Confirm New Password</TextFieldLabel>
                    <TextField>
                        <TextInput/>
                        <TextInputIconContainer>
                            <EyeIcon color="#718096" size={18}/>
                        </TextInputIconContainer>
                    </TextField>
                </TextFieldContainer>

                <TouchableNativeFeedback useForeground={true}>
                    <ButtonGradient style={styles["button-drop-shadow"]} colors={["#578C7A", "#223931"]}>
                        <ButtonText>Save</ButtonText>
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

export default ResetPassword