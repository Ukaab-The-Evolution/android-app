import {
    Container, ButtonText, ButtonGradient, Title, SubTitle, FileUploadButton,
    FileUploadIcon, FileUploadButtonText, FileUploaderContainer, FileUploaderLabel, ScrollContainer
} from "../styles/TruckDocument.ts"
import {StyleSheet, TouchableNativeFeedback} from "react-native";
import DoubleChevronRightIcon from "../icons/DoubleChevronRightIcon.tsx";
import * as React from "react";


const TruckDocument = () => {
    return (
        <ScrollContainer>
            <Container>
                <Title>Upload</Title>
                <SubTitle>Smart Card Pictures</SubTitle>
                <FileUploaderContainer>
                    <FileUploaderLabel>
                        Front
                    </FileUploaderLabel>
                    <FileUploadButton>
                        <FileUploadIcon source={require('../assets/icons/UploadCloud.png')}/>
                        <FileUploadButtonText>
                            Pdf/png/jpg size {"<"} 20
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
                            Pdf/png/jpg size {"<"} 20
                        </FileUploadButtonText>
                    </FileUploadButton>
                </FileUploaderContainer>
                <SubTitle>Truck Pictures</SubTitle>

                <FileUploaderContainer>
                    <FileUploaderLabel>
                        Front
                    </FileUploaderLabel>
                    <FileUploadButton>
                        <FileUploadIcon source={require('../assets/icons/UploadCloud.png')}/>
                        <FileUploadButtonText>
                            Pdf/png/jpg size {"<"} 20
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
                            Pdf/png/jpg size {"<"} 20
                        </FileUploadButtonText>
                    </FileUploadButton>
                </FileUploaderContainer>
                <FileUploaderContainer>
                    <FileUploaderLabel>
                        Left
                    </FileUploaderLabel>
                    <FileUploadButton>
                        <FileUploadIcon source={require('../assets/icons/UploadCloud.png')}/>
                        <FileUploadButtonText>
                            Pdf/png/jpg size {"<"} 20
                        </FileUploadButtonText>
                    </FileUploadButton>
                </FileUploaderContainer>
                <FileUploaderContainer>
                    <FileUploaderLabel>
                        Right
                    </FileUploaderLabel>
                    <FileUploadButton>
                        <FileUploadIcon source={require('../assets/icons/UploadCloud.png')}/>
                        <FileUploadButtonText>
                            Pdf/png/jpg size {"<"} 20
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
        </ScrollContainer>
    );
}

const styles = StyleSheet.create({
    "button-drop-shadow": {
        boxShadow: "0px 6px 12px #0000003B"
    }
})


export default TruckDocument;