import React from 'react'
import { CustomInfoCardStyle } from './CustomInfoCardStyle'
import Tippy from '@tippyjs/react';
import { FaFacebookSquare, FaLinkedinIn, FaShareAlt, FaWhatsapp } from 'react-icons/fa';


type Props = {
    id: number,
    shared?: boolean,
    img: string,
    title: string,
    content: string,
    alt: string,
    textColor?: boolean,
}

const CustomInfoCard = ({id, shared, img, title, content, alt, textColor}: Props) => {
  return (
    <CustomInfoCardStyle key={id}>
        <div>
            <img src={img} alt={alt} />
        </div>
        

        <article>
            <h4 className={textColor ? 'sharedStyles' : 'defaultTextStyle'}>{title}</h4>
            <p>{content}</p>
        </article>

        {
            shared && (
                <Tippy  
                    content={
                        <div className="socialmedia-tooltip">
                            <FaFacebookSquare/>
                            <FaLinkedinIn/>
                            <FaWhatsapp/>
                        </div>
                    }>
                    <button className='shared_btn'>
                        <FaShareAlt/><span>share</span>
                    </button>  
                </Tippy>
            )
        }
        


    </CustomInfoCardStyle>
  )
}

export default CustomInfoCard