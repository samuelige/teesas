import React from 'react'
import { SubcribeNowStyle } from './SubcribeNowStyle'

const SubcribeNow = () => {
  return (
    <SubcribeNowStyle>
      <section className='container'>
        <aside className='img_text_content'>
          <img src="https://learn.teesas.com/front-assets/images/Group 13556.png" alt="genius_logo" />
          <article>
            <h5>Make Your Child a Genius</h5>
            <p>Access to High Quality Educational Video in National and Local Languages</p>
          </article>
        </aside>
        <aside className='subscribe_btn'>
          <button>Subscribe Now!</button>
        </aside>
      </section>
      
    </SubcribeNowStyle>
  )
}

export default SubcribeNow