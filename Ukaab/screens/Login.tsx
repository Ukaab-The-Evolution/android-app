import React, { useState } from "react";
import { StyleSheet, TouchableNativeFeedback, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import AuthService, { LoginCredentials } from "../services/AuthService";
import {
    MainContainer,
    LinearGradientContainer,
    BackgroundImage,
    FormContainer,
    FormLogoContainer,
    FormLogo,
    FormLogoText,
    HeaderSection,
    FormTitle,
    SignUpRow,
    SignUpText,
    SignUpLink,
    FormFieldsSection,
    TextFieldContainer,
    TextFieldLabel,
    TextField,
    TextInput,
    PasswordFieldContainer,
    PasswordInputContainer,
    PasswordDivider,
    TextInputIconContainer,
    ButtonGradient,
    ButtonText,
    RememberMeRow,
    RememberMeContainer,
    CheckboxContainer,
    RememberMeText,
    ForgotPasswordLink,
    OrSection,
    OrDividerRow,
    OrDividerLine,
    OrText,
    GoogleButton,
    GoogleIcon,
    GoogleText,
} from "../styles/Login";
import EyeIcon from "../icons/EyeIcon";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const navigation = useNavigation<StackNavigationProp<any>>();

    const handleLogin = async () => {
        // Validate input fields
        if (!email.trim()) {
            Alert.alert("Validation Error", "Please enter your email address");
            return;
        }

        if (!password.trim()) {
            Alert.alert("Validation Error", "Please enter your password");
            return;
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            Alert.alert("Validation Error", "Please enter a valid email address");
            return;
        }

        setIsLoading(true);

        try {
            const credentials: LoginCredentials = {
                email: email.trim(),
                password: password
            };

            console.log('🔐 Attempting login...');
            const response = await AuthService.login(credentials);

            if (response.success) {
                console.log('✅ Login successful');
                Alert.alert("Success", "Login successful!", [
                    { text: "OK", onPress: () => navigation.navigate("Home" as never) }
                ]);
            } else {
                console.error('❌ Login failed:', response.error);
                Alert.alert("Login Failed", response.error || "Please try again");
            }
        } catch (error: any) {
            console.error('💥 Login error:', error);
            Alert.alert("Error", "Network error. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    const handleSignUp = () => {
        // Navigate to sign up screen
        navigation.navigate("DriverRegistration");
    };

    const handleForgotPassword = () => {
        navigation.navigate("Forgot Password");
    };

    const handleGoogleSignIn = async () => {
        setIsLoading(true);

        try {
            const response = await AuthService.loginWithGoogle();

            if (response.success) {
                Alert.alert(
                    "Google Sign-In Successful",
                    "Welcome!",
                    [
                        {
                            text: "Continue",
                            onPress: () => navigation.navigate("Main App")
                        }
                    ]
                );
            } else {
                if (response.error !== 'Google Sign-In was cancelled') {
                    Alert.alert(
                        "Google Sign-In Failed",
                        response.error || "Unable to sign in with Google. Please try again.",
                        [{ text: "OK" }]
                    );
                }
            }
        } catch (error: any) {
            Alert.alert(
                "Google Sign-In Error",
                "Unable to connect to Google services. Please try again later.",
                [{ text: "OK" }]
            );
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <MainContainer>
            <LinearGradientContainer colors={["#223931", "#406C5D", "#579983", "#C6E6DC", "#E6EDEC"]}>
                <BackgroundImage source={require("../assets/images/TruckingMobileBackground.jpg")} />
            </LinearGradientContainer>

            <FormContainer style={styles["form-shadow"]}>
                {/* Logo Section */}
                <FormLogoContainer>
                    <FormLogo source={require("../assets/icons/LogoGreen.png")} />
                    <FormLogoText>Ukaab</FormLogoText>
                </FormLogoContainer>

                {/* Header Section */}
                <HeaderSection>
                    <FormTitle>Login</FormTitle>
                    <SignUpRow>
                        <SignUpText>Don't have an account?</SignUpText>
                        <TouchableNativeFeedback onPress={handleSignUp}>
                            <SignUpLink>Sign Up</SignUpLink>
                        </TouchableNativeFeedback>
                    </SignUpRow>
                </HeaderSection>

                {/* Form Fields Section */}
                <FormFieldsSection>
                    {/* Email Field */}
                    <TextFieldContainer>
                        <TextFieldLabel>Email</TextFieldLabel>
                        <TextField>
                            <TextInput
                                placeholder="abc@gmail.com"
                                placeholderTextColor="#3B6255"
                                value={email}
                                onChangeText={setEmail}
                                keyboardType="email-address"
                                autoCapitalize="none"
                            />
                        </TextField>
                    </TextFieldContainer>

                    {/* Password Field */}
                    <PasswordFieldContainer>
                        <TextFieldContainer>
                            <TextFieldLabel>Password</TextFieldLabel>
                            <TextField>
                                <PasswordInputContainer>
                                    <TextInput
                                        placeholder="*********"
                                        placeholderTextColor="#3B6255"
                                        value={password}
                                        onChangeText={setPassword}
                                        secureTextEntry={!showPassword}
                                        style={{ flex: 1 }}
                                    />
                                </PasswordInputContainer>
                                <TextInputIconContainer>
                                    <PasswordDivider />
                                    <TouchableNativeFeedback onPress={() => setShowPassword(!showPassword)}>
                                        <EyeIcon color="#718096" size={18} />
                                    </TouchableNativeFeedback>
                                </TextInputIconContainer>
                            </TextField>
                        </TextFieldContainer>
                    </PasswordFieldContainer>

                    {/* Login Button */}
                    <TouchableNativeFeedback useForeground={true} onPress={handleLogin}>
                        <ButtonGradient style={styles["button-drop-shadow"]}>
                            <ButtonText>{isLoading ? "Logging in..." : "Login"}</ButtonText>
                        </ButtonGradient>
                    </TouchableNativeFeedback>

                    {/* Remember Me and Forgot Password Row */}
                    <RememberMeRow>
                        <RememberMeContainer>
                            <CheckboxContainer
                                onPress={() => setRememberMe(!rememberMe)}
                                activeOpacity={0.7}
                            >
                                {rememberMe && (
                                    <EyeIcon color="#3B6255" size={8} />
                                )}
                            </CheckboxContainer>
                            <RememberMeText>Remember me</RememberMeText>
                        </RememberMeContainer>
                        <TouchableNativeFeedback onPress={handleForgotPassword}>
                            <ForgotPasswordLink>Forgot Password?</ForgotPasswordLink>
                        </TouchableNativeFeedback>
                    </RememberMeRow>
                </FormFieldsSection>

                {/* OR Section with Google Sign In */}
                <OrSection>
                    <OrDividerRow>
                        <OrDividerLine />
                        <OrText>OR</OrText>
                        <OrDividerLine />
                    </OrDividerRow>

                    <GoogleButton onPress={handleGoogleSignIn} activeOpacity={0.7}>
                        <GoogleIcon source={require("../assets/icons/google1.png")} />
                        <GoogleText>Continue with Google</GoogleText>
                    </GoogleButton>
                </OrSection>
            </FormContainer>
        </MainContainer>
    );
};

const styles = StyleSheet.create({
    "form-shadow": {
        shadowColor: "#171717",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.53,
        shadowRadius: 24,
        elevation: 12,
    },
    "button-drop-shadow": {
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.23,
        shadowRadius: 12,
        elevation: 6,
    }
});

export default Login;
