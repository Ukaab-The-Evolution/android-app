import {
    FormDescription,
    FormLogo,
    FormLogoContainer,
    FormLogoText,
    FormTitle,
    Row,
    PasswordRequirementsContainer,
    PasswordRequirementText,
    DividerContainer,
    Divider,
    DividerText,
    LoginLink,
} from "../styles/Register.ts";
import {
    StyleSheet, TouchableOpacity
} from "react-native";
import CheckIcon from "../icons/CheckIcon.tsx";
import {Formik, FormikHelpers} from "formik";
import * as Yup from "yup";
import {X} from "lucide-react-native";
import {useContext} from "react";
import {useNavigation} from "@react-navigation/native";
import {AuthStackNavigatorParamList} from "../navigators/AuthStackNavigator.tsx";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {StackScreenProps} from "@react-navigation/stack";
import {AuthContext} from "../providers/AuthProvider.tsx";
import ContinueWithGoogleForm from "../components/ContinueWithGoogleForm.tsx";
import {UserRegister} from "../services/AuthService.ts";
import TextField from "../components/TextField.tsx"
import PasswordInput from "../components/PasswordInput.tsx";
import FormButton from "../components/FormButton.tsx";
import AuthForm from "../layout/AuthForm.tsx";


type RegisterProps = StackScreenProps<AuthStackNavigatorParamList, "Register">;


const RegisterSchema = Yup.object({
    fullName: Yup.string().min(4, "Full name must be at least 4 characters").required("Full Name is required"),
    email: Yup.string().email("Please enter a valid email address").required("Email address is required"),
    password: Yup.string().min(8, "Password must be at least 8 characters")
        .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
        .matches(/[0-9!@#$%^&*(),.?":{}|<>]/, "Password must contain a number or symbol")
        .required("Password is required"),
    phone: Yup.string().matches(/^(?:\+92|92|0)3\d{9}$/, "Please enter a valid phone number").nullable(),
    companyCode: Yup.string().min(6, "Company code should be exactly 6 digits").max(6, "Company code should be exactly 6 digits").required("Company code is required"),
})

const Register = ({route}: RegisterProps) => {
    const navigation = useNavigation<NativeStackNavigationProp<AuthStackNavigatorParamList>>();
    const authProvider = useContext(AuthContext)
    const initialValues: UserRegister = {fullName: "", email: "", phone: "", password: "", companyCode: ""}


    const hasUppercase = (password: string) => /[A-Z]/.test(password);
    const hasNumberAndSymbol = (password: string) => {
        const hasNumber = /[0-9]/.test(password);
        const hasSymbol = /[!@#$%^&*(),.?":{}|<>]/.test(password);
        return hasNumber && hasSymbol;
    }
    const hasMinLength = (password: string) => password.length >= 8;

    const register = async (values: UserRegister, {setStatus}: FormikHelpers<UserRegister>) => {
        try {
            const data = await authProvider?.register(values, route.params.role)
            console.log("Response", data);
            setStatus("Successful")
            navigation.navigate("OTP Verification", {email: values.email})

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
                <FormTitle>Sign Up</FormTitle>
            </Row>

            <Row style={styles["description-container"]}>
                <FormDescription>Already have an account?</FormDescription>
                <TouchableOpacity onPress={() => navigation.navigate("Login", route.params)}>
                    <LoginLink>Login</LoginLink>
                </TouchableOpacity>
            </Row>

            <Formik validationSchema={RegisterSchema} initialValues={initialValues} onSubmit={register}>
                {({
                      handleSubmit,
                      isSubmitting,
                      values,
                      errors,
                      touched,
                      handleChange,
                      handleBlur,
                      status
                  }) => (
                    <>
                        <Row>
                            <TextField style={styles["row-text-field-container"]} label="Full Name"
                                       value={values.fullName}
                                       error={touched.fullName && errors.fullName ? errors.fullName : null}
                                       onChangeText={handleChange("fullName")}
                                       onBlur={handleBlur("fullName")}
                                       placeholder="Enter your full name" />

                            <TextField style={styles["row-text-field-container"]} label="Company Code"
                                       value={values.companyCode} maxLength={6}
                                       error={errors.companyCode && touched.companyCode ? errors.companyCode : null}
                                       onChangeText={handleChange("companyCode")}
                                       onBlur={handleBlur("companyCode")} inputMode="numeric"
                                       placeholder="Enter your company code" />
                        </Row>
                        <Row>
                            <TextField style={styles["row-text-field-container"]} label="Email"
                                       error={errors.email && touched.email ? errors.email : null}
                                       value={values.email}
                                       onChangeText={handleChange("email")}
                                       onBlur={handleBlur("email")} inputMode="email"
                                       placeholder="example@gmail.com" />
                            <TextField style={styles["row-text-field-container"]} label="Phone"
                                       value={values.phone}
                                       error={errors.phone && touched.phone ? errors.phone : null}
                                       onChangeText={handleChange("phone")}
                                       onBlur={handleBlur("phone")} inputMode="tel"
                                       placeholder="Enter your phone number" />
                        </Row>
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

                        <FormButton onPress={() => handleSubmit()} status={status} title="Sign Up"
                                    isSubmitting={isSubmitting} />
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
    "gap-12": {
        gap: 12
    }
})

export default Register