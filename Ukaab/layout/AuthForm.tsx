import {
    BackgroundImage,
    LinearGradientContainer,
    MainContainer,
    FormContainer,
    FormScrollView
} from "../styles/AuthForm.ts";
import {KeyboardAvoidingView, StyleSheet} from "react-native";
import {ReactNode} from "react";

const AuthForm = ({children}: {children?: ReactNode}) => {
    return <MainContainer>
        <LinearGradientContainer colors={["#223931", "#406C5D", "#579983", "#C6E6DC", "#E6EDEC"]}>
            <BackgroundImage source={require("../assets/images/TruckingMobileBackground.jpg")}/>
        </LinearGradientContainer>


        <FormContainer style={styles["form-shadow"]}>
            <KeyboardAvoidingView behavior={"padding"}>
                <FormScrollView>
                    {children}
                </FormScrollView>
            </KeyboardAvoidingView>
        </FormContainer>
    </MainContainer>
}

const styles = StyleSheet.create({
    "form-shadow": {
        boxShadow: "0px 8px 24px #17171788"
    }
})

export default AuthForm;