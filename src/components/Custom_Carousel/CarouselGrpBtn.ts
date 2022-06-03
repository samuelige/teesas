import styled from "styled-components";

const CarouselGrpBtnStyle = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
    margin-bottom: 1rem;

    button {
        width: 2rem;
        height: 2rem;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        background: ${props => props.theme.colors.darkGreen};
        outline: none;
        color: ${props => props.theme.colors.white};
        border: 1px solid var(--black-color);


        svg {
            font-size: 1.5rem;
            color: var(--black-color);
        }
    }

    div {
        width: 12px;
    }
`;


export { CarouselGrpBtnStyle };