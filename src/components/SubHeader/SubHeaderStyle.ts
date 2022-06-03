import styled from "styled-components";

const SubHeaderContainer = styled.nav`
   display: flex;
   align-items: center;
   width: 100%;
   

    a {
        
        margin-left: 1.2rem;
        padding: 0.5rem;
        text-decoration: none;
        border-radius: 27px;

        div {
            display: flex;
            align-items: center;
            width: 100%;

            h5 {
                margin-left: 1rem;
            }
            
        } 
        
        &:hover {
            background: linear-gradient(to bottom, #edffdf 0%, #d4ffcf 100%);
            
        }
    }

    @media screen and (max-width: 900px) {
        
        a {
            width: 100%;
            margin-left: 0.5rem;
        }
    }

    
`;

export { SubHeaderContainer };