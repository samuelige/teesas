import styled from "styled-components";

const FooterStyle = styled.div`
    background: #50ad07;
    display: flex;
    justify-content: space-between;
    padding: 3rem 7rem 3rem 5rem;
    color: ${(props: any) => props.theme.colors.white};
    

    .aside_left, .aside_right {
        display: flex;
        justify-content: space-between;

        
    }

    .aside_left {
        width: 50%;
    }

    .aside_right {
        width: 40%;
    }


    .mediaPage_logo {
        
        img {
            width: 140px;
        }

        ul {
            display: flex;
            align-items: center;

            .list_card {
                list-style: none;
                text-decoration: none;
                margin-left: 0.8rem;
                img {
                    width: 25px;
                    cursor: pointer;
                }

                @media screen and (max-width: 900px) {
                    margin-left: 0.2rem;
                }
                @media screen and (max-width: 550px) {
                    margin-left: 0.6rem;
                }
            }
        }

    }

    .mediaPage_logo {
        line-height: 46px
    }

    ul {
       list-style: none; 
    }

    .footer_route_list, .studentApp_list, .instructorApp_list {
        line-height: 40px; 
    }

    .studentApp_list, .instructorApp_list {
        li {
            img {
                width: 150px;
                cursor: pointer;
            }
        }
    }


    @media screen and (max-width: 900px) {
        padding: 3rem 1rem;

        .aside_left {
            width: 48%;
        }
    
        .aside_right {
            width: 48%;
        }
    }

    @media screen and (max-width: 550px) {
        flex-direction: column;
        text-align: center;
        justify-content: center;
        

        .aside_left, .aside_right {
            flex-direction: column;
            margin: 0 auto;
    
            
        }

        .mediaPage_logo,
        .footer_route_list, 
        .studentApp_list, 
        .instructorApp_list {
            line-height: 50px
        }
    
    
    }
`;

export { FooterStyle };