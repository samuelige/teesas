import styled from "styled-components";

const Inputcontainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
    border: none;
    border-radius: 4px;
    background: ${(props) => props.theme.colors.white};
    outline: none;

    input {
        border: 0;
        width: 100%;
        font-size: 16px;
        // color: #555;
        height: 4rem;
        outline: none;
    }

    svg {
        color: ${(props) => props.theme.colors.black};

    }

    &:focus {
        border: 1px solid #aaa;
    }

    @media screen and (max-width: 900px) {
        // padding: 2rem;
    }



`;

export { Inputcontainer };
