import React from "react";
import {
    ScrollView,
    Text,
    View,
    Pressable,
    StyleSheet,
    StatusBar,
    SafeAreaView,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import Svg, { Path } from "react-native-svg";

interface AcceptedLoadData {
    id: string;
    company: string;
    route: string;
    weight: string;
}

interface AcceptedLoadsPageProps {
    onSwitchToRequests?: () => void;
}

const AcceptedLoadsPage = ({ onSwitchToRequests }: AcceptedLoadsPageProps) => {
    const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

    // Sample data for accepted loads
    const acceptedLoads: AcceptedLoadData[] = [
        {
            id: '1',
            company: 'abc ltd.',
            route: 'Lahore → Karachi',
            weight: '15,000 lbs'
        },
        {
            id: '2',
            company: 'xyz logistics',
            route: 'Islamabad → Lahore',
            weight: '12,000 lbs'
        },
        {
            id: '3',
            company: 'transport co.',
            route: 'Karachi → Peshawar',
            weight: '18,000 lbs'
        }
    ];

    const handleAssignDriver = (loadId: string) => {
        // Navigate to Trucks tab first, then to SelectPage
        navigation.navigate("Trucks", { screen: "SelectPage" });
    };


    const navigateToLoadRequests = () => {
        if (onSwitchToRequests) {
            onSwitchToRequests();
        }
    };

    // Load Requests icon component
    const LoadRequestsIcon = ({ color }: { color: string }) => (
        <View style={{ width: 18, height: 18 }}>
            <Svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <Path
                    d="M17.25 13.5C17.25 14.0625 17.0925 14.595 16.815 15.045C16.6575 15.315 16.455 15.555 16.2225 15.75C15.6975 16.2225 15.0075 16.5 14.25 16.5C13.335 16.5 12.5175 16.0875 11.9775 15.4425C11.9625 15.42 11.94 15.405 11.925 15.3825C11.835 15.2775 11.7525 15.165 11.685 15.045C11.4075 14.595 11.25 14.0625 11.25 13.5C11.25 12.555 11.685 11.7075 12.375 11.16C12.8925 10.7475 13.545 10.5 14.25 10.5C15 10.5 15.675 10.77 16.2 11.2275C16.29 11.295 16.3725 11.3775 16.4475 11.46C16.9425 12 17.25 12.7125 17.25 13.5Z"
                    stroke={color}
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <Path
                    d="M15.3675 13.485H13.1325"
                    stroke={color}
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <Path
                    d="M14.25 12.39V14.6325"
                    stroke={color}
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <Path
                    d="M2.3775 5.58L9 9.41249L15.5775 5.60248"
                    stroke={color}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <Path
                    d="M9 16.2075V9.40498"
                    stroke={color}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <Path
                    d="M16.2075 6.8775V11.1225C16.2075 11.16 16.2075 11.19 16.2 11.2275C15.675 10.77 15 10.5 14.25 10.5C13.545 10.5 12.8925 10.7475 12.375 11.16C11.685 11.7075 11.25 12.555 11.25 13.5C11.25 14.0625 11.4075 14.595 11.685 15.045C11.7525 15.165 11.835 15.2775 11.925 15.3825L10.5525 16.14C9.69751 16.62 8.30249 16.62 7.44749 16.14L3.4425 13.92C2.535 13.4175 1.7925 12.1575 1.7925 11.1225V6.8775C1.7925 5.8425 2.535 4.58252 3.4425 4.08002L7.44749 1.86C8.30249 1.38 9.69751 1.38 10.5525 1.86L14.5575 4.08002C15.465 4.58252 16.2075 5.8425 16.2075 6.8775Z"
                    stroke={color}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </Svg>
        </View>
    );

    // Clipboard check icon for Accepted Loads tab
    const ClipboardCheckIcon = ({ color }: { color: string }) => (
        <View style={{ width: 18, height: 18 }}>
            <Svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <Path
                    d="M6.9825 11.025L8.1075 12.15L11.1075 9.15"
                    stroke={color}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <Path
                    d="M7.5 4.5H10.5C12 4.5 12 3.75 12 3C12 1.5 11.25 1.5 10.5 1.5H7.5C6.75 1.5 6 1.5 6 3C6 4.5 6.75 4.5 7.5 4.5Z"
                    stroke={color}
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <Path
                    d="M12 3.015C14.4975 3.15 15.75 4.0725 15.75 7.5V12C15.75 15 15 16.5 11.25 16.5H6.75C3 16.5 2.25 15 2.25 12V7.5C2.25 4.08 3.5025 3.15 6 3.015"
                    stroke={color}
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </Svg>
        </View>
    );

    const renderAcceptedLoadCard = (load: AcceptedLoadData) => (
        <View key={load.id} style={styles.loadCard}>
            {/* Pending Assignment Badge */}
            <View style={styles.statusBadge}>
                <Text style={styles.statusText}>Pending Assignment</Text>
            </View>

            {/* Load Details */}
            <View style={styles.loadInfo}>
                <Text style={styles.companyText}>{load.company}</Text>
                <Text style={styles.routeText}>{load.route}</Text>
                <Text style={styles.detailText}>Weight: {load.weight}</Text>
            </View>

            {/* Assign Driver Button */}
            <View style={styles.buttonsContainer}>
                <Pressable
                    style={styles.assignButton}
                    onPress={() => handleAssignDriver(load.id)}
                >
                    <LinearGradient
                        colors={["#223931", "#578C7A"]}
                        style={styles.buttonGradient}
                        start={{x: 0, y: 0}}
                        end={{x: 1, y: 1}}
                    >
                        <Text style={styles.buttonText}>Assign Driver</Text>
                    </LinearGradient>
                </Pressable>
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            {/* Tab Navigation */}
            <View style={styles.tabContainer}>
                <Pressable
                    style={styles.tabButton}
                    onPress={navigateToLoadRequests}
                >
                    <LoadRequestsIcon color="#578C7A" />
                    <Text style={styles.tabText}>Load Requests</Text>
                </Pressable>

                <View style={styles.activeTab}>
                    <LinearGradient
                        colors={["#223931", "#578C7A"]}
                        style={styles.activeTabGradient}
                        start={{x: 0, y: 0}}
                        end={{x: 1, y: 1}}
                    >
                        <ClipboardCheckIcon color="white" />
                        <Text style={styles.activeTabText}>Accepted Loads</Text>
                    </LinearGradient>
                </View>
            </View>

            {/* Content */}
            <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
                <View style={styles.loadsList}>
                    {acceptedLoads.map(renderAcceptedLoadCard)}
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8F9FA',
    },
    tabContainer: {
        flexDirection: 'row',
        marginHorizontal: 25,
        marginTop: 19,
        borderBottomWidth: 1,
        borderBottomColor: '#578C7A',
        width: 346,
    },
    tabButton: {
        flex: 1,
        minHeight: 40,
        paddingHorizontal: 12,
        paddingVertical: 8,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 8,
        borderTopLeftRadius: 7,
        borderTopRightRadius: 7,
    },
    activeTab: {
        width: 168,
        minHeight: 40,
        borderTopLeftRadius: 7,
        borderTopRightRadius: 7,
        overflow: 'hidden',
    },
    activeTabGradient: {
        flex: 1,
        paddingHorizontal: 12,
        paddingVertical: 8,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 8,
    },
    tabText: {
        color: '#578C7A',
        fontSize: 12,
        fontFamily: 'Inter-Medium',
        fontWeight: '500',
        lineHeight: 20,
        textAlignVertical: 'center',
        includeFontPadding: false,
    },
    activeTabText: {
        color: 'white',
        fontSize: 12,
        fontFamily: 'Inter-Medium',
        fontWeight: '500',
        lineHeight: 20,
        textAlignVertical: 'center',
        includeFontPadding: false,
    },
    content: {
        flex: 1,
        paddingHorizontal: 23,
        paddingTop: 20,
    },
    loadsList: {
        gap: 20,
        paddingBottom: 100,
    },
    loadCard: {
        padding: 15,
        backgroundColor: '#DAE8E3',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'rgba(59, 98, 85, 0.5)',
        position: 'relative',
    },
    statusBadge: {
        position: 'absolute',
        right: 10,
        top: 10,
        paddingHorizontal: 10,
        paddingVertical: 2,
        backgroundColor: '#FFCFC9',
        borderRadius: 100,
    },
    statusText: {
        color: '#B6100F',
        fontSize: 9,
        fontFamily: 'Inter-SemiBold',
        fontWeight: '600',
        lineHeight: 20,
        textAlignVertical: 'center',
        includeFontPadding: false,
    },
    loadInfo: {
        gap: 6,
        marginBottom: 16,
    },
    companyText: {
        color: '#5F5F5F',
        fontSize: 13,
        fontFamily: 'Poppins-Regular',
        fontWeight: '400',
        textAlignVertical: 'center',
        includeFontPadding: false,
    },
    routeText: {
        color: '#5F5F5F',
        fontSize: 11,
        fontFamily: 'Poppins-Regular',
        fontWeight: '400',
        textAlignVertical: 'center',
        includeFontPadding: false,
    },
    detailText: {
        color: '#5F5F5F',
        fontSize: 11,
        fontFamily: 'Poppins-Regular',
        fontWeight: '400',
        textAlignVertical: 'center',
        includeFontPadding: false,
    },
    buttonsContainer: {
        flexDirection: 'row',
        gap: 8,
    },
    assignButton: {
        flex: 1,
        height: 36,
        borderRadius: 8,
        overflow: 'hidden',
    },
    buttonGradient: {
        flex: 1,
        height: 36,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 12,
    },
    buttonText: {
        color: 'white',
        fontSize: 13,
        fontWeight: '600',
        textAlign: 'center',
        textAlignVertical: 'center',
        lineHeight: 18,
        includeFontPadding: false,
    },
});

export default AcceptedLoadsPage;