import * as React from "react";
import {FlatList, StyleSheet, TouchableNativeFeedback} from "react-native";
import {
    ButtonGradient,
    Container,
    ButtonText,
    DriverContainer,
    DriverPhotoPlaceholder, DriverName, DriverID, DriverPhotoImage
} from "../styles/Drivers.ts";
import {StackScreenProps} from "@react-navigation/stack";
import {DriversStackNavigatorParamList} from "../navigators/DriversStackNavigator.tsx";

const driverNames = [
    "John Doe",
    "Jane Smith",
    "Mike Johnson",
    "Emily Davis",
    "Robert Brown",
    "Linda Wilson",
    "David Lee",
    "Sophia Taylor",
    "James White",
    "Olivia Martin",
    "William Thompson",
    "Emma Garcia",
    "Alexander Clark",
    "Mia Lewis",
    "Daniel Walker"
];

const data = Array.from({ length: 15 }, (_, i) => ({
    id: Math.floor(1000 + Math.random() * 9000).toString(), // 4-digit ID
    driver: driverNames[i] // assign driver name from the array
}));

type DriversProps = StackScreenProps<DriversStackNavigatorParamList, "Drivers">;


const Drivers = ({navigation}: DriversProps) => {
    return (
        <Container>
            <TouchableNativeFeedback onPress={() => navigation.navigate("Driver Documents")}  useForeground={true}>
                <ButtonGradient style={styles["button-drop-shadow"]} colors={["#578C7A", "#223931"]}>
                    <ButtonText>Add a Driver</ButtonText>
                </ButtonGradient>
            </TouchableNativeFeedback>
            <FlatList
                centerContent={true}
                columnWrapperStyle={{gap: 16}}
                contentContainerStyle={{gap: 16}}
                numColumns={3} keyExtractor={item => item.id}
                style={{width: "100%"}}
                data={data}
                renderItem={
                ({ item }) => (
                    <DriverContainer>
                        <DriverPhotoImage source={require("../assets/avatars/Avatar-1.png")}/>
                        <DriverName>{item.driver}</DriverName>
                        <DriverID>ID: {item.id}</DriverID>
                    </DriverContainer>
                )
            }/>
        </Container>
    );
};

const styles = StyleSheet.create({
    "button-drop-shadow": {
        boxShadow: "0px 6px 12px #0000003B"
    }
})

export default Drivers;
