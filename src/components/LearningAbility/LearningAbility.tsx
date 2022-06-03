import React from 'react'
import { Container, ImageContainer, TextContainer } from './LearningAbilityStyle';

interface PropsType {
    id: number,
    img: string;
    title: string;
    alt: string;
    description: string;
}

const LearningAbility = (props : PropsType) => {
    const {id, img, title, alt, description } = props;
  return (
    <Container key={id}>
        <ImageContainer>
            <img src={img} alt={alt} />
        </ImageContainer>
        
        <TextContainer>
            <h5>{title}</h5>
            <p>{description}</p>
        </TextContainer>
    </Container>
  )
}

export default LearningAbility