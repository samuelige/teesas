import { createGlobalStyle } from "styled-components";

const GobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ${(props: any) => props.theme.fonts[0]};
  }`;

export default GobalStyle;