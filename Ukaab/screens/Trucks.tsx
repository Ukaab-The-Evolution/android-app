import * as React from "react";
import {FlatList, StyleSheet, TouchableNativeFeedback} from "react-native";
import {
    ButtonGradient,
    Container,
    ButtonText,
    TruckContainer,
    TruckName, TruckAttribute, TruckPhotoImage
} from "../styles/Trucks.ts";
import {useNavigation} from "@react-navigation/native";

const truckNames = [
    "Volvo FH16", "Scania R500", "Mercedes Actros", "MAN TGX", "DAF XF",
    "Kenworth W990", "Peterbilt 579", "Freightliner Cascadia", "Mack Anthem", "International LT",
    "Volvo VNL", "Western Star 5700", "Isuzu Giga", "Hino Profia", "Fuso Super Great"
];

const data = Array.from({ length: 15 }, (_, i) => ({
    id: Math.floor(1000 + Math.random() * 9000).toString(), // 4-digit ID
    truck: truckNames[i], // assign driver name from the array
    capacity: Math.floor(10000 + Math.random() * 50000).toString(),
}));

const Trucks = ({route}) => {
    const [dialogOpen, setDialogOpen] = React.useState(false);

    const navigation = useNavigation();
    return (
        <Container>
            <TouchableNativeFeedback onPress={() => navigation.navigate("Truck Detail")} useForeground={true}>
                <ButtonGradient style={styles["button-drop-shadow"]} colors={["#578C7A", "#223931"]}>
                    <ButtonText>Add to Fleet</ButtonText>
                </ButtonGradient>
            </TouchableNativeFeedback>
            <FlatList
                centerContent={true}
                columnWrapperStyle={{gap: 10}}
                contentContainerStyle={{gap: 16}}
                numColumns={3} keyExtractor={item => item.id}
                style={{width: "100%"}}
                data={data}
                renderItem={
                    ({ item }) => (
                        <TruckContainer>
                            <TruckPhotoImage source={require("../assets/trucks/Nisan-Deasil.png")}/>
                            <TruckName>{item.truck}</TruckName>
                            <TruckAttribute>NNH - {item.id}</TruckAttribute>
                            <TruckAttribute>{item.capacity + "kg"}</TruckAttribute>
                        </TruckContainer>
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
export default Trucks;
