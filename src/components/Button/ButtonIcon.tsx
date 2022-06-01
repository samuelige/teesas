import React, { ReactNode } from 'react'
import { Container } from './ButtonIconStyle';

interface BtnTypes {
    children: ReactNode;
    handleClckEvent: () => void ;
}

const ButtonIcon = ({children, handleClckEvent}: BtnTypes) => {
  return (
    <Container onClick={handleClckEvent}>
        {children}
    </Container>
  )
}

export default ButtonIcon