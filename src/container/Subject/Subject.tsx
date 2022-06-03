import React from 'react'
import { subjectData } from './data'
import { SubjectStyle } from './SubjectStyle'

const Subject = () => {
  return (
    <SubjectStyle>
        <h1 className='title'>Subject</h1>

        <ul className='subject-container'>
            {
                subjectData && subjectData.map(({image, title, alt}, index) => (
                    <li key={index}>
                        <img src={image} alt={alt} />
                        <h1>{title}</h1>
                        <div></div>
                    </li>
                ))
            }
        </ul>
    </SubjectStyle>
  )
}

export default Subject