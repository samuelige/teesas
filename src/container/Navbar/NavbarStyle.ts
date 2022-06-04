import styled from "styled-components"
const NavbarContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem 1rem 4rem;
    background: linear-gradient(to right, #449603 0%, #9ad81d 100%);
    // position: relative;
    position: fixed;
    z-index: 2;
    margin-top: 4.61rem;
    

    @media screen and (max-width: 900px) {
        padding: 0;
        overflow-x: scroll;
        position: relative;
        z-index: 0;
        margin-top: 0;
    }

    @media screen and (max-width: 550px) {
        padding: 0.5rem;
        
    }
`;

export { NavbarContainer };