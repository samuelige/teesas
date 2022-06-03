import styled from "styled-components";
import { pic_1 } from "../../constants/image";

const Container = styled.div`

    position: relative;
    top: 0;
    height: 40vmax;
    background: linear-gradient(to bottom, #7ed956 0%, #039525 100%);
    color: #f1f1f1;
    width: 100%;
    transition: .7s ease;
    opacity: 1;
    color: white;
    font-size: 20px;
    padding: 20px;
    z-index: 1;
    border-radius: 1.2rem;

    @media screen and (max-width: 900px) {
        height: 45vmax;
    }

    @media screen and (max-width: 550px) {
        height: 70vmax;
    }

    @media(max-width: 320px){
        height: 70vmax;
    }

    &:before {
        background: url(${pic_1}) 0 0 no-repeat;
        background-size: cover;
        width: 100%;
        height: 152px;
        position: absolute;
        border-radius: 1.2rem;
        left: 0;
        bottom: 0;
        content: '';
    }

    
        h3 {
            text-align: center;
            font-size: 1.1rem;
            color: ${props => props.theme.colors.white};
        }
    
        h5 {
            font-size: 0.9rem;
            color: ${props => props.theme.colors.black};
            text-align: center;

            &:hover {
            cursor: pointer;
            color: ${props => props.theme.colors.white};
        }

        


    
    }

    



    
    // .login_container {
    //     position: absolute;
    //     width: 36%;
    //     top: 30%;
    //     z-index: 2;
    //     padding: 0.9rem;
    //     text-align: center;


    //     h3 {
    //         font-size: 1.1rem;
    //         color: ${props => props.theme.colors.white};
    //     }

    //     h5 {
    //         font-size: 0.9rem;

    //         &:hover {
    //         cursor: pointer;
    //         color: ${props => props.theme.colors.white};
    //     }

    //     @media screen and (max-width: 900px) {
    //         width: 100%;
    //     }
    // }

    // button {
        // width: 60%;
        // height: 2.8rem;
        // border-radius: 0.5rem;
        // background: transparent;
        // border: 1px solid ${props => props.theme.colors.white};

    //     &:hover {
    //         cursor: pointer;
    //         background: black;
    //         color: ${props => props.theme.colors.white};
    //     }
    // }

    // @media screen and (max-width: 900px) {
    //     top: 15%;

    //     .login_container {
    //         position: absolute;
    //         width: 100%;
    //         top: 30%;
    //         z-index: 2;
    //         padding: 0.9rem;
    //         text-align: center;
    //     :

    // }
      
}

    
    
`;

// const Overlay = styled.div`
    // position: relative;
    // top: 0;
    // height: 34vmax;
    // background: linear-gradient(to bottom, #7ed956 0%, #039525 100%);
    // color: #f1f1f1;
    // width: 100%;
    // transition: .7s ease;
    // opacity: 1;
    // color: white;
    // font-size: 20px;
    // padding: 20px;
    // z-index: 1;
    // border-radius: 1.2rem;

    // &:before {
    //     background: url(${pic_1}) 0 0 no-repeat;
    //     background-size: cover;
    //     width: 100%;
    //     height: 152px;
    //     position: absolute;
    //     border-radius: 1.2rem;
    //     left: 0;
    //     bottom: 0;
    //     content: '';
    // }

//     @media screen and (max-width: 900px) {
//         // padding: 100px;
//         // width: 300px;
//         width: 46vmax;
//         height: 40vmax;
//     }

//     @media screen and (max-width: 550px) {
//         padding: 0;
//         // width: 43vmax;
//     }
// `;

const Button = styled.button`
    width: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;

    height: 2.8rem;
    border-radius: 0.5rem;
    background: transparent;
    border: 1px solid ${props => props.theme.colors.white};
    cursor: pointer;

    &:hover {
        cursor: pointer;
        background: black;
        color: ${props => props.theme.colors.white};
    }

`;

export { Container, Button };