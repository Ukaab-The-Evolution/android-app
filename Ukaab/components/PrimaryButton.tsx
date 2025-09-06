import {Button, Gradient, Text} from "../styles/PrimaryButton.ts";

import {StyleSheet, TouchableNativeFeedbackProps} from "react-native";
import {ReactNode} from "react";

interface PrimaryButtonProps extends TouchableNativeFeedbackProps {
    title: string;
    children?: ReactNode;
}

const PrimaryButton = ({title, children, style, disabled, ...props}: PrimaryButtonProps) => {
    return (
        <Button disabled={disabled} {...props} useForeground={true}>
            <Gradient disabled={disabled} style={[styles["button-drop-shadow"], style]} colors={["#578C7A", "#223931"]}>
                {children ?? <Text>{title}</Text>}
            </Gradient>
        </Button>
    )
}

const styles = StyleSheet.create({
    "button-drop-shadow": {
        boxShadow: "0px 6px 12px #0000003B"
    },
})

export default PrimaryButton;