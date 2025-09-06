import {StyleSheet} from "react-native";
import {
    Button, MainContainer, LinearGradientContainer, BackgroundImage,
    ButtonGradient, ButtonText, FormContainer,
    FormDescription, FormLogo, FormLogoContainer, FormLogoText, FormTitle, Row,
    DropDownContainer, DropDownLabel, DropDown, DropDownText, DropDownButton, DropDownList, DropDownItem,
    DropDownItemButton, DropDownListBlur, TextFieldError,
} from "../styles/ChooseRole.ts";
import DoubleChevronRightIcon from "../icons/DoubleChevronRightIcon.tsx";
import {ChevronDownIcon} from "lucide-react-native";
import {useState} from "react";
import {useNavigation} from "@react-navigation/native";
import {AuthStackNavigatorParamList} from "../navigators/AuthStackNavigator.tsx";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";

const ChooseRole = () => {
    const navigation = useNavigation<NativeStackNavigationProp<AuthStackNavigatorParamList>>();
    const [role, setRole] = useState<string | null>(null)
    const [error, setError] = useState<string | null>(null)
    const [showDropdown, setShowDropdown] = useState(false)
    const toggleDropdown = () => {
        setShowDropdown(!showDropdown)
    }
    const selectRole = (value: string) => {
        setRole(value)
        setShowDropdown(false)
    }

    const onSubmit = () => {
        if (!role) {
            setError("Please select a role")
            setTimeout(() => setError(null), 2000)
            return
        }
        navigation.navigate("Register", {role: role})
    }
    return (
        <MainContainer>
            <LinearGradientContainer colors={["#223931", "#406C5D", "#579983", "#C6E6DC", "#E6EDEC"]}>
                <BackgroundImage source={require("../assets/images/TruckingMobileBackground.jpg")}/>
            </LinearGradientContainer>

            <FormContainer style={styles["form-shadow"]}>
                <FormLogoContainer>
                    <FormLogo source={require("../assets/icons/LogoGreen.png")}/>
                    <FormLogoText>Ukaab</FormLogoText>
                </FormLogoContainer>

                <Row>
                    <FormTitle>Choose Your Role to Get Started</FormTitle>
                </Row>

                <FormDescription>Tell us how you want to use Ukaab so we can set up the right experience for
                    you.</FormDescription>

                <DropDownContainer>
                    <DropDownLabel>Role</DropDownLabel>
                    <DropDownButton onPress={() => toggleDropdown()}>
                        <DropDown>
                            <DropDownText>{!role ? "Select Role" : role}</DropDownText>
                            <ChevronDownIcon size={20} color="#3B6255"/>
                        </DropDown>
                    </DropDownButton>
                    {error && (<TextFieldError>{error}</TextFieldError>)}
                    <DropDownList visible={showDropdown}>
                        <DropDownListBlur/>
                        <DropDownItemButton onPress={() => selectRole("Driver")}>
                            <DropDownItem>
                                <DropDownText>Driver</DropDownText>
                            </DropDownItem>
                        </DropDownItemButton>
                        <DropDownButton onPress={() => selectRole("Company")}>
                            <DropDownItem>
                                <DropDownText>Company</DropDownText>
                            </DropDownItem>
                        </DropDownButton>
                        <DropDownItemButton onPress={() => selectRole("Shipper")}>
                            <DropDownItem>
                                <DropDownText>Shipper</DropDownText>
                            </DropDownItem>
                        </DropDownItemButton>
                    </DropDownList>
                </DropDownContainer>

                <Button onPress={onSubmit} useForeground={true}>
                    <ButtonGradient style={styles["button-drop-shadow"]}
                                    colors={["#578C7A", "#223931"]}>
                        <ButtonText>Next</ButtonText>
                        <DoubleChevronRightIcon size={16} color="#FFFFFF"/>
                    </ButtonGradient>
                </Button>
            </FormContainer>
        </MainContainer>
    )
}


const styles = StyleSheet.create({
    "form-shadow": {
        boxShadow: "0px 8px 24px #17171788"
    },
    "button-drop-shadow": {
        boxShadow: "0px 6px 12px #0000003B"
    },
    "row-text-field-container": {
        flex: 1
    },
    "drop-down-list-blur": {
        filter: "blur(18px)",
    }
})


export default ChooseRole;