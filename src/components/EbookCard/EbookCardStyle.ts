import styled from "styled-components";

const EbookCardStyle = styled.div`
    width: 98%;
    
    

    figure {
        padding-top: 1rem;
        border: 1px solid ${props => props.theme.colors.darkGreen};
        img {
            display: flex;
            width: 170px;
            height: 14vmax;
            margin: 0 auto;
        }
    }

    figcaption {
        margin-top: 1rem;
        height: 8vmax;
        padding: 0.5rem;
        color: ${props => props.theme.colors.white};
        background: linear-gradient(to right, #449603 0%, #9ad81d 100%);

        h3 {
            margin-top: 0.6rem;
            font-size: 1rem;
            font-weight: bold;
        }

        p {
            margin-top: 0.6rem;
            font-size: 0.8rem;
        }
    }
    
    @media screen and (max-width: 900px) {
        width: 90%;
        

        figcaption { 
            height: 10vmax;
        }
    }

    @media screen and (max-width: 550px) {
        width: 93%;

        figure {
            img {
                height: 25vmax;
            }
        }

        figcaption { 
            height: 15vmax;
        }
    }


`;

export { EbookCardStyle };