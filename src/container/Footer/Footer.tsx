import React from 'react'
import { footerData } from './data'
import { FooterStyle } from './FooterStyle'

const Footer = () => {
  return (
    <FooterStyle>
        <section className='aside_left'>
            <div className='mediaPage_logo'>
                <img src="https://learn.teesas.com/front-assets/images/footer-site-logo.png" alt="footer-site-logo" />
                <ul>
                    {
                        footerData && footerData.map(({img, alt}, index) => (
                            <li className='list_card' key={index}>
                                <img src={img} alt={alt} />
                            </li> 
                        ))
                    }
                </ul>
                <p>© 2021 Teesas. All rights reserved.</p>
            </div>

            <ul className='footer_route_list'>
                {
                    ["About us", "Privacy policy", "Terms and Conditions"].map((item, index) => (
                        <li key={index}>{item}</li>
                    ))
                }
            </ul>
        </section>

        <section className='aside_right'>
            <ul className='studentApp_list'>
                <li>Student App</li>
                <li>
                    <img src="https://learn.teesas.com/front-assets/images/android-download.png" alt="android-download" />
                </li>
                <li>
                    <img src="https://learn.teesas.com/front-assets/images/apple-download.png" alt="apple-download" />
                </li>
            </ul>

            <ul className='instructorApp_list'>
                <li>Instructor App</li>
                <li>
                    <img src="https://learn.teesas.com/front-assets/images/android-download.png" alt="android-download" />
                </li>
                <li>
                    <img src="https://learn.teesas.com/front-assets/images/apple-download.png" alt="apple-download" />
                </li>
            </ul>
        </section>
        
        
        
    </FooterStyle>
  )
}

export default Footer