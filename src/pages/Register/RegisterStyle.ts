import styled from "styled-components";

const Container = styled.div`
    background: linear-gradient(to bottom, #7ed956 0%, #039525 100%);
    // height: 40vmax;
    padding: 1rem 2rem;
    border-radius: 0.8rem;


    h3{
        color: ${(props) => props.theme.colors.white};
        font-size: 1.2rem;
        text-align: center;
    }

    .phone-input {
        border: 1px solid #ccc;
        border-radius: 4px;
        
        width: 100%;
        font-size: 16px;
        color: #555;
        outline: none;
        height: 3.5vmax;
        padding: 10px;

        &:focus {
            border: 1px solid #aaa;
        }
    }

    .meta {
        margin-top: 1.5rem;
    }

    @media screen and (max-width: 900px) {
        width: 100%;
    }
`;

const Select = styled.div`
    text-align: center;
    margin: 0 0 0.9rem 0;
    line-height: 48px;

    label {
        color: ${(props) => props.theme.colors.white};
    }
`;

const Section = styled.section`
    margin-top: 0.7rem;
    h4{
        color: ${(props) => props.theme.colors.white};
        font-size: 0.9rem;
        font-weight: 500;
    }
`;

const FormSection = styled.section`
    margin-top: 0.7rem;
    padding-top: 1rem;
`;

const Footer = styled.footer`
    width: 60%;
    margin: 3rem auto;
    display: flex;

    div {
        width: 10%;
    }
`;

export { Container,Footer, Select, Section, FormSection };