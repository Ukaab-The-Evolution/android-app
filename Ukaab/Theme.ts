/* Fonts */
import {DefaultTheme} from "styled-components";

export const Theme = {
    palette: {
        primary: "#3B6255",
        secondary: "#578C7A",
        white: "#FFFFFF",
        black: "#333333",
        danger: "#EB0C0C",
        gray: {
            light: "#A3A3A3",
            dark: "#7B7F8D",
        }
    },
    fonts: {
        montserratMedium: "Montserrat-Medium",
        poppinsMedium: "Poppins-Medium",
        radleyRegular: "Radley-Regular",
        interRegular: "Inter-Regular",
        interBold: "Inter-Bold",
        interSemiBold: "Inter-SemiBold",
        interMedium: "Inter-Medium",
        poppinsRegular: "Poppins-Regular",
        poppinsSemiBold: "Poppins-SemiBold",
        poppinsBold: "Poppins-Bold",
        fontFamilySans: "Inter",
    }
} as const;

export default Theme;