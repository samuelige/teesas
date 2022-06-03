
import React, { useEffect, useState } from 'react'
import { AiOutlineAim } from "react-icons/ai";
import { SelectContainer } from './SelectStyles';

const SelectCountry = () => {
    const [countries, setCountries] = useState<Record<string,string>[]>([])
    
    useEffect(() =>{
        const data = require('./CountryData.json')
        console.log(data)
        setCountries(data)
    },[])
  return (
    <SelectContainer>
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