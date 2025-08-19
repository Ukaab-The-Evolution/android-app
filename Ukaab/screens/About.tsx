import * as React from "react";
import {
    ScrollView,
    Image,
    View,
    Text,
    TextInput,
    Platform,
    KeyboardAvoidingView, TouchableNativeFeedback,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
    Container,
    EditIcon,
    EditProfilePhotoButton, Label,
    ProfilePhotoContainer,
    ProfilePhotoPlaceholder, ColumnContainer, SubTitle, TextField, TextFieldContainer, SocialIcon, ProfilePhotoImage
} from "../styles/About.ts";
import {useTheme} from "styled-components";

const About = () => {
    const theme = useTheme();
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
                            <TextField style={{flex: 1}} placeholderTextColor="#3B6255" placeholder="alpha.com" />
                        </TextFieldContainer>
                        <TextFieldContainer style={{flexDirection: "row",alignItems: "center", width: "auto"}}>
                            <SocialIcon source={require('../assets/icons/FaceBook.png')} />
                            <TextField style={{flex: 1}} placeholderTextColor="#3B6255" placeholder="alpha.com" />
                        </TextFieldContainer>
                        <TextFieldContainer style={{flexDirection: "row",alignItems: "center", width: "auto"}}>
                            <SocialIcon source={require('../assets/icons/X.png')} />
                            <TextField style={{flex: 1}} placeholderTextColor="#3B6255" placeholder="alpha.com" />
                        </TextFieldContainer>
                    </Container>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

export default About;
