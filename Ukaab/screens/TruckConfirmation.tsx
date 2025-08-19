import * as React from "react";
import {
    ScrollView,
    View,
    Image,
    Pressable,
    Text,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
// import Vector31 from "../assets/vector3.svg";
// import Profilepresslogo2 from "../assets/profilepress-logo2.svg";
// import Group2 from "../assets/group2.svg";
// import FirstColumn from "../components/FirstColumn";
// import GroupComponent1111 from "../components/GroupComponent1111";
// import Ellipse125 from "../assets/ellipse-125.svg";
// import Ellipse135 from "../assets/ellipse-135.svg";

const TruckConfirmation = () => {
    return (
        <ScrollView>
            <View>
                <View />
                <Image
                    resizeMode="cover"
                    // source={require("../assets/ukaab-logo--1removebgpreview-15.png")}
                />
                <View>
                    <View>
                        <View>
                            {/*<Vector31 width={20} height={22} />*/}
                        </View>
                        {/*<Profilepresslogo2 width={35} height={35} />*/}
                        <View>
                            {/*<Group2 width={17} height={22} />*/}
                        </View>
                    </View>
                </View>
            </View>
            <View>
                <LinearGradient
                    locations={[0, 1]}
                    colors={["#223931", "#578c7a"]}
                    useAngle={true}
                    angle={-6.79}
                >
                    <Pressable>
                        <Text>ADD TO FLEET</Text>
                    </Pressable>
                </LinearGradient>
            </View>
            <View>
                {/*<FirstColumn />*/}
            </View>
            {/*<GroupComponent1111
                groupViewPosition="relative"
                groupViewRight="unset"
                groupViewBottom="unset"
                groupViewLeft="unset"
                groupViewTop="unset"
                ellipse12={<Ellipse125 width={22} height={86} />}
                ellipse13={<Ellipse135 width={100} height={100} />}
                cargoTruck2={require("../assets/cargotruck-25.png")}
                home61={require("../assets/home-6-15.png")}
                profileUser4={require("../assets/profileuser-45.png")}
                prop={require("../assets/15618922-45.png")}
                booking31={require("../assets/booking-3-15.png")}
            />*/}
        </ScrollView>
    );
};

export default TruckConfirmation;
