import React from "react";
import {
    ScrollView,
    Text,
    View,
    Pressable,
    Image,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";

const AcceptedLoadsPage = () => {
    const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

    return (
        <ScrollView>
            {/*<FrameComponent111111 />*/}
            <View>
                <View>
                    <Pressable onPress={() => navigation.navigate("BoxAdd")}>
                        <Text>Load Requests</Text>
                    </Pressable>
                    <LinearGradient
                        locations={[0, 1]}
                        colors={["#223931", "#578c7a"]}
                        useAngle={true}
                        angle={-17.12}
                    >
                        <Text>Accepted Loads</Text>
                    </LinearGradient>
                </View>
            </View>
            <View>
                <View>
                    <ScrollView>
                        {/*{detailsLabelItems.map((item, index) => (
                            <DetailsLabel key={index} />
                        ))}*/}
                    </ScrollView>
                </View>
                <Image resizeMode="cover" />
            </View>
        </ScrollView>
    );
};

export default AcceptedLoadsPage;
