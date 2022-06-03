import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.17rem 4rem;
    background: ${(props: any) => props.theme.colors.yellowGreen};
    // position: relative;
    position: fixed;
    z-index: 2;

    @media screen and (max-width: 900px) {
        padding: 1rem 0.5rem;
    }
`;

const NavbarLogo = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    
    img {
        width: 90px;
    }
`;


const NavbarLinks = styled.ul `
    display: flex;
    align-items: center;

    li {
        margin: 0.6rem 0.5rem;
        cursor: pointer;
        flex-direction: column;
        list-style: none;
        font-size: 1rem;
        
        a {
            text-decoration: none;
            color: ${(props: any) => props.theme.colors.black};
            opacity:1 ;
            font-weight: bold;

            &:hover {
                opacity: 0.8;
            }
        }
    }

    @media screen and (max-width: 900px) {
        display: none;
    }
`;

const CentainerItem = styled.div `
    display: flex;
    align-items: center;
    
    color: ${(props: any) => props.theme.colors.white};

    p {
        margin-left: 0.6rem;
    }
`;

const ButtonWrapper = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    width: 130px;

    @media screen and (max-width: 900px) {
        width: 150px;
    }
`;

const NavbarLinksMobile = styled.div `
    display: none;

    @media screen and (max-width: 900px) {
        display: block;

        svg {
            cursor: pointer;
        }

    }
`;


const NavbarLinksMobileContainer = styled.ul `
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    flex-direction: column;

    text-align: end;
    padding: 2rem;
    position: absolute;
    right: 0;
    top: 40px;
    margin-top: 1rem;
    min-width: 250px;
    border-radius: 5px;
    box-shadow: 0px 0px 5px rgba(0,0, 0,0.2);
    z-index: 3;
    background: ${(props: any) => props.theme.colors.white};
    

    li {
        margin: 0;
        cursor: pointer;
        flex-direction: column;
        list-style: none;
        margin: 0.2rem 0.2rem;

        a {
            text-decoration: none;
            color: ${(props: any) => props.theme.colors.black};
            opacity:1 ;
            font-weight: bold;
        }
        
    }
`;



export { ButtonWrapper, NavbarLinksMobile, NavbarLinksMobileContainer, Container, CentainerItem, NavbarLogo, NavbarLinks };