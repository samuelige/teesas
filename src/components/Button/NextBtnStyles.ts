import styled from "styled-components";

const Container = styled.button`
    width: 100%;
    padding: 0.5rem 1rem;
    outline: none;
    text-align: center;
    background: ${(props) => props.theme.colors.lightGrey};
    border: 1px solid ${(props) => props.theme.colors.white};
    border-radius: 10px;
    cursor: pointer;
    font-size: 1rem;
    color: ${(props) => props.theme.colors.white};

    &:hover {
        background: ${(props) => props.theme.colors.black};
    }
`;

export { Container };