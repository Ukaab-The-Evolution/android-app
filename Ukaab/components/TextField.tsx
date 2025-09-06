import {Container, Label, Input, Error, TextInput} from "../styles/TextField.ts";
import {TextInputProps} from "react-native";
import {ReactNode} from "react";

export interface TextFieldProps extends TextInputProps {
    error?: string | null;
    label?: string | null;
    rightIcon?: ReactNode;
}

const TextField = ({error, label, rightIcon, style, ...props}: TextFieldProps) => {
    return <Container style={style}>
        {label && <Label>{label}</Label>}
        <Input>
            <TextInput {...props}/>
            {rightIcon}
        </Input>
        {error && (
            <Error>{error}</Error>
        )}
    </Container>
}


export default TextField;