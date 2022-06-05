import React, { ChangeEvent, useEffect, useRef, useState } from 'react'
import { AiFillEyeInvisible } from 'react-icons/ai';
import { Inputcontainer } from './InputFieldStyle';

interface I_InputData {
    type: string,
    placeholder: string,
    value: string | number,
    name: string,
    handleChange:  (e: ChangeEvent<HTMLInputElement>) => void;
    setIcon?: boolean;
};

const InputField = ({type, name, value, placeholder, handleChange, setIcon}: I_InputData) => {
    const [viewPassword, setViewPassword] = useState<boolean>(false);
    const toggleContainer = useRef<HTMLDivElement>(null);
    

    useEffect(() => {
        
        window.addEventListener('click', onClickOutsideHandler);

        return () => {
          window.removeEventListener('click', onClickOutsideHandler);
        }
        
    }, [viewPassword])

    const handleViewPassword = () => {
        setViewPassword(true);
    }
    const handleClosePassword = () => {
        setViewPassword(false);
    }

    const onClickOutsideHandler = (e: MouseEvent) => {
        if (toggleContainer.current && !toggleContainer.current.contains(e.target as Node)) {
            setViewPassword(false);
        }
    }
    return (
        <Inputcontainer ref={toggleContainer}>
            <input type={viewPassword ? type = 'text' : type} name={name} value={value} placeholder={placeholder} onChange={handleChange}/> 

            {
                setIcon && (
                    <AiFillEyeInvisible onClick={!viewPassword ? handleViewPassword : handleClosePassword}/>
                )
            } 
        </Inputcontainer>
    )
}

export default InputField