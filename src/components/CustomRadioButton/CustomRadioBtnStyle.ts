import styled from "styled-components";

const LabelContainer = styled.label`
    font-size: 1rem;
    width: 100%;
    color: ${(props) => props.theme.colors.white};
    

    input {
        display: none;
    }

    span {
        margin: 0.5rem 0.5rem;
        padding: 0.3rem;
        width: auto;
        border: 1px solid ${(props) => props.theme.colors.white};
        display: inline-block;
        border-radius: 8px;
        position: relative;
        text-align: center;
        cursor: pointer;
        background: transparent;
    }

    input:checked + span {
        background: ${(props) => props.theme.colors.white};
        color: ${(props) => props.theme.colors.black};
    }
`;


export { LabelContainer };