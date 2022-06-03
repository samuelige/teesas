import styled from "styled-components";

const SubcribeNowStyle = styled.div`
    .container {
        margin: 2rem 0;
        background: linear-gradient(to right, #449603 0%, #9ad81d 100%);
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem 2rem;
        border-radius: 1rem;

        .img_text_content {
            display: flex;
            align-items: center;

            img {
                width: 100px;
            }

            article {
                margin-left: 2rem;
                color: ${props => props.theme.colors.white};
            }


        }

        .subscribe_btn {
            width: 20%;

            button {
                background: ${props => props.theme.colors.white};
                color: ${props => props.theme.colors.darkGreen};
                width: 100%;
                border: none;
                outline: none;
                height: 4vmax;
                font-size: 1.1rem;
                font-weight: bold;
            }
        }

        @media screen and (max-width: 900px) {
            flex-direction: column;
            padding: 1.5rem 1rem;
            width: 70%;
            margin: 0 auto;

            .img_text_content {
                flex-direction: column;

                img {
                    width: 60%;
                }

                article {
                    margin-left: 0;
                    margin-top: 1rem;

                    h5 {
                        font-size: 1.4rem;
                    }

                    p {
                        font-size: 1rem;
                        margin-top: 0.8rem;
                    }
                }
            }


            .subscribe_btn {
                width: 100%;
                margin-top: 2rem;

                button {
                    height: 7vmax;
                    border-radius: 0.8rem;
                }
            }
        }

        @media screen and (max-width: 550px) {
            width: 100%;
        }
    }




    
`;

export { SubcribeNowStyle };