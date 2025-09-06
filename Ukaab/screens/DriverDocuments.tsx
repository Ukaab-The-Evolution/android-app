import {
    Container, ButtonText, ButtonGradient, Title, SubTitle, FileUploadButton,
    FileUploadIcon, FileUploadButtonText, FileUploaderContainer, FileUploaderLabel,
    FileUploadButtonTouchableNativeFeedback
} from "../styles/DriverDocuments.ts"
import {StyleSheet, TouchableNativeFeedback} from "react-native";
import DoubleChevronRightIcon from "../icons/DoubleChevronRightIcon.tsx";
import * as React from "react";
import {launchImageLibrary} from "react-native-image-picker";


const DriverDocuments = () => {
    const selectCNICFrontImage = async () => {
        try {
            const result = await launchImageLibrary({
                mediaType: "photo"
            });
            console.log(result);
        }
        catch (error) {
            return
        }
    }
    return (
        <Container>
            <Title>Upload</Title>
            <SubTitle>CNIC Card Pictures</SubTitle>
            <FileUploaderContainer>
                <FileUploaderLabel>
                    Front
                </FileUploaderLabel>
                <FileUploadButtonTouchableNativeFeedback onPress={selectCNICFrontImage}>
                    <FileUploadButton>
                        <FileUploadIcon source={require('../assets/icons/UploadCloud.png')}/>
                        <FileUploadButtonText>
                            Pdf/png/jpg size
                        </FileUploadButtonText>
                    </FileUploadButton>
                </FileUploadButtonTouchableNativeFeedback>
            </FileUploaderContainer>
            <FileUploaderContainer>
                <FileUploaderLabel>
                    Back
                </FileUploaderLabel>
                <FileUploadButton>
                    <FileUploadIcon source={require('../assets/icons/UploadCloud.png')}/>
                    <FileUploadButtonText>
                        Pdf/png/jpg size
                    </FileUploadButtonText>
                </FileUploadButton>
            </FileUploaderContainer>
            <SubTitle>Driver License Pictures</SubTitle>

            <FileUploaderContainer>
                <FileUploaderLabel>
                    Front
                </FileUploaderLabel>
                <FileUploadButton>
                    <FileUploadIcon source={require('../assets/icons/UploadCloud.png')}/>
                    <FileUploadButtonText>
                        Pdf/png/jpg size
                    </FileUploadButtonText>
                </FileUploadButton>
            </FileUploaderContainer>
            <FileUploaderContainer>
                <FileUploaderLabel>
                    Back
                </FileUploaderLabel>
                <FileUploadButton>
                    <FileUploadIcon source={require('../assets/icons/UploadCloud.png')}/>
                    <FileUploadButtonText>
                        Pdf/png/jpg size
                    </FileUploadButtonText>
                </FileUploadButton>
            </FileUploaderContainer>

            <TouchableNativeFeedback useForeground={true}>
                <ButtonGradient style={styles["button-drop-shadow"]} colors={["#578C7A", "#223931"]}>
                    <ButtonText>Next</ButtonText>
                    <DoubleChevronRightIcon size={18} color="#FFFFFF"/>
                </ButtonGradient>
            </TouchableNativeFeedback>
        </Container>
    );
}

const styles = StyleSheet.create({
    "button-drop-shadow": {
        boxShadow: "0px 6px 12px #0000003B"
    }
})

export default DriverDocuments;