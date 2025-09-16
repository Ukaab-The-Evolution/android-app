import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoadRequestsPage from "../screens/LoadRequestsPage";
import AcceptedLoadsPage from "../screens/AcceptedLoadsPage";
import DetailedView from "../screens/DetailedView";
import UploadCompletionProof from "../screens/UploadCompletionProof.tsx";
import UploadPickUpProof from "../screens/UploadPickUpProof.tsx";

export type LoadsNavigatorParamsList = {
    "LoadRequests"?: never
    "AcceptedLoads"?: never
    "DetailedView"?: never
    "Upload Completion Proof"?: never
    "Upload PickUp Proof"?: never
}

const Navigator = createNativeStackNavigator<LoadsNavigatorParamsList>();

const LoadsNavigator = () => {
    return (
        <Navigator.Navigator screenOptions={{ headerShown: false }}>
            <Navigator.Screen name="LoadRequests" component={LoadRequestsPage} />
            <Navigator.Screen name="AcceptedLoads" component={AcceptedLoadsPage} />
            <Navigator.Screen name="DetailedView" component={DetailedView} />
            <Navigator.Screen name="Upload Completion Proof" component={UploadCompletionProof} />
            <Navigator.Screen name="Upload PickUp Proof" component={UploadPickUpProof} />

        </Navigator.Navigator>
    );
};

export default LoadsNavigator;
