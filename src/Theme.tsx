import { ThemeProvider } from "styled-components";
import React, {ReactNode} from 'react';
import { url } from "inspector";

interface ThemeType {
    children: ReactNode
}

const theme = {
    colors: {
        yellowGreen: "#A2EE08",
        darkGreen: "#4CAF50",
        white: "#FFF",
        black: "#343a40",
        darkGrey: "#6c757d",
        lightGrey: "#b3aaaa",
        lightGreen: "linear-gradient(to bottom, #edffdf 0%, #d4ffcf 100%)"
    },
    fonts: ["Poppins"],
    
}

const Theme = ({ children } : ThemeType) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
)

export default Theme;