import React from 'react'
import { useNavigate } from 'react-router-dom'
import { SectionTitleStyle } from './SectionTitleStyle';

type Props = {
    title: string,
    imgUrl: string,
    routerLink: string,
    routerText: string,
    alt: string,
}



const SectionTitle = ({title, imgUrl, alt, routerLink, routerText}:  Props) => {

    let navigate = useNavigate();
    
    const handleRoute = (route: string) : any => {
        navigate(route);
    }

  return (
    <SectionTitleStyle>
        <aside className='image_section'>
            <img src={imgUrl} alt={alt} />
            <h3>{title}</h3>
        </aside>
        <aside className='route_section'>
            <h3 onClick={handleRoute(routerLink)}>{routerText}</h3>
        </aside>
    </SectionTitleStyle>
  )
}

export default SectionTitle