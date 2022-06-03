import React from 'react'
import CustomInfoCard from '../../components/CustomInfoCard/CustomInfoCard'
import CustomCarousel from '../../components/Custom_Carousel/Custom_Carousel'
import EbookCard from '../../components/EbookCard/EbookCard'
import SectionTitle from '../../components/SectionTitle/SectionTitle'
import { ebookData } from './data'
import { EbooksStyle } from './EbooksStyles'
import { sharedData } from './shareData'


const Ebooks = () => {
  return (
    <EbooksStyle>
        <SectionTitle 
            title='E-Book'
            imgUrl='https://learn.teesas.com/front-assets/images/icon18.png'
            routerLink='/ebooks'
            routerText='See All'
            alt="ebook_logo"
        />

        <p className='subHeading'>Deepen your knowledge! Gain access to exciting books and learning material.</p>

        <div className="carouselSection">
            <CustomCarousel>
            {
                ebookData && ebookData.map(({image,title, content, alt}, index) => (
                    <EbookCard
                        // key = {index}
                        image = {image}
                        title = {title}
                        content = {content}
                        alt = {alt}
                    
                    />
                ))
            }
            </CustomCarousel>
            
            
        </div>

        <div className="share_info">
            {
                sharedData && sharedData.map(({img, title, textColor, content, shared, alt}, index) => (
                    <CustomInfoCard 
                        id = {index}
                        img={img}
                        shared = {shared}
                        title = {title}
                        content = {content}
                        alt = {alt}
                        textColor = {textColor}
                    />
                ))
            }
        </div>

        
    </EbooksStyle>
  )
}

export default Ebooks