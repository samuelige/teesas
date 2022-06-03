import React from 'react'
import { Container, HeaderItems, HeaderLogo, MobileSelectInput} from './HeaderStyles'

const Header = () => {
    const headerData = [
        {
            id: 1,
            title: "Enquire Now",
            imageUrl: "https://learn.teesas.com/front-assets/images/wp-icon.png",
            alt: "whatsApp_logo"
        },
        {
            id: 2,
            title: "Samuel Ige",
            imageUrl: "https://learn.teesas.com/front-assets/images/index4.png",
            alt: "user_avatar"
        }
    ]
  return (
    <Container>
        <HeaderLogo>
            <img src="https://learn.teesas.com/front-assets/images/site-logo.png" alt="app_logo"/>
        </HeaderLogo>

        <HeaderItems>
            {
                headerData && headerData.map(({id, title, imageUrl, alt}) => (
                    <li key={id}>
                        <img src={imageUrl} alt={alt} />
                        <h5>{title}</h5>
                    </li>  
                ))
            }

            <li className='list_select'>
                <select className='list_item'>
                    <option value="">Reception</option>
                    <optgroup label="Pre School">
                        <option>Reception</option>
                    </optgroup>
                    <optgroup label="Primary School">
                        <option>Grade 1</option>
                        <option>Grade 2</option>
                        <option>Grade 3</option>
                        <option>Grade 4</option>
                        <option>Grade 5</option>
                        <option>Grade 6</option>
                    </optgroup>
                    <optgroup label="Secondary School Entrance Exam Prep.">
                        <option>British</option>
                        <option>Catholic</option>
                        <option>Military</option>
                        <option>National/Unity School</option>
                    </optgroup>
                </select>
            </li>
        </HeaderItems>
        <MobileSelectInput>
                <select >
                    <option value="">Reception</option>
                    <optgroup label="Pre School">
                        <option>Reception</option>
                    </optgroup>
                    <optgroup label="Primary School">
                        <option>Grade 1</option>
                        <option>Grade 2</option>
                        <option>Grade 3</option>
                        <option>Grade 4</option>
                        <option>Grade 5</option>
                        <option>Grade 6</option>
                    </optgroup>
                    <optgroup label="Secondary School Entrance Exam Prep.">
                        <option>British</option>
                        <option>Catholic</option>
                        <option>Military</option>
                        <option>National/Unity School</option>
                    </optgroup>
                </select>
            </MobileSelectInput>
        
    </Container>
  )
}

export default Header