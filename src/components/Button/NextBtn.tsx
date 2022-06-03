import React, { ReactNode } from 'react'
import { Container } from './NextBtnStyles';

interface BtnTypes {
    children: ReactNode;
    handleClckEvent: () => void ;
}

const NextBtn = ({children, handleClckEvent }: BtnTypes) => {
  return (
    <Container onClick={handleClckEvent}>
        {children}
    </Container>
  )
}

export default NextBtn