import React from 'react'
import SectionTitle from '../../components/SectionTitle/SectionTitle'
import { LiveChatStyle } from './LiveClassesStyle'

const LiveClasses = () => {
  return (
    <LiveChatStyle>
        <SectionTitle 
            title='Upcoming Live Classes'
            imgUrl='https://learn.teesas.com/front-assets/images/icon17.png'
            routerLink='/live-classes'
            routerText='See All'
            alt="live_class_logo"
        />

        <section className='content'>
            <img src="https://learn.teesas.com/front-assets/images/no_data.png" alt="no_data_logo" />
        </section>
    </LiveChatStyle>
  )
}

export default LiveClasses