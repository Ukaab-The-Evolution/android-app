import React from "react";
import { ScrollView, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const SelectTruck = () => {
    const navigation = useNavigation();

    return (
        <ScrollView>
            <View>
                <Text>Select Truck</Text>

                <View>
                    <Pressable>
                        <Text>Truck 1</Text>
                    </Pressable>

                    <Pressable>
                        <Text>Truck 2</Text>
                    </Pressable>
                </View>
            </View>
        </ScrollView>
    );
};

export default SelectTruck;
