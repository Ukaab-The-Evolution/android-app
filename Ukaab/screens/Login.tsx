import React, { useState } from "react";
import { StyleSheet, TouchableNativeFeedback, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import AuthService, { LoginCredentials } from "../services/AuthService";
import { useAuth } from "../contexts/AuthContext";
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

    const { login } = useAuth();

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
            console.log('🔐 Attempting login...');

            // Use AuthContext login function which handles the complete flow
            const success = await login(email.trim(), password);

            if (success) {
                console.log('✅ Login successful');

                // Navigate immediately without showing alert first
                navigation.navigate("Main App" as never);

                // Show success message after navigation (non-blocking)
                setTimeout(() => {
                    Alert.alert("Success", "Welcome back!");
                }, 100);
            } else {
                console.error('❌ Login failed');
                Alert.alert(
                    "Login Failed",
                    "Invalid email or password. Please check your credentials and try again.",
                    [{ text: "OK" }]
                );
            }
        } catch (error: any) {
            console.error('💥 Login error:', error);

            // Handle specific error types
            let errorMessage = "An unexpected error occurred. Please try again.";

            if (error.message?.includes('network') || error.message?.includes('fetch')) {
                errorMessage = "Network error. Please check your internet connection and try again.";
            } else if (error.message?.includes('timeout')) {
                errorMessage = "Request timed out. Please try again.";
            } else if (error.response?.status === 401) {
                errorMessage = "Invalid credentials. Please check your email and password.";
            } else if (error.response?.status === 429) {
                errorMessage = "Too many login attempts. Please wait a moment and try again.";
            } else if (error.response?.status >= 500) {
                errorMessage = "Server error. Please try again later.";
            }

            Alert.alert("Login Error", errorMessage, [{ text: "OK" }]);
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
            console.log('🔐 Attempting Google Sign-In...');
            const response = await AuthService.loginWithGoogle();

            if (response.success) {
                console.log('✅ Google Sign-In successful');

                navigation.navigate("Main App" as never);

                Alert.alert(
                    "Success",
                    "Welcome! You've successfully signed in with Google.",
                    [{ text: "OK" }]
                );
            } else {
                if (response.error !== 'Google Sign-In was cancelled') {
                    console.error('❌ Google Sign-In failed:', response.error);

                    let errorMessage = response.error || "Unable to sign in with Google. Please try again.";

                    // Handle specific Google Sign-In errors
                    if (response.error?.includes('network')) {
                        errorMessage = "Network error. Please check your internet connection and try again.";
                    } else if (response.error?.includes('SIGN_IN_CANCELLED')) {
                        // Don't show error for user cancellation
                        return;
                    } else if (response.error?.includes('SIGN_IN_REQUIRED')) {
                        errorMessage = "Google Sign-In is required. Please try again.";
                    }

                    Alert.alert(
                        "Google Sign-In Failed",
                        errorMessage,
                        [{ text: "OK" }]
                    );
                }
            }
        } catch (error: any) {
            console.error('💥 Google Sign-In error:', error);

            let errorMessage = "Unable to connect to Google services. Please try again later.";

            if (error.message?.includes('network') || error.message?.includes('fetch')) {
                errorMessage = "Network error. Please check your internet connection and try again.";
            } else if (error.message?.includes('timeout')) {
                errorMessage = "Request timed out. Please try again.";
            }

            Alert.alert(
                "Google Sign-In Error",
                errorMessage,
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
                                editable={!isLoading}
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
                                        editable={!isLoading}
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
                    <TouchableNativeFeedback
                        useForeground={true}
                        onPress={handleLogin}
                        disabled={isLoading}
                    >
                        <ButtonGradient style={[
                            styles["button-drop-shadow"],
                            isLoading && { opacity: 0.7 }
                        ]}>
                            <ButtonText>{isLoading ? "Logging in..." : "Login"}</ButtonText>
                        </ButtonGradient>
                    </TouchableNativeFeedback>

                    {/* Remember Me and Forgot Password Row */}
                    <RememberMeRow>
                        <RememberMeContainer>
                            <CheckboxContainer
                                onPress={() => setRememberMe(!rememberMe)}
                                activeOpacity={0.7}
                                disabled={isLoading}
                            >
                                {rememberMe && (
                                    <EyeIcon color="#3B6255" size={8} />
                                )}
                            </CheckboxContainer>
                            <RememberMeText>Remember me</RememberMeText>
                        </RememberMeContainer>
                        <TouchableNativeFeedback
                            onPress={handleForgotPassword}
                            disabled={isLoading}
                        >
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

                    <GoogleButton
                        onPress={handleGoogleSignIn}
                        activeOpacity={0.7}
                        disabled={isLoading}
                        style={isLoading ? { opacity: 0.7 } : {}}
                    >
                        <GoogleIcon source={require("../assets/icons/google1.png")} />
                        <GoogleText>
                            {isLoading ? "Signing in..." : "Continue with Google"}
                        </GoogleText>
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
