import React from "react";
import { ScrollView, Image, View, Text } from "react-native";

const SelectDriver = () => {
    return (
        <ScrollView>
            <View>
                <Image
                    resizeMode="cover"
                    source={require("../assets/group-59.png")}
                />
                {/*<FrameComponent
                    frameViewWidth={278}
                    frameViewPaddingRight={108}
                    loadRequests="Driver"
                    loadRequestsWidth={91}
                    loadRequestsFontSize={20}
                    loadRequestsFontFamily="Inter-Regular"
                    loadRequestsColor="#3b6255"
                    loadRequestsHeight={37}
                    onAcceptedLoadsPress={() => navigation.navigate("FrameComponent11")}
                />*/}
            </View>
            <View>
                <View>
                    <View />
                    <View>
                        <Text>Driver</Text>
                        <View>
                            {/*<DropDownPicker
                                open={frameDropdownOpen}
                                setOpen={setFrameDropdownOpen}
                                value={frameDropdownValue}
                                setValue={setFrameDropdownValue}
                                placeholder="In City"
                                items={[]}
                                zIndex={2000}
                                zIndexInverse={0}
                                dropDownDirection={"BOTTOM"}
                            />*/}
                        </View>
                    </View>
                    <ScrollView>
                        <View>
                            {/*{groupComponent11111Items.map((item, index) => (
                                // <GroupComponent11111
                                //     key={index}
                                //     property1={item.property1}
                                //     download1={item.download1}
                                // />
                            ))}*/}
                        </View>
                        <View>
                            {/*{groupComponent11111Items1.map((item, index) => (
                                // <GroupComponent11111
                                //     key={index}
                                //     property1={item.property1}
                                //     download1={item.download1}
                                // />
                            ))}*/}
                        </View>
                    </ScrollView>
                </View>
            </View>
            {/*<FrameComponent1
                onGroupPressablePress={() => navigation.navigate("FrameComponent11")}
                rectangle9={<Rectangle9 width={319} height={25} />}
                ellipse12={<Ellipse1210 width={22} height={86} />}
                ellipse13={<Ellipse1310 width={100} height={100} />}
                cargoTruck2={require("../assets/cargotruck-210.png")}
                home61={require("../assets/home-6-110.png")}
                profileUser4={require("../assets/profileuser-410.png")}
                prop={require("../assets/15618922-410.png")}
                booking31={require("../assets/booking-3-110.png")}
                groupViewPosition="absolute"
                groupViewRight="unset"
                groupViewBottom="unset"
                groupViewLeft="0"
                groupViewTop="0"
            />*/}
        </ScrollView>
    );
};

export default SelectDriver;
