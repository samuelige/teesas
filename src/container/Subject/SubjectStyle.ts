import styled from 'styled-components';

const SubjectStyle = styled.div`
    padding-bottom: 3rem;

    .title {
        font-size: 1.7rem;
        font-weight: bold;
        border-bottom: 3px solid ${props => props.theme.colors.yellowGreen};
        width: 102px
    }

    ul {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 1rem;
        margin-top: 40px;
        
        @media (min-width: 1050px) {
          grid-template-columns: repeat(3, 1fr);
        }
        
        @media (min-width: 1200px) {
          grid-template-columns: repeat(4, 1fr);
        }
        li {
          position: relative;
          background: linear-gradient(45deg, #ffb336 0%, #ff4a29 100%);
          height: 200px;
          border-radius: 1rem;
          overflow: hidden;
          padding-top: 10px;
          padding-left: 20px;
          div {
            position: absolute;
            background: linear-gradient(98deg, #ffb336 2%, #ff4a29 100%);
            width: 96px;
            height: 96px;
            top: -48px;
            right: -48px;
            border-radius: 50%;
          }
          img {
            width: 50px;
          }
          h1 {
            color: white;
            font-weight: 600;
            font-size: 1rem;
          }
        }
        li:nth-child(2) {
          background: linear-gradient(45deg, #08adf7 0%, #323ec8 100%);
          div {
            background: linear-gradient(98deg, #08adf7 2%, #323ec8 100%);
          }
        }
        li:nth-child(3) {
          background: linear-gradient(45deg, #e125d9 0%, #970780 100%);
        }
        li:nth-child(4) {
          background: linear-gradient(45deg, #f76092 0%, #ed175d 100%);
        }
      }
`;


export { SubjectStyle };