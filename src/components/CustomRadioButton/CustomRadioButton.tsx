import React from 'react'
import { LabelContainer } from './CustomRadioBtnStyle'



interface PropsType {
    id: string,
    name: string,
    handleCheckChieldElement : (e: React.ChangeEvent<HTMLInputElement>) => void,
    value: string,
    title: string,
};

const CustomRadioButton = ({name, id, value, handleCheckChieldElement, title } : PropsType) => {
  return (

    <LabelContainer>
        <input
            type="radio"
            name={name}
            value={value}
            id={id}
            onChange={handleCheckChieldElement}
            
        />
        <span className="radio-btn">
            <div className="hobbies-icon">
                <p>{title}</p>
            </div>
        </span>
    </LabelContainer>
  )
}

export default CustomRadioButton