import {
    FormDescription, FormLogo, FormLogoContainer, FormLogoText, FormTitle, Row,
    DividerContainer, Divider, DividerText, LoginLink, RememberMeCheckBox, RememberMeCheckBoxButton, TextFieldLabel
} from "../styles/Login.ts";
import {StyleSheet, TouchableOpacity} from "react-native";
import {Formik, FormikHelpers} from "formik";
import * as Yup from "yup";
import {Check} from "lucide-react-native";
import {useContext, useState} from "react";
import {useNavigation} from "@react-navigation/native";
import {AuthStackNavigatorParamList} from "../navigators/AuthStackNavigator.tsx";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {StackScreenProps} from "@react-navigation/stack";
import {AyanAuthContext} from "../providers/AyanAuthProvider.tsx";
import ContinueWithGoogleForm from "../components/ContinueWithGoogleForm.tsx";
import {UserLogin} from "../services/AyanAuthService.ts";
import FormButton from "../components/FormButton.tsx";
import AuthForm from "../layout/AuthForm.tsx";
import PasswordInput from "../components/PasswordInput.tsx";
import TextField from "../components/TextField.tsx";


type LoginProps = StackScreenProps<AuthStackNavigatorParamList, "Ayan Login">;


const LoginSchema = Yup.object({
    email: Yup.string().email("Please enter a valid email address").required("Email address is required"),
    password: Yup.string().min(8, "Password must be at least 8 characters")
        .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
        .matches(/[0-9!@#$%^&*(),.?":{}|<>]/, "Password must contain a number or symbol")
        .required("Password is required"),
})

const AyanLogin = ({route}: LoginProps) => {
    const navigation = useNavigation<NativeStackNavigationProp<AuthStackNavigatorParamList>>();
    const authProvider = useContext(AyanAuthContext);
    const [rememberMe, setRememberMe] = useState<boolean>(false);

    const toggleRememberMe = () => {
        setRememberMe(!rememberMe);
    }
    const initialValues: UserLogin = {email: "", password: ""}


    const login = async (values: UserLogin, {setStatus}: FormikHelpers<UserLogin>) => {
        try {
            await authProvider?.login(values)
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
            <FormLogoContainer>
                <FormLogo source={require("../assets/icons/LogoGreen.png")}/>
                <FormLogoText>Ukaab</FormLogoText>
            </FormLogoContainer>

            <Row>
                <FormTitle>AyanLogin</FormTitle>
            </Row>

            <Row style={styles["description-container"]}>
                <FormDescription>Don't have an account?</FormDescription>
                <TouchableOpacity onPress={() => navigation.navigate("Register", route.params)}>
                    <LoginLink>Sign Up</LoginLink>
                </TouchableOpacity>
            </Row>

            <Formik validationSchema={LoginSchema} initialValues={initialValues} onSubmit={login}>
                {({handleSubmit, isSubmitting, values, errors, touched, handleChange, handleBlur, status}) => (
                    <>
                        <TextField style={styles["row-text-field-container"]} label="Email"
                                   error={errors.email && touched.email ? errors.email : null}
                                   value={values.email}
                                   onChangeText={handleChange("email")}
                                   onBlur={handleBlur("email")} inputMode="email"
                                   placeholder="example@gmail.com" />

                        <PasswordInput value={values.password} onChangeText={handleChange("password")}
                                       onBlur={handleBlur("password")}
                                       error={errors.password && touched.password ? errors.password : null}/>

                        <FormButton onPress={() => handleSubmit()} isSubmitting={isSubmitting}
                                    status={status} title="AyanLogin"/>

                        <Row style={[styles["justify-between"], styles["mt-20"]]}>
                            <Row style={styles["gap-10"]}>
                                <RememberMeCheckBoxButton onPress={toggleRememberMe}>
                                    <RememberMeCheckBox active={rememberMe}>
                                        {rememberMe && <Check size={12} color="#FFFFFF"/>}
                                    </RememberMeCheckBox>
                                </RememberMeCheckBoxButton>
                                <TextFieldLabel>Remember Me</TextFieldLabel>
                            </Row>

                            <TouchableOpacity onPress={() => navigation.navigate("Forgot Password")}>
                                <LoginLink>Forgot Password</LoginLink>
                            </TouchableOpacity>
                        </Row>
                    </>
                )}
            </Formik>

            <DividerContainer>
                <Divider/>
                <DividerText>OR</DividerText>
                <Divider/>
            </DividerContainer>

            <ContinueWithGoogleForm/>
        </AuthForm>
    );
}

const styles = StyleSheet.create({
    "row-text-field-container": {
        flex: 1
    },
    "description-container": {
        gap: 8,
        marginBottom: 32
    },
    "justify-between": {
        justifyContent: "space-between"
    },
    "mt-20": {
        marginTop: 20
    },
    "gap-10": {
        gap: 10
    }
})

export default AyanLogin