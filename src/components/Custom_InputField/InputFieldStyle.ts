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
    // padding: 10px;
    height: 3.5vmax;
    outline: none;

    input {
        border: 0;
        width: 100%;
        font-size: 16px;
        color: #555;
        height: 100%;
        outline: none;
        // height: 3.5vmax;
        // padding: 10px;

        
    }

    &:focus {
        border: 1px solid #aaa;
    }
`;

export { Inputcontainer };
