import styled from "styled-components";

const Container = styled.li`
    display: flex;
    margin-top: 2rem;
    width: 100%;

    @media screen and (max-width: 550px) {
        align-items: center;
    }
    
`;

const ImageContainer = styled.div`
    width: 11%;

    img {
        width: 100%;
        object-fit: fill;
    }

    @media screen and (max-width: 900px) {
        width: 12%;
    }

    @media screen and (max-width: 550px) {
        width: 24%;
    }

    
`;

const TextContainer = styled.div`
    position: relative;
    width: 100%;
    margin-left: 0.8rem;
    

    h5 {
        font-size: 1rem;
        position: absolute;
        width: 100%;
        top: 3px;
        font-weight: 800;
    }
    p {
        font-size: 0.8rem;
        position: absolute;
        bottom: 10px;
    }

    @media screen and (max-width: 550px) {
        h5, p {
            position: relative;
        }

        h5 {
            top: 0;

        }

        p {
            bottom: 0;
            margin-top: 0.5rem;
        }
    }
`;

export { Container, ImageContainer, TextContainer };