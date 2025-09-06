import {
    FormDescription, FormLogo,
    FormLogoContainer, FormLogoText, FormTitle, Row, PasswordRequirementsContainer, PasswordRequirementText
} from "../styles/ResetPassword.ts";
import {StyleSheet} from "react-native";
import CheckIcon from "../icons/CheckIcon.tsx";
import * as Yup from "yup";
import {X} from "lucide-react-native";
import {Formik, FormikHelpers} from "formik";
import AuthForm from "../layout/AuthForm.tsx";
import FormButton from "../components/FormButton.tsx";
import PasswordInput from "../components/PasswordInput.tsx";
import {PasswordUpdate} from "../services/AuthService.ts";
import {useContext} from "react";
import {AuthContext} from "../providers/AuthProvider.tsx";
import {StackScreenProps} from "@react-navigation/stack";
import {AuthStackNavigatorParamList} from "../navigators/AuthStackNavigator.tsx";

const ResetSchema = Yup.object({
    password: Yup.string()
        .min(8, "Password must be at least 8 characters")
        .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
        .matches(/[0-9!@#$%^&*(),.?":{}|<>]/, "Password must contain a number or symbol")
        .required("Password is required"),

    confirmPassword: Yup.string()
        .oneOf([Yup.ref("password")], "Passwords must match")
        .required("Confirm Password is required"),
});
type ResetPasswordProps = StackScreenProps<AuthStackNavigatorParamList, "Reset Password">;


const ResetPassword = ({route}: ResetPasswordProps) => {
    const initialValues: PasswordUpdate = {password: "", confirmPassword: ""};
    const authProvider = useContext(AuthContext)

    const hasUppercase = (password: string) => /[A-Z]/.test(password);
    const hasMinLength = (password: string) => password.length >= 8;
    const hasNumberAndSymbol = (password: string) => {
        const hasNumber = /[0-9]/.test(password);
        const hasSymbol = /[!@#$%^&*(),.?":{}|<>]/.test(password);
        return hasNumber && hasSymbol;
    }
    const resetPassword = async (values: PasswordUpdate, {setStatus}: FormikHelpers<PasswordUpdate>) => {
        try {
            const data = await authProvider?.resetPassword(route.params.token, values)
            console.log("Response", data);
            setStatus("Successful")
        } catch (error) {
            if (error instanceof Response) {
                const data = await error.json()
                console.log(Error, data)
            } else console.error("Error", error);
            setStatus("Failed")
        } finally {
            setTimeout(() => setStatus(null), 2000)
        }
    }

    return (
        <AuthForm>
            <FormLogoContainer>
                <FormLogo source={require("../assets/icons/LogoGreen.png")}/>
                <FormLogoText>Ukaab</FormLogoText>
            </FormLogoContainer>

            <Row>
                <FormTitle>Reset Password</FormTitle>
            </Row>

            <FormDescription>Setup your new password</FormDescription>

            <Formik validationSchema={ResetSchema} initialValues={initialValues} onSubmit={resetPassword}>
                {({values, errors, touched, handleChange, handleBlur, status, isSubmitting, handleSubmit}) => (
                    <>
                        <PasswordInput value={values.password} onChangeText={handleChange("password")}
                                       onBlur={handleBlur("password")}
                                       error={errors.password && touched.password ? errors.password : null}/>

                        <PasswordRequirementsContainer>
                            <Row style={styles["gap-12"]}>
                                {hasUppercase(values.password) ?
                                    <CheckIcon color="#578C7A" size={14}/> :
                                    <X color="#e58686" size={14}/>}
                                <PasswordRequirementText>Contains at least one capital
                                    character</PasswordRequirementText>
                            </Row>
                            <Row style={styles["gap-12"]}>
                                {hasMinLength(values.password) ?
                                    <CheckIcon color="#578C7A" size={14}/> :
                                    <X color="#e58686" size={14}/>}
                                <PasswordRequirementText>At least 8 characters</PasswordRequirementText>
                            </Row>
                            <Row style={styles["gap-12"]}>
                                {hasNumberAndSymbol(values.password) ?
                                    <CheckIcon color="#578C7A" size={14}/> :
                                    <X color="#e58686" size={14}/>}
                                <PasswordRequirementText>Contains a number or
                                    symbol</PasswordRequirementText>
                            </Row>
                        </PasswordRequirementsContainer>

                        <PasswordInput value={values.confirmPassword} onChangeText={handleChange("confirmPassword")}
                                       onBlur={handleBlur("confirmPassword")} label="Confirm Password"
                                       error={errors.confirmPassword && touched.confirmPassword ? errors.confirmPassword : null}/>

                        <FormButton status={status} title="Save" isSubmitting={isSubmitting}
                                    onPress={() => handleSubmit()}/>
                    </>
                )}
            </Formik>
        </AuthForm>
    );
}

const styles = StyleSheet.create({
    "mb-28": {
        marginBottom: 28
    },
    "mb-16": {
        marginBottom: 16
    },
    "gap-12": {
        gap: 12
    }
})

export default ResetPassword