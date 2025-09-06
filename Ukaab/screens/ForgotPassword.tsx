import {
    FormDescription,
    FormLogo,
    FormLogoContainer, FormLogoText, FormTitle, Row,
} from "../styles/ForgotPassword.ts";
import {StyleSheet, TouchableOpacity} from "react-native";
import BackArrowIcon from "../icons/BackArrowIcon.tsx";
import * as Yup from "yup"
import {Formik, FormikHelpers} from "formik";
import {useNavigation} from "@react-navigation/native";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {AuthStackNavigatorParamList} from "../navigators/AuthStackNavigator.tsx";
import {useContext} from "react";
import {AuthContext} from "../providers/AuthProvider.tsx";
import FormButton from "../components/FormButton.tsx";
import AuthForm from "../layout/AuthForm.tsx";
import TextField from "../components/TextField.tsx";

const ForgotPasswordSchema = Yup.object({
    email: Yup.string().email("Please enter a valid email address").required("Email is required"),
})

const ForgotPassword = () => {
    const navigation = useNavigation<NativeStackNavigationProp<AuthStackNavigatorParamList>>()
    const authProvider = useContext(AuthContext)
    const forgotPassword = async (values: { email: string }, {setStatus}: FormikHelpers<{ email: string }>) => {
        try {
            const data = authProvider?.forgotPassword(values.email)
            console.log("Response", data);
            setStatus("Successful")

        } catch (error) {
            console.error("Error", error);
            setStatus("Failed")
        } finally {
            setTimeout(() => setStatus(null), 2000)
        }
    }
    return (
        <AuthForm>
            <Formik validationSchema={ForgotPasswordSchema} initialValues={{email: ""}} onSubmit={forgotPassword}>
                {({isSubmitting, status, errors, touched, handleSubmit, handleChange, handleBlur, values}) => (
                    <>
                        <FormLogoContainer>
                            <FormLogo source={require("../assets/icons/LogoGreen.png")}/>
                            <FormLogoText>Ukaab</FormLogoText>
                        </FormLogoContainer>
                        <Row>
                            <TouchableOpacity onPress={() => navigation.goBack()}>
                                <BackArrowIcon/>
                            </TouchableOpacity>
                            <FormTitle>Forgot Password</FormTitle>
                        </Row>
                        <FormDescription style={styles["mb-16"]}>Enter your email and we’ll send you a password otp to reset your
                            password:</FormDescription>

                        <TextField label="Email"
                                   error={errors.email && touched.email ? errors.email : null}
                                   value={values.email}
                                   onChangeText={handleChange("email")}
                                   onBlur={handleBlur("email")} inputMode="email"
                                   placeholder="example@gmail.com"/>
                        <FormButton status={status} title="Submit" isSubmitting={isSubmitting}
                                    onPress={() => handleSubmit()}/>
                    </>
                )}
            </Formik>
        </AuthForm>
    );
}

const styles = StyleSheet.create({
    "mb-16": {
        marginBottom: 16,
    }
})

export default ForgotPassword