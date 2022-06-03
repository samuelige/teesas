import React from 'react'
import { AiFillEyeInvisible } from 'react-icons/ai';
import { Inputcontainer } from './InputFieldStyle';



interface I_InputData {
    type: string,
    placeholder: string,
    value: string | number,
    name: string,
    handleChange:  (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    setIcon?: boolean;
    handleClick?: () => void;
};

const InputField = ({type, name, value, placeholder, handleChange, setIcon, handleClick}: I_InputData) => {

    return (
        <Inputcontainer>
            <input type={type} name={name} value={value} placeholder={placeholder} onChange={handleChange}/> 

            {
                setIcon && (
                    <AiFillEyeInvisible onClick={handleClick}/>
                )
            }        
        </Inputcontainer>
    )
}

export default InputField