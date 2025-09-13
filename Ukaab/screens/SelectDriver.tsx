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

interface DriverData {
    id: string;
    name: string;
    driverId: string;
    avatar?: string;
}

const SelectDriver = () => {
    const navigation = useNavigation();
    const [activeTab, setActiveTab] = useState('Driver');

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

    // Avatar image imports
    const avatarImages = {
        'Avatar-1.png': require('../assets/avatars/Avatar-1.png'),
        'Avatar-2.png': require('../assets/avatars/Avatar-2.png'),
        'Avatar-3.png': require('../assets/avatars/Avatar-3.png'),
        'Avatar-4.png': require('../assets/avatars/Avatar-4.png'),
        'Avatar-5.png': require('../assets/avatars/Avatar-5.png'),
        'Avatar-6.png': require('../assets/avatars/Avatar-1.png'), // Use Avatar-1 as Avatar-6 since it doesn't exist
    };

    // Sample driver data with explicit avatar assignments
    const drivers: DriverData[] = [
        {
            id: '1001',
            name: "Abdur Rehman",
            driverId: '2001',
            avatar: 'Avatar-1.png'
        },
        {
            id: '1002',
            name: "Muhammad Ali",
            driverId: '2002',
            avatar: 'Avatar-2.png'
        },
        {
            id: '1003',
            name: "Ahmed Khan",
            driverId: '2003',
            avatar: 'Avatar-3.png'
        },
        {
            id: '1004',
            name: "Hassan Shah",
            driverId: '2004',
            avatar: 'Avatar-4.png'
        },
        {
            id: '1005',
            name: "Omar Farooq",
            driverId: '2005',
            avatar: 'Avatar-5.png'
        },
        {
            id: '1006',
            name: "Tariq Mahmood",
            driverId: '2006',
            avatar: 'Avatar-1.png'
        }
    ];

    const handleConfirm = () => {
        navigation.goBack();
    };

    const navigateToTruck = () => {
        setActiveTab('Truck');
        // Navigate to Trucks tab first, then to SelectTruck
    const getAvatarSource = (avatarKey: string) => {
        switch (avatarKey) {
            case 'avatar1': return avatar1;
            case 'avatar2': return avatar2;
            case 'avatar3': return avatar3;
            case 'avatar4': return avatar4;
            case 'avatar5': return avatar5;
            default: return avatar1;
        }
    };

        navigation.navigate('Trucks', { screen: 'SelectTruck' });
    };

                {/* Use direct avatar import */}
        <Pressable key={driver.id} style={styles.driverCard}>
                    source={getAvatarSource(driver.avatar || 'avatar1')}
                {/* Use actual avatar image */}
                <Image
                    source={avatarImages[driver.avatar as keyof typeof avatarImages]}
                    style={styles.avatarImage}
                    resizeMode="cover"
                />
            </View>
            <View style={styles.driverInfo}>
                <Text style={styles.driverName}>{driver.name}</Text>
                <Text style={styles.driverId}>ID: {driver.driverId}</Text>
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
                        <Pressable style={styles.inactiveTab} onPress={navigateToTruck}>
                            <TruckIcon color="#578C7A" />
                            <Text style={styles.inactiveTabText}>Truck</Text>
                        </Pressable>

                        <View style={styles.activeTab}>
                            <LinearGradient
                                colors={["#223931", "#578C7A"]}
                                style={styles.activeTabGradient}
                                start={{x: 0, y: 0}}
                                end={{x: 0, y: 1}}
                            >
                                <DriverIcon color="white" />
                                <Text style={styles.activeTabText}>Driver</Text>
                            </LinearGradient>
                        </View>
                    </View>

                    {/* Filter */}
                    <View style={styles.filterContainer}>
                        <Text style={styles.filterText}>In City</Text>
                    </View>
                </View>

                {/* Driver Grid */}
                <View style={styles.driversGrid}>
                    {/* First Row */}
                    <View style={styles.driverRow}>
                        {drivers.slice(0, 3).map(renderDriverCard)}
                    </View>

                    {/* Second Row */}
                    <View style={styles.driverRow}>
                        {drivers.slice(3, 6).map(renderDriverCard)}
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
    driversGrid: {
        gap: 28,
        marginBottom: 28,
    },
    driverRow: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-end',
        gap: 6,
    },
    driverCard: {
        alignItems: 'center',
        gap: 4,
    },
    driverImageContainer: {
        width: 80,
        height: 80,
        backgroundColor: 'white',
        borderRadius: 40,
        padding: 4,
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
        borderWidth: 1,
        borderColor: '#E5E7EB',
    },
    avatarImage: {
        width: '100%',
        height: '100%',
        borderRadius: 36,
    },
    driverInfo: {
        alignItems: 'center',
        gap: 2,
    },
    driverName: {
        color: '#223931',
        fontSize: 12,
        fontFamily: 'Poppins-Bold',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    driverId: {
        color: '#5F5F5F',
        fontSize: 11,
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

export default SelectDriver;