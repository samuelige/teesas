import styled from "styled-components";

const CustomInfoCardStyle = styled.div`
    display: flex;
    justify-content:  space-between;
    border: 0.1px solid ${props => props.theme.colors.darkGreen};
    padding: 1rem 1.5rem;
    width: 48%;
    border-radius: 1rem;

    img {
        width: 60px;
    }

    article {
        flex: 1;
        padding-left: 2rem;

        h4 {
            font-size: 1.5rem;

        }

        p {
            margin-top: 0.5rem;
        }
        
        .defaultTextStyle {

        } 

        .sharedStyles {
            color: #337ab7;
        }

        
        
    }

    .shared_btn {
        width: 15%;
        height: 3.2vmax;
        border-radius: 0.5rem;
        border: none;
        outline: none;
        background: ${props => props.theme.colors.black};
        color: ${props => props.theme.colors.white};m             nn

        span {
            font-size: 1.2rem;
            margin-left: 0.5rem;
        }

        &:hover {
            background: ${props => props.theme.colors.darkGreen};
            color: ${props => props.theme.colors.white};
            cursor: pointer;
            
        }
    }

    @media screen and (max-width: 900px) {
        flex-direction: column;
        width: 48%;

        article {
            padding-left: 0;
            margin-top: 1.5rem;
        }
        .shared_btn {
            margin-top: 1.5rem;
            width: 40%;
            height: 5vmax;

            span {
                margin-left: 1rem;
            }
        }
    }

    @media screen and (max-width: 550px) {
        flex-direction: column;
        width: 100%;
        height: 46vmax;

        margin-top: 1.5rem;
    }

`;

export { CustomInfoCardStyle };