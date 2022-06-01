import { ThemeProvider } from "styled-components";
import React, {ReactNode} from 'react';

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
    },
    fonts: ["Poppins"],
    
}

const Theme = ({ children } : ThemeType) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
)

export default Theme;