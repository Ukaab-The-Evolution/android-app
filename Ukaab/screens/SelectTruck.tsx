import React, { useState } from 'react';
import {
    View,
    Text,
    Pressable,
    StyleSheet,
    ScrollView,
    Image,
    StatusBar,
    SafeAreaView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import Svg, { Path } from 'react-native-svg';

interface TruckData {
    id: string;
    name: string;
    capacity: string;
    plateNumber: string;
}

const SelectTruck = () => {
    const navigation = useNavigation();
    const [activeTab, setActiveTab] = useState('Truck');

    // Truck Icon Component
    const TruckIcon = ({ color }: { color: string }) => (
        <Svg width="36" height="36" viewBox="0 0 24 24" fill="none">
            <Path
                d="M1 3h15v13H1V3zm16 5h4l2 2v6h-6V8z"
                stroke={color}
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Path
                d="M16 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
                stroke={color}
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Path
                d="M7 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
                stroke={color}
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    );

    // Driver Icon Component
    const DriverIcon = ({ color }: { color: string }) => (
        <Svg width="36" height="36" viewBox="0 0 24 24" fill="none">
            <Path
                d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
                stroke={color}
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Path
                d="M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"
                stroke={color}
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    );

    // Sample truck data
    const truckNames = [
        "Volvo FH16", "Scania R500", "Mercedes Actros", "MAN TGX", "DAF XF",
        "Kenworth W990", "Peterbilt 579", "Freightliner Cascadia", "Mack Anthem", "International LT",
        "Volvo VNL", "Western Star 5700", "Isuzu Giga", "Hino Profia", "Fuso Super Great"
    ];

    const trucks: TruckData[] = Array.from({ length: 6 }, (_, i) => ({
        id: Math.floor(1000 + Math.random() * 9000).toString(),
        name: truckNames[i] || "Nisan Deasil",
        capacity: Math.floor(10000 + Math.random() * 50000).toString(),
        plateNumber: `NNH-${Math.floor(1000 + Math.random() * 9000)}`,
    }));

    const handleConfirm = () => {
        navigation.goBack();
    };

    const navigateToDriver = () => {
        setActiveTab('Driver');
        // Navigate to Drivers tab first, then to SelectDriver
        navigation.navigate('Drivers', { screen: 'SelectDriver' });
    };

    const renderTruckCard = (truck: TruckData) => (
        <Pressable key={truck.id} style={styles.truckCard}>
            <View style={styles.truckImageContainer}>
                <Image
                    source={require("../assets/trucks/Nisan-Deasil.png")}
                    style={styles.truckImage}
                    resizeMode="contain"
                />
            </View>
            <View style={styles.truckInfo}>
                <Text style={styles.truckName}>{truck.name}</Text>
                <Text style={styles.truckPlate}>{truck.plateNumber}</Text>
                <Text style={styles.truckCapacity}>Capacity {truck.capacity}kg</Text>
            </View>
        </Pressable>
    );

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="#F8F9FA" />

            <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
                {/* Title */}
                <Text style={styles.title}>Select</Text>

                {/* Tabs and Filter */}
                <View style={styles.tabSection}>
                    {/* Tab Navigation */}
                    <View style={styles.tabContainer}>
                        <View style={styles.activeTab}>
                            <LinearGradient
                                colors={["#223931", "#578C7A"]}
                                style={styles.activeTabGradient}
                                start={{x: 0, y: 0}}
                                end={{x: 0, y: 1}}
                            >
                                <TruckIcon color="white" />
                                <Text style={styles.activeTabText}>Truck</Text>
                            </LinearGradient>
                        </View>

                        <Pressable style={styles.inactiveTab} onPress={navigateToDriver}>
                            <DriverIcon color="#578C7A" />
                            <Text style={styles.inactiveTabText}>Driver</Text>
                        </Pressable>
                    </View>

                    {/* Filter */}
                    <View style={styles.filterContainer}>
                        <Text style={styles.filterText}>In City</Text>
                    </View>
                </View>

                {/* Truck Grid */}
                <View style={styles.trucksGrid}>
                    {/* First Row */}
                    <View style={styles.truckRow}>
                        {trucks.slice(0, 3).map(renderTruckCard)}
                    </View>

                    {/* Second Row */}
                    <View style={styles.truckRow}>
                        {trucks.slice(3, 6).map(renderTruckCard)}
                    </View>
                </View>

                {/* Confirm Button */}
                <Pressable style={styles.confirmButton} onPress={handleConfirm}>
                    <LinearGradient
                        colors={["#223931", "#578C7A"]}
                        style={styles.confirmButtonGradient}
                        start={{x: 0, y: 0}}
                        end={{x: 1, y: 1}}
                    >
                        <Text style={styles.confirmButtonText}>Confirm</Text>
                    </LinearGradient>
                </Pressable>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8F9FA',
    },
    content: {
        flex: 1,
        paddingHorizontal: 16,
        paddingVertical: 24,
    },
    title: {
        textAlign: 'center',
        color: '#223931',
        fontSize: 24,
        fontFamily: 'Poppins-Bold',
        fontWeight: 'bold',
        marginBottom: 28,
    },
    tabSection: {
        gap: 12,
        marginBottom: 28,
    },
    tabContainer: {
        width: '100%',
        borderBottomWidth: 1,
        borderBottomColor: '#578C7A',
        flexDirection: 'row',
    },
    activeTab: {
        flex: 1,
        minHeight: 40,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
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
    inactiveTab: {
        width: 168,
        minHeight: 40,
        paddingHorizontal: 12,
        paddingVertical: 8,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 4,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
    },
    activeTabText: {
        color: 'white',
        fontSize: 12,
        fontFamily: 'Inter-Medium',
        fontWeight: '500',
    },
    inactiveTabText: {
        color: '#578C7A',
        fontSize: 12,
        fontFamily: 'Inter-Medium',
        fontWeight: '500',
    },
    filterContainer: {
        width: '100%',
        height: 36,
        backgroundColor: '#D4E6E0',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#223931',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    filterText: {
        color: '#223931',
        fontSize: 14,
        fontFamily: 'Poppins-Regular',
        fontWeight: '400',
    },
    trucksGrid: {
        gap: 28,
        marginBottom: 28,
    },
    truckRow: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-end',
        gap: 6,
    },
    truckCard: {
        alignItems: 'center',
        gap: 4,
    },
    truckImageContainer: {
        width: 130,
        height: 110,
        backgroundColor: 'white',
        borderRadius: 8,
        padding: 8,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    truckImage: {
        width: 88,
        height: 100,
    },
    truckInfo: {
        alignItems: 'center',
        gap: 2,
    },
    truckName: {
        color: '#223931',
        fontSize: 12,
        fontFamily: 'Poppins-Bold',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    truckPlate: {
        color: '#5F5F5F',
        fontSize: 12,
        fontFamily: 'Poppins-Medium',
        fontWeight: '500',
    },
    truckCapacity: {
        color: '#5F5F5F',
        fontSize: 12,
        fontFamily: 'Poppins-Medium',
        fontWeight: '500',
    },
    confirmButton: {
        width: '100%',
        borderRadius: 8,
        overflow: 'hidden',
        marginTop: 20,
    },
    confirmButtonGradient: {
        paddingHorizontal: 24,
        paddingVertical: 4,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.25,
        shadowRadius: 12,
        elevation: 6,
    },
    confirmButtonText: {
        color: 'white',
        fontSize: 16,
        fontFamily: 'Poppins-SemiBold',
        fontWeight: '600',
    },
});

export default SelectTruck;
