import styled from "styled-components"
const NavbarContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem 1rem 4rem;
    background: linear-gradient(to right, #449603 0%, #9ad81d 100%);
    position: relative;
    

    @media screen and (max-width: 900px) {
        // padding: 1rem 0.5rem;
        padding: 0;
        overflow-x: scroll;
    }

    @media screen and (max-width: 550px) {
        padding: 0.5rem;
        
    }
`;

export { NavbarContainer };