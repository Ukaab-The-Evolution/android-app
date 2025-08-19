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

const DriverRegistration = () => {
    const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

    return (
        <ScrollContainer>
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
        </ScrollContainer>
    );
};


const styles = StyleSheet.create({
    "button-drop-shadow": {
        boxShadow: "0px 6px 12px #0000003B"
    }
})


export default DriverRegistration;
