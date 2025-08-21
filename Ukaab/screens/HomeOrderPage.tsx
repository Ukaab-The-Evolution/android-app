import * as React from "react";
import { ScrollView, View, Image, Text, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";

const HomeOrderPage = () => {
    const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

    return (
        <ScrollView>
            <View>
                <View />
                <Image resizeMode="cover" />
                <View>
                    <View>
                        <View>{/* Vector Icon */}</View>
                        {/* Profilepresslogo5 */}
                        <View>{/* Group4 */}</View>
                    </View>
                </View>
            </View>

            <View>
                <View>
                    <View />
                    <View>
                        <Pressable onPress={() => navigation.navigate("BoxAdd")}>
                            <Text>Load Requests</Text>
                        </Pressable>
                    </View>
                    <View>
                        <View />
                        <Text>Accepted Loads</Text>
                    </View>
                </View>
            </View>

            <View>
                <View>
                    <ScrollView>
                        <View>
                            <View />
                            <View>
                                <View>
                                    <View>
                                        <View>
                                            <Text>abc ltd.</Text>
                                        </View>
                                        <Text>Lahore → Karachi</Text>
                                    </View>
                                </View>
                                <View>
                                    <Text>Pending Assignment</Text>
                                </View>
                            </View>
                            <View>
                                <Text>Weight: 15,000 lbs</Text>
                            </View>
                            <View>
                                <View>
                                    <Pressable
                                        onPress={() =>
                                            navigation.navigate("FrameComponent1")
                                        }
                                    />
                                    <View>
                                        <Text>Assign Driver/Truck</Text>
                                    </View>
                                </View>
                            </View>
                        </View>

                        <View>
                            <View />
                            <View>
                                <View>
                                    <View>
                                        <View>
                                            <Text>abc ltd.</Text>
                                        </View>
                                        <Text>Lahore → Karachi</Text>
                                    </View>
                                </View>
                                <View>
                                    <Text>Pending Assignment</Text>
                                </View>
                            </View>
                            <View>
                                <Text>Weight: 15,000 lbs</Text>
                            </View>
                            <View>
                                <View>
                                    <Pressable
                                        onPress={() =>
                                            navigation.navigate("FrameComponent1")
                                        }
                                    />
                                    <View>
                                        <Text>Assign Driver/Truck</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                </View>
                {/* GroupComponent1111 */}
            </View>
        </ScrollView>
    );
};

export default HomeOrderPage;
