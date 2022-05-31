import { ThemeProvider } from "styled-components";
import React, {ReactNode} from 'react';

interface ThemeType {
    children: ReactNode
}

const theme = {
    colors: {
        yellowGreen: "#A2EE08",
        
    },
    fonts: ["Poppins"],
    
}

const Theme = ({ children } : ThemeType) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
)

export default Theme;