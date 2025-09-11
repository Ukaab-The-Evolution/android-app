import React, { useState } from "react";
import {
    View,
    Pressable,
    StyleSheet,
} from "react-native";
import LoadRequestsPage from "../screens/LoadRequestsPage";
import AcceptedLoadsPage from "../screens/AcceptedLoadsPage";

const LoadsNavigator = () => {
    const [activeTab, setActiveTab] = useState<'requests' | 'accepted'>('requests');

    return (
        <View style={styles.container}>
            {activeTab === 'requests' ? (
                <LoadRequestsPage onSwitchToAccepted={() => setActiveTab('accepted')} />
            ) : (
                <AcceptedLoadsPage onSwitchToRequests={() => setActiveTab('requests')} />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default LoadsNavigator;
