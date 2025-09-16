import * as React from "react";
import {
    ScrollView,
    Platform,
    KeyboardAvoidingView, TouchableNativeFeedback,
    StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
    Container,
    EditIcon,
    EditProfilePhotoButton, Label,
    ProfilePhotoContainer,
    ColumnContainer, SubTitle, TextField, TextFieldContainer, SocialIcon, ProfilePhotoImage
} from "../styles/About.ts";
import {useCompany} from "../providers/CompanyProvider.tsx";
import {useAyanAuth} from "../providers/AyanAuthProvider.tsx";
import {useEffect, useState} from "react";
import PrimaryButton from "../components/PrimaryButton.tsx";
import {StackScreenProps} from "@react-navigation/stack";
import {AboutStackNavigatorParamList} from "../navigators/AboutStackNavigator.tsx";

type AboutProps = StackScreenProps<AboutStackNavigatorParamList, "Details">

const About = ({navigation}: AboutProps) => {
    const companyProvider = useCompany()
    const authProvider = useAyanAuth()
    const [details, setDetails] = useState<any | null>(null)

    useEffect(() => {
        if(authProvider?.token){
            companyProvider?.fetchDetails(authProvider.token).then((data) => {
                setDetails(data)
            })
            console.log("Details", details)
        }
    }, [authProvider?.token, companyProvider, details])
    return (
        <SafeAreaView>
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : undefined}
            >
                <ScrollView style={{height: "100%"}}>
                    <Container>
                        <ProfilePhotoContainer>
                            <ProfilePhotoImage source={require("../assets/avatars/Avatar-1.png")}/>
                            <TouchableNativeFeedback useForeground={true}>
                                <EditProfilePhotoButton>
                                    <EditIcon source={require('../assets/icons/Pen.png')} />
                                </EditProfilePhotoButton>
                            </TouchableNativeFeedback>
                        </ProfilePhotoContainer>
                        <SubTitle>Company Information</SubTitle>
                        <TextFieldContainer>
                            <Label>Company Name</Label>
                            <TextField placeholderTextColor="#3B6255" placeholder="Company Name" />
                        </TextFieldContainer>
                        <TextFieldContainer>
                            <Label>Year Established</Label>
                            <TextField placeholderTextColor="#3B6255" placeholder="Year Established" />
                        </TextFieldContainer>
                        <TextFieldContainer>
                            <Label>Address</Label>
                            <TextField placeholderTextColor="#3B6255" placeholder="Address" />
                        </TextFieldContainer>
                        <ColumnContainer>
                            <TextFieldContainer style={{width: "50%", paddingRight: 8}}>
                                <Label>Contact No</Label>
                                <TextField placeholderTextColor="#3B6255" placeholder="+XX XXX XXXXX XX" />
                            </TextFieldContainer>
                            <TextFieldContainer style={{width: "50%", paddingLeft: 8}}>
                                <Label>Email</Label>
                                <TextField placeholderTextColor="#3B6255" placeholder="example@gmail.com" />
                            </TextFieldContainer>
                        </ColumnContainer>
                        <TextFieldContainer>
                            <Label>Website</Label>
                            <TextField placeholderTextColor="#3B6255" placeholder="https://example@site.com" />
                        </TextFieldContainer>

                        <SubTitle>Socials</SubTitle>
                        <TextFieldContainer style={{flexDirection: "row",alignItems: "center", width: "auto"}}>
                            <SocialIcon source={require('../assets/icons/Instagram.png')} />
                            <TextField style={styles["flex-1"]} placeholderTextColor="#3B6255" placeholder="alpha.com" />
                        </TextFieldContainer>
                        <TextFieldContainer style={{flexDirection: "row",alignItems: "center", width: "auto"}}>
                            <SocialIcon source={require('../assets/icons/FaceBook.png')} />
                            <TextField style={styles["flex-1"]} placeholderTextColor="#3B6255" placeholder="alpha.com" />
                        </TextFieldContainer>
                        <TextFieldContainer style={{flexDirection: "row",alignItems: "center", width: "auto"}}>
                            <SocialIcon source={require('../assets/icons/X.png')} />
                            <TextField style={styles["flex-1"]} placeholderTextColor="#3B6255" placeholder="alpha.com" />
                        </TextFieldContainer>

                        <PrimaryButton style={styles["w-full"]} onPress={() => navigation.navigate("Upload CNIC")} title="Upload CNIC"/>
                    </Container>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    "flex-1": {
        flex: 1,
    },
    "w-full": {
        width: "100%",
    }
})

export default About;
