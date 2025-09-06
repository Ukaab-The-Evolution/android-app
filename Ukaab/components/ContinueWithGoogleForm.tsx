import {
    ButtonGradient, ButtonText,
    GoogleSignInFormContainer,
    GoogleSignInFormModalContainer, GoogleSignInFormText,
    GoogleSignInFormTitle,
    IconButton, Row, SecondaryButton,
    SecondaryButtonText, TextField, TextFieldContainer, TextFieldError, TextFieldLabel, TextInput, GoogleButtonText,
    GoogleButtonContainer, GoogleIcon
} from "../styles/ContinueWithGoogleForm.ts";
import {Formik, FormikHelpers} from "formik";
import * as Yup from "yup";
import {X} from "lucide-react-native";
import {Modal, StyleSheet, TouchableNativeFeedback, View} from "react-native";
import BasicSpinner from "./BasicSpinner.tsx";
import CheckIcon from "../icons/CheckIcon.tsx";
import {useContext, useState} from "react";
import {AuthContext} from "../providers/AuthProvider.tsx";

const ContinueWithGoogleForm = () => {
    const [googleFormVisible, setGoogleFormVisible] = useState<boolean>(false)
    const authProvider = useContext(AuthContext);

    const continueWithGoogle = async (values: { name: string }, {setStatus}: FormikHelpers<{ name: string }>) => {
        try {
            const response = await authProvider?.continueWithGoogle(values)
            console.log("Response", response);
            setStatus("Successful")
            setGoogleFormVisible(false);
        } catch (error) {
            setStatus("Failed")
            console.error(error);
        } finally {
            setTimeout(() => setStatus(null), 2000)
        }
    }

    return (
        <View>
            <Modal transparent visible={googleFormVisible}>
                <GoogleSignInFormModalContainer>
                    <Formik
                        validationSchema={Yup.object({name: Yup.string().required("Please enter a valid company name")})}
                        initialValues={{name: ""}} onSubmit={continueWithGoogle}>
                        {({handleSubmit, status, isSubmitting, touched, errors, values, handleChange, handleBlur}) => (
                            <GoogleSignInFormContainer style={styles["google-form-shadow"]}>
                                <IconButton onPress={() => setGoogleFormVisible(false)}>
                                    <X style={{alignSelf: "flex-end"}} color="#171717" size={20}/>
                                </IconButton>
                                <GoogleSignInFormTitle>Signing up with Google</GoogleSignInFormTitle>
                                <GoogleSignInFormText>Enter your company name:</GoogleSignInFormText>
                                <TextFieldContainer style={{marginBottom: 56}}>
                                    <TextFieldLabel>Name</TextFieldLabel>
                                    <TextField>
                                        <TextInput value={values.name} onChangeText={handleChange("name")}
                                                   onBlur={handleBlur("name")} placeholder="Enter your company name"/>
                                    </TextField>
                                    {touched.name && errors.name && (
                                        <TextFieldError>{errors.name}</TextFieldError>
                                    )}
                                </TextFieldContainer>
                                <Row>
                                    <TouchableNativeFeedback onPress={() => setGoogleFormVisible(false)}
                                                             useForeground={true}>
                                        <SecondaryButton>
                                            <SecondaryButtonText>Cancel</SecondaryButtonText>
                                        </SecondaryButton>
                                    </TouchableNativeFeedback>
                                    <TouchableNativeFeedback onPress={() => handleSubmit()} useForeground={true}>
                                        <ButtonGradient colors={["#578C7A", "#223931"]}>
                                            {isSubmitting ? (
                                                <BasicSpinner color="white" size={20}/>
                                            ) : status === "Successful" ? (
                                                <CheckIcon color="white" size={18}/>
                                            ) : status === "Failed" ? (
                                                <X color="white" size={18}/>
                                            ) : (
                                                <ButtonText>Continue</ButtonText>
                                            )}
                                        </ButtonGradient>
                                    </TouchableNativeFeedback>
                                </Row>
                            </GoogleSignInFormContainer>
                        )}
                    </Formik>
                </GoogleSignInFormModalContainer>
            </Modal>
            <TouchableNativeFeedback onPress={() => setGoogleFormVisible(true)} useForeground={true}>
                <GoogleButtonContainer>
                    <GoogleIcon source={require("../assets/icons/Google.png")}/>
                    <GoogleButtonText>Continue with Google</GoogleButtonText>
                </GoogleButtonContainer>
            </TouchableNativeFeedback>
        </View>
    );
}

const styles = StyleSheet.create({
    "google-form-shadow": {
        boxShadow: "0px 10px 15px -3px #0000001A, 0px 4px 6px -2px #0000000D"

    }
})


export default ContinueWithGoogleForm