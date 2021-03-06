import styled from "styled-components";

const Container = styled.button`
    width: 100%;
    padding: 0.5rem 1rem;
    text-align: center;
    background: ${(props) => props.theme.colors.darkGreen};
    border: 0;
    border-radius: 10px;
    cursor: pointer;
    font-size: 1rem;

    &:hover {
        background: ${(props) => props.theme.colors.black};
    }
`;

export { Container };