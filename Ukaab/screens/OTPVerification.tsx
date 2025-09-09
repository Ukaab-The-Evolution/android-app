import {
    FormTitle,
    FormDescription,
    FormLogoContainer, FormLogoText, FormLogo,
} from "../styles/OTPVerification.ts";
import {StyleSheet} from "react-native";
import OtpInputs from "react-native-otp-inputs";
import {StackScreenProps} from "@react-navigation/stack";
import {AuthStackNavigatorParamList} from "../navigators/AuthStackNavigator.tsx";
import * as Yup from "yup"
import {Formik, FormikHelpers} from "formik";
import {useContext} from "react";
import {AyanAuthContext} from "../providers/AyanAuthProvider.tsx";
import AuthForm from "../layout/AuthForm.tsx";
import FormButton from "../components/FormButton.tsx";

type OTPVerificationProps = StackScreenProps<AuthStackNavigatorParamList, "OTP Verification">;

const OTPSchema = Yup.object().shape({
    otp: Yup.string()
        .length(6, "OTP must be 6 digits")
        .required("OTP is required"),
});

const OTPVerificationScreen = ({route}: OTPVerificationProps) => {
    const {email} = route.params;
    const authProvider = useContext(AyanAuthContext)

    const verifyOTP = async (values: { otp: string }, {setStatus}: FormikHelpers<{ otp: string }>) => {
        try {
            const data = authProvider?.verifyOtp(email, values.otp);
            console.log(data)
            setStatus("Successful")

        } catch (error) {
            console.error("Error", error);
            setStatus("Failed")
        } finally {
            setTimeout(() => setStatus(null), 2000)
        }
    }

    return <AuthForm>
        <Formik validationSchema={OTPSchema} initialValues={{otp: ""}} onSubmit={verifyOTP}>
            {({handleSubmit, setFieldValue, isSubmitting, status}) => (
                <>
                    <FormLogoContainer>
                        <FormLogo source={require("../assets/icons/LogoGreen.png")}/>
                        <FormLogoText>Ukaab</FormLogoText>
                    </FormLogoContainer>
                    <FormTitle>OTP Verification</FormTitle>
                    <FormDescription>We have sent you Email please check your Mail and Complete OTP
                        Code</FormDescription>
                    <OtpInputs inputContainerStyles={styles["otp-input-container"]}
                               style={styles["otp-inputs-container"]}
                               handleChange={(code) => setFieldValue("otp", code)}
                               autofillFromClipboard={true}
                               numberOfInputs={6}
                               inputStyles={styles["otp-input"]}/>
                    <FormButton status={status} title="Submit" isSubmitting={isSubmitting}
                                onPress={() => handleSubmit()} />
                </>
            )}
        </Formik>
    </AuthForm>
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
    }
})


export default OTPVerificationScreen;