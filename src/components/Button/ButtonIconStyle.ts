import styled from "styled-components";

const Container = styled.button`
    width: 100%;
    padding: 0.5rem 1rem;
    text-align: center;
    background: ${(props: any) => props.theme.colors.darkGreen};
    border: 0;
    border-radius: 10px;
`;

export { Container };