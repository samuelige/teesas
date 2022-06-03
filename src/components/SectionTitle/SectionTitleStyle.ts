import styled from 'styled-components';

const SectionTitleStyle = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;

    .image_section {
        display: flex;
        align-items: center;
        img {
            width: 56px;

            @media screen and (max-width: 900px) {
                width: 50px;
            }

            @media screen and (max-width: 550px) {
                width: 46px;
            }

            @media(max-width: 320px){ 
                width: 40px;
            }
        }

        h3 {
            font-size: 1rem;
            margin-left: 1rem;
            border-bottom: 3px solid ${props => props.theme.colors.yellowGreen};

            @media(max-width: 320px){ 
                font-size: 0.7rem;
            }
        }
    }

    .route_section {
        h3 {
            font-size: 1rem;
            color: ${props => props.theme.colors.darkGreen};
            cursor: pointer;

            &:hover {
                color: ${props => props.theme.colors.black};
            }

            @media(max-width: 320px){ 
                font-size: 0.7rem;
            }
        }
    }

    @media screen and (max-width: 900px) {
        padding: 1rem 1rem;
    }

    @media screen and (max-width: 550px) {
        padding: 1rem 0.2rem;
    }



`;

export { SectionTitleStyle };