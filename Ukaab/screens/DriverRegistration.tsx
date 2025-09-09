import * as React from "react";
import {StyleSheet, TouchableNativeFeedback} from "react-native";
import {StackNavigationProp} from "@react-navigation/stack";
import {useNavigation, ParamListBase} from "@react-navigation/native";
import {
    Container,
    Title,
    ButtonGradient,
    ScrollContainer,
    ButtonText,
    Label,
    TextField,
    TextFieldContainer,
} from "../styles/DriverRegistration.ts";
import DoubleChevronRightIcon from "../icons/DoubleChevronRightIcon.tsx";
import * as Yup from "yup";
import {Formik} from "formik";

type Driver = {
    name: string;
    fatherName: string;
    cnic: string;
    dateOfBirth: string;
    address: string;
    contact: string;
    alternateContact: string;
}

const DriverSchema = Yup.object({
    name: Yup.string()
        .min(3, "Name must be at least 3 characters")
        .max(50, "Name cannot exceed 50 characters")
        .matches(/^[a-zA-Z\s]+$/, "Name can only contain letters and spaces")
        .required("Name is required"),

    fatherName: Yup.string()
        .min(3, "Father's name must be at least 3 characters")
        .max(50, "Father's name cannot exceed 50 characters")
        .matches(/^[a-zA-Z\s]+$/, "Father's name can only contain letters and spaces")
        .required("Father's name is required"),

    cnic: Yup.string()
        // Accepts CNIC with or without dashes (e.g. 12345-1234567-1 or 1234512345671)
        .matches(/^(\d{5}-\d{7}-\d{1}|\d{13})$/, "Invalid CNIC format")
        .required("CNIC is required"),

    dateOfBirth: Yup.date()
        .max(new Date(), "Date of Birth cannot be in the future")
        .required("Date of Birth is required"),

    address: Yup.string()
        .min(5, "Address must be at least 5 characters")
        .max(200, "Address cannot exceed 200 characters")
        .required("Address is required"),

    contact: Yup.string()
        // Pakistani phone numbers: +92XXXXXXXXXX or 03XXXXXXXXX
        .matches(/^(\+92\d{10}|0\d{10})$/, "Invalid contact number")
        .required("Contact number is required"),

    alternateContact: Yup.string()
        .matches(/^(\+92\d{10}|0\d{10})$/, "Invalid alternate contact number")
        .notOneOf([Yup.ref("contact")], "Alternate contact cannot be the same as contact"),
});


const DriverRegistration = () => {
    const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
    const initialValues: Driver = {
        name: "",
        fatherName: "",
        dateOfBirth: "",
        address: "",
        alternateContact: "",
        contact: "",
        cnic: ""
    }

    const onSubmit = (values: Driver) => {

    }

    return (
        <ScrollContainer>
            <Formik initialValues={initialValues} onSubmit={onSubmit}>
                {({}) => (
                    <Container>
                        <Title>Register Driver</Title>

                        <TextFieldContainer>
                            <Label>Name</Label>
                            <TextField/>
                        </TextFieldContainer>
                        <TextFieldContainer>
                            <Label>Father Name</Label>
                            <TextField/>
                        </TextFieldContainer>
                        <TextFieldContainer>
                            <Label>CNIC Number</Label>
                            <TextField/>
                        </TextFieldContainer>
                        <TextFieldContainer>
                            <Label>Date of Birth</Label>
                            <TextField/>
                        </TextFieldContainer>
                        <TextFieldContainer>
                            <Label>Address</Label>
                            <TextField/>
                        </TextFieldContainer>
                        <TextFieldContainer>
                            <Label>Contact Number</Label>
                            <TextField/>
                        </TextFieldContainer>
                        <TextFieldContainer>
                            <Label>Alternate Contact Number</Label>
                            <TextField/>
                        </TextFieldContainer>

                        <TouchableNativeFeedback onPress={() => navigation.navigate("Driver Documents")} useForeground={true}>
                            <ButtonGradient style={styles["button-drop-shadow"]} colors={["#578C7A", "#223931"]}>
                                <ButtonText>Next</ButtonText>
                                <DoubleChevronRightIcon size={18} color="#FFFFFF"/>
                            </ButtonGradient>
                        </TouchableNativeFeedback>
                    </Container>
                )}
            </Formik>
        </ScrollContainer>
    );
};


const styles = StyleSheet.create({
    "button-drop-shadow": {
        boxShadow: "0px 6px 12px #0000003B"
    }
})


export default DriverRegistration;
