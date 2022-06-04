import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.17rem 2rem 0.17rem 4.2rem;
    background: ${(props: any) => props.theme.colors.lightGreen};
    // position: relative;
    position: fixed;
    z-index: 2; 

    @media screen and (max-width: 900px) {
        padding: 1rem 0.5rem;
        position: relative;
        z-index: 0;
    }
    @media screen and (max-width: 550px) {
        flex-direction: column;
    }

    
`;

const HeaderLogo = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    
    img {
        width: 145px;
    }
`;
const MobileSelectInput = styled.div `
    
    display: none;
    select {
        outline: none;
        width: 100%;
        height: 5vmax;
        margin-top: 1rem;
        border-radius: 4px;
        padding: 0 0.3rem 0 0.3rem;
        font-size: 1rem;
        background: transparent;
        cursor: pointer;
    }

    @media screen and (max-width: 550px) {
        display: block;
        align-self: flex-end;
    }

`;

const HeaderItems = styled.ul`
    display: flex;
    width: 55%;

    li {
        list-style: none;
        display: flex;
        align-items: center;
        width: 40%;

        img {
            width: 40px;
            cursor: pointer;
        }

        h5 {
            font-size: 1.3rem;
            margin-left: 1rem;
            cursor: pointer;
        }

        .list_item {
            // background: ${(props) => props.theme.colors.darkGreen};
            outline: none;
            width: 70%;
            height: 2.7vmax;
            border-radius: 4px;
            padding: 0 0.3rem 0 0.3rem;
            font-size: 1rem;
            background: transparent;
            cursor: pointer;
        }
    }
    
    
    @media screen and (max-width: 900px) {
        width: 70%;

        li {
            img {
                width: 30px;
            }

            h5 {
                font-size: 1rem;
            }
        }
    }

    @media screen and (max-width: 550px) {
        width: 100%;
        margin-top: 1.2rem;
        padding-left: 1rem;

        li {
            width: 100%;

            h5 {
                margin-left: 0.2rem;
            }

            
        }
        .list_select {
            display: none;
        }

        
    }

    @media(max-width: 320px){ 
        padding-left: 0rem;
    }

`;



export { MobileSelectInput, HeaderItems, Container, HeaderLogo };