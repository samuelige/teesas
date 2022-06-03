import React from 'react'
import "./CarouselGrpBtn.ts"
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { CarouselGrpBtnStyle } from './CarouselGrpBtn';

const CarouselGroupedButton = ({ next, previous } : any) => {
    return (
        <CarouselGrpBtnStyle>
            <button onClick={previous}>
                <HiChevronLeft className='text-2xl text-migdayyellow' />
            </button>
            <div/>
            <button className='' onClick={next}>
                <HiChevronRight className='text-2xl text-migdayyellow' />
            </button>
        </CarouselGrpBtnStyle>
    )
}

export default CarouselGroupedButton
