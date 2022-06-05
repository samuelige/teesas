
import React, { ChangeEventHandler, useEffect, useState } from 'react'
import { AiOutlineAim } from "react-icons/ai";
import { SelectContainer } from './SelectStyles';

type Props = {
    value: string | number,
    name: string,
    handleChange: ChangeEventHandler<HTMLSelectElement>;
}

const SelectCountry = ({name, value, handleChange} : Props) => {
    const [countries, setCountries] = useState<Record<string,string>[]>([])
    
    useEffect(() =>{
        const data = require('./CountryData.json')
        setCountries(data)
    },[])
  return (
    <SelectContainer name={name} value={value} onChange={handleChange}>
        <option value=''>--Select Country--</option>
        {
            countries.map((item) =>{
                return(
                    <option key={item.country}>
                        <div>
                            
                            {item.country}
                        </div>
                    </option>
                )
            })
        }
        <AiOutlineAim/>
    </SelectContainer>
    
  )
}

export default SelectCountry