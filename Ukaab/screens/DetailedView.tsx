import React, {useEffect} from "react";
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet, Image,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import {Theme} from "../Theme";
import MapView, {Marker} from "react-native-maps";
import {StackScreenProps} from "@react-navigation/stack";
import {LoadsNavigatorParamsList} from "../navigators/LoadsNavigator.tsx";
import {useAyanAuth} from "../providers/AyanAuthProvider.tsx";

type DetailedViewProps = StackScreenProps<LoadsNavigatorParamsList, "DetailedView">

const DetailedView: React.FC<DetailedViewProps> = ({navigation}) => {
    const authProvider = useAyanAuth()
    const handleAccept = () => {

        console.log("Load accepted");
    };


    return (
        <View style={styles.container}>
            <View style={styles.content}>

                <MapView
                    style={styles.mapStyle}
                    initialRegion={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                    customMapStyle={mapStyle}>
                    <Marker draggable
                            coordinate={{
                                latitude: 37.78825,
                                longitude: -122.4324,
                            }}
                            onDragEnd={
                                (e) => alert(JSON.stringify(e.nativeEvent.coordinate))
                            }
                            title={'Test Marker'}
                            description={'This is a description of the marker'}
                    />
                </MapView>
                <View style={styles.loadCard}>
                    {/* Load Details */}
                    <View style={styles.loadDetails}>
                        <Text style={styles.companyText}>abc ltd.</Text>

                        {/* Route and Rate on same line */}
                        <View style={styles.routeRateContainer}>
                            <Text style={styles.routeText}>Lahore → Karachi</Text>
                            {/*<View style={styles.rateContainer}>*/}
                            {/*    <Text style={styles.rateLabel}>Rate: </Text>*/}
                            {/*    <Text style={styles.rateAmount}>$2,450</Text>*/}
                            {/*</View>*/}
                        </View>

                        <Text style={styles.weightText}>Weight: 15,000 lbs</Text>
                        <Text style={styles.trucksText}>Trucks: 2</Text>
                    </View>

                    {/* Action Buttons */}
                    <View style={styles.buttonsContainer}>
                        {(authProvider?.user?.userType === "driver" && authProvider.user.ownsCompany) ||
                            authProvider?.user?.userType === "trucking_company" &&
                            <TouchableOpacity style={styles.acceptButton} onPress={handleAccept}>
                                <LinearGradient
                                    colors={[Theme.palette.primary, Theme.palette.secondary]}
                                    style={styles.buttonGradient}
                                    start={{x: 0, y: 0}}
                                    end={{x: 1, y: 1}}
                                >
                                    <Text style={styles.buttonText}>Accept</Text>
                                </LinearGradient>
                            </TouchableOpacity>}

                        <TouchableOpacity style={styles.acceptButton}
                                          onPress={() => navigation.navigate("Upload PickUp Proof")}>
                            <LinearGradient
                                colors={[Theme.palette.primary, Theme.palette.secondary]}
                                style={styles.buttonGradient}
                                start={{x: 0, y: 0}}
                                end={{x: 1, y: 1}}
                            >
                                <Text style={styles.buttonText}>Upload Pick Up Proof</Text>
                            </LinearGradient>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.acceptButton}
                                          onPress={() => navigation.navigate("Upload Completion Proof")}>
                            <LinearGradient
                                colors={[Theme.palette.primary, Theme.palette.secondary]}
                                style={styles.buttonGradient}
                                start={{x: 0, y: 0}}
                                end={{x: 1, y: 1}}
                            >
                                <Text style={styles.buttonText}>Upload Completion Proof</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                        {(authProvider?.user?.userType === "driver" && authProvider.user.ownsCompany) ||
                            authProvider?.user?.userType === "trucking_company" &&
                            <TouchableOpacity style={styles.rejectButton}>
                                <LinearGradient
                                    colors={["#760000", "#D64343"]}
                                    style={styles.buttonGradient}
                                    start={{x: 0, y: 0}}
                                    end={{x: 1, y: 1}}
                                >
                                    <Text style={styles.buttonText}>Reject</Text>
                                </LinearGradient>
                            </TouchableOpacity>}
                    </View>
                </View>
            </View>
            <View style={styles.floatingActionButton}>
                <Image source={require("../assets/icons/Chat.png")} style={styles["chat-icon"]}/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F9FAFB",
    },
    content: {
        flex: 1,
        justifyContent: "flex-end",
        paddingHorizontal: 0,
    },
    loadCard: {
        width: "100%",
        backgroundColor: Theme.palette.white,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        paddingHorizontal: 24.68,
        paddingTop: 22.74,
        paddingBottom: 40,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: -2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 8,

        marginBottom: 0,
    },
    loadDetails: {
        marginBottom: 15,
    },
    companyText: {
        color: "#5F5F5F",
        fontSize: 14,
        fontFamily: Theme.fonts.poppinsRegular,
        fontWeight: "400",
        marginBottom: 6,
    },
    routeRateContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 6,
    },
    leftContent: {
        flex: 1,
    },
    routeText: {
        color: "#5F5F5F",
        justifyContent: "center",
        fontSize: 14,
        fontFamily: Theme.fonts.poppinsRegular,
        fontWeight: "400",
    },
    rateContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    rateLabel: {
        color: "#5F5F5F",
        fontSize: 20,
        fontFamily: Theme.fonts.poppinsRegular,
        fontWeight: "400",
    },
    rateAmount: {
        color: "#16A34A",
        fontSize: 20,
        fontFamily: Theme.fonts.poppinsRegular,
        fontWeight: "400",
    },
    weightText: {
        color: "#5F5F5F",
        fontSize: 14,
        fontFamily: Theme.fonts.poppinsRegular,
        fontWeight: "400",
        marginBottom: 6,
    },
    trucksText: {
        color: "#5F5F5F",
        fontSize: 14,
        fontFamily: Theme.fonts.poppinsRegular,
        fontWeight: "400",
    },
    buttonsContainer: {
        gap: 7,
    },
    acceptButton: {
        width: "100%",
        height: 40,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
        overflow: "hidden",
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.25,
        shadowRadius: 12,
        elevation: 12,
    },
    rejectButton: {
        width: "100%",
        height: 40,
        borderRadius: 8,
        overflow: "hidden",
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.25,
        shadowRadius: 12,
        elevation: 12,
    },
    buttonGradient: {
        flex: 1,
        paddingHorizontal: 25,
        paddingVertical: 7,
        justifyContent: "center",
        alignItems: "center",
    },
    buttonText: {
        color: Theme.palette.white,
        fontSize: 15,
        fontFamily: Theme.fonts.poppinsSemiBold,
        fontWeight: "600",
    },
    mapStyle: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    "floatingActionButton": {
        position: "absolute",
        bottom: 16,
        right: 16,
        width: 78,
        height: 78,
        backgroundColor: "#3860FF",
        borderRadius: 200,
        padding: 4,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    "chat-icon": {
        width: 48,
        height: 48
    }
});

const mapStyle = [
    {elementType: 'geometry', stylers: [{color: '#f5f5f5'}]},
    {elementType: 'labels.text.fill', stylers: [{color: '#616161'}]},
    {elementType: 'labels.text.stroke', stylers: [{color: '#f5f5f5'}]},
    {
        featureType: 'administrative.locality',
        elementType: 'labels.text.fill',
        stylers: [{color: '#9e9e9e'}],
    },
    {
        featureType: 'poi',
        elementType: 'labels.text.fill',
        stylers: [{color: '#757575'}],
    },
    {
        featureType: 'poi.park',
        elementType: 'geometry',
        stylers: [{color: '#e5f3e0'}],
    },
    {
        featureType: 'poi.park',
        elementType: 'labels.text.fill',
        stylers: [{color: '#4c8b4c'}],
    },
    {
        featureType: 'road',
        elementType: 'geometry',
        stylers: [{color: '#ffffff'}],
    },
    {
        featureType: 'road',
        elementType: 'geometry.stroke',
        stylers: [{color: '#e0e0e0'}],
    },
    {
        featureType: 'road',
        elementType: 'labels.text.fill',
        stylers: [{color: '#757575'}],
    },
    {
        featureType: 'road.highway',
        elementType: 'geometry',
        stylers: [{color: '#dadada'}],
    },
    {
        featureType: 'road.highway',
        elementType: 'geometry.stroke',
        stylers: [{color: '#c0c0c0'}],
    },
    {
        featureType: 'road.highway',
        elementType: 'labels.text.fill',
        stylers: [{color: '#616161'}],
    },
    {
        featureType: 'transit',
        elementType: 'geometry',
        stylers: [{color: '#e0e0e0'}],
    },
    {
        featureType: 'transit.station',
        elementType: 'labels.text.fill',
        stylers: [{color: '#757575'}],
    },
    {
        featureType: 'water',
        elementType: 'geometry',
        stylers: [{color: '#c9f0ff'}],
    },
    {
        featureType: 'water',
        elementType: 'labels.text.fill',
        stylers: [{color: '#4c4c4c'}],
    },
    {
        featureType: 'water',
        elementType: 'labels.text.stroke',
        stylers: [{color: '#c9f0ff'}],
    },
];


export default DetailedView;
