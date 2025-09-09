import {TextInputProps, TouchableNativeFeedback} from "react-native";
import EyeIcon from "../icons/EyeIcon.tsx";
import TextField from "./TextField.tsx";
import {useState} from "react";
import styled from "styled-components/native";


const ToggleIconButtonContainer = styled.View`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px 14px;
    border-left-width: 1px;
    border-left-color: #CFD9E0;

`

interface PasswordInputProps extends TextInputProps {
    error?: string | null
    label?: string
}

const ToggleIconButton = ({onPress}: {onPress?: () => void}) => {
    return <TouchableNativeFeedback onPress={onPress} useForeground={true}>
        <ToggleIconButtonContainer>
            <EyeIcon color="#718096" size={18}/>
        </ToggleIconButtonContainer>
    </TouchableNativeFeedback>;
}

const PasswordInput = ({error, label, ...props}: PasswordInputProps) => {
    const [visible, setVisible] = useState(false)
    const toggleVisibility = () => {
        setVisible(!visible)
    }

    return <TextField error={error} secureTextEntry={visible} label={label || "Password"} {...props}
                      placeholder="Enter your password" rightIcon={<ToggleIconButton onPress={toggleVisibility} />}/>
}

export default PasswordInput;