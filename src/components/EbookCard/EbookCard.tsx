import React from 'react'
import { EbookCardStyle } from './EbookCardStyle'


type Props = {
    image : string,
    title : string,
    content : string,
    alt : string
}

const EbookCard = ({image, title, content, alt} : Props) => {
  return (
    <EbookCardStyle>
        <figure>

        <img src={image} alt={alt}/>
        <figcaption>
            <h3>{title}</h3>
            <p>{content}</p>
        </figcaption>
        </figure>

    </EbookCardStyle>
  )
}

export default EbookCard