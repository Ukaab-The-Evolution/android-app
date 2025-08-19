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

const LoadRequestsPage = () => {
    const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

    return (
        <ScrollView>
            {/*<GroupComponent1111111 />*/}
            <View>
                <View>
                    <LinearGradient
                        locations={[0, 1]}
                        colors={["#223931", "#578c7a"]}
                        useAngle={true}
                        angle={-17.12}
                    >
                        {/*<BoxAdd
                            style="linear"
                            vuesaxlinearboxAdd={
                                <Vuesaxlinearboxadd width={100} height={100} />
                            }
                        />*/}
                        <Text>Load Requests</Text>
                    </LinearGradient>
                    <Pressable
                        onPress={() => navigation.navigate("AcceptedLoadsPage")}
                    >
                        {/*<ClipboardTick
                            style="linear"
                            vuesaxlinearclipboardTick={
                                <Vuesaxlinearclipboardtick width={100} height={100} />
                            }
                        />*/}
                        <Text>Accepted Loads</Text>
                    </Pressable>
                </View>
            </View>
            <View>
                <ScrollView>
                    {/*{frameComponent111Items.map((item, index) => (
                        <FrameComponent111 key={index} />
                    ))}*/}
                </ScrollView>
            </View>
            <Image
                resizeMode="cover"
                // source={require("../assets/group-75.png")}
            />
        </ScrollView>
    );
};

export default LoadRequestsPage;
