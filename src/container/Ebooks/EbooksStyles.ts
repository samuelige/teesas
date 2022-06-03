import styled from "styled-components";

const EbooksStyle = styled.div`
    padding: 2rem 0 7rem 0;

    .subHeading {
        font-size: 1rem;
        color: #636363;
        margin-top: 0.5rem;
    }

    .carouselSection {
        margin-top: 5rem;
    }

    .share_info {
        margin-top: 5rem;
        display: flex;
        justify-content: space-between;
    }

    @media screen and (max-width: 900px) {
        // .share_info {
        //     flex-direction: column;
        // }
    }

    @media screen and (max-width: 550px) {
        .share_info {
            flex-direction: column;
        }
    }

`;

export { EbooksStyle };
