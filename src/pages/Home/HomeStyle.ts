import styled from "styled-components";

const Container = styled.div`
    padding: 9rem 3rem 4rem 6rem;
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 900px) {
        padding: 6rem 1rem 2rem 1rem;
        flex-direction: column-reverse;
    }


`;

const ContentContainer = styled.aside`
    width: 60%;

    h1 {
        font-size: 1.6rem;
        font-weight: 800;
    }

    ul {
        list-style: none;
    }

    @media screen and (max-width: 900px) {
        width: 100%;
        margin-top: 2.5rem;
    }

    @media screen and (max-width: 550px) {
        h1 {
            font-size: 1.2rem;
        }
    }
`;

const FormsContainer = styled.aside`
    width: 40%;

    @media screen and (max-width: 900px) {
        width: 80%;
        display: flex;
        margin: 0 auto;
        
    }

    @media screen and (max-width: 550px) {
        width: 100%;
    }
`;

export { Container, ContentContainer, FormsContainer };
