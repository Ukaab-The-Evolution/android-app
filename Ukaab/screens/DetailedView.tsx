import * as React from "react";
import {
    ScrollView,
    Image,
    View,
    Text,
    Pressable,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";

const DetailedView = () => {
    return (
        <ScrollView>
            <Image
                resizeMode="cover"
                source={require("../assets/image-1.png")}
            />
            <View />
            <View>
                <View>
                    <Image
                        resizeMode="cover"
                        source={require("../assets/ukaab-logo--1removebgpreview-11.png")}
                    />
                    <View>
                        {/*<Group62 width={53} height={49} />*/}
                    </View>
                </View>
            </View>
            <View>
                <View />
                <View>
                    <Text>abc ltd.</Text>
                </View>
                <Text>Accept</Text>
                <View>
                    <Text>Lahore → Karachi</Text>
                    <View>
                        <View>
                            <View>
                                <Text>Weight: 15,000 lbs</Text>
                                <Text>Trucks: 2</Text>
                            </View>
                        </View>
                        <Text>
                            <Text>Rate: </Text>
                            <Text>$2,450</Text>
                        </Text>
                    </View>
                </View>
                <View>
                    <View>
                        <LinearGradient
                            locations={[0, 1]}
                            colors={["#223931", "#578c7a"]}
                            useAngle={true}
                            angle={-6.79}
                        >
                            <Pressable>
                                <Text>Sign Up</Text>
                            </Pressable>
                        </LinearGradient>
                        <View>
                            <View />
                            <Text>Reject</Text>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};

export default DetailedView;
