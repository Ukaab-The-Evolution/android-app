import * as React from "react";
import {StyleSheet, TouchableNativeFeedback} from "react-native";
import {StackNavigationProp} from "@react-navigation/stack";
import {useNavigation, ParamListBase} from "@react-navigation/native";
import {
    Container,
    Title,
    ButtonGradient,
    ButtonText,
    Label,
    TextField,
    TextFieldContainer,
    ScrollContainer,
} from "../styles/TruckDetail.ts";
import DoubleChevronRightIcon from "../icons/DoubleChevronRightIcon.tsx";

const TruckDetail = () => {
    const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

    return (
        <ScrollContainer>
            <Container>
                <Title>Add Truck</Title>

                <TextFieldContainer>
                    <Label>Name</Label>
                    <TextField/>
                </TextFieldContainer>
                <TextFieldContainer>
                    <Label>Manufacturer</Label>
                    <TextField/>
                </TextFieldContainer>
                <TextFieldContainer>
                    <Label>Year</Label>
                    <TextField/>
                </TextFieldContainer>
                <TextFieldContainer>
                    <Label>Truck Type</Label>
                    <TextField/>
                </TextFieldContainer>
                <TextFieldContainer>
                    <Label>Load Capacity</Label>
                    <TextField/>
                </TextFieldContainer>
                <TextFieldContainer>
                    <Label>Registration Number</Label>
                    <TextField/>
                </TextFieldContainer>

                <TouchableNativeFeedback onPress={() => navigation.navigate("Truck Document")} useForeground={true}>
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


export default TruckDetail;
