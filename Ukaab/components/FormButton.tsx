import BasicSpinner from "./BasicSpinner.tsx";
import CheckIcon from "../icons/CheckIcon.tsx";
import {X} from "lucide-react-native";
import PrimaryButton from "./PrimaryButton.tsx";
import {TouchableNativeFeedbackProps} from "react-native";

interface FormButtonProps extends TouchableNativeFeedbackProps {
    status: "Successful" | "Failed" | null
    title: string
    isSubmitting: boolean
}

const FormButton = ({isSubmitting, status, title, ...props}: FormButtonProps) => {
    return (
        <PrimaryButton title={title} disabled={isSubmitting || status != null} {...props} >
            {isSubmitting ? (
                <BasicSpinner color="white" size={20}/>
            ) : status === "Successful" ? (
                <CheckIcon color="white" size={18}/>
            ) : status === "Failed" ? (
                <X color="white" size={18}/>
            ) : null}
        </PrimaryButton>
    )
}

export default FormButton;