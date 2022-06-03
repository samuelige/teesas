import React, { useState } from 'react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { Container } from './LoginStyle'

import InputField from '../../components/Custom_InputField/InputField'

import { useNavigate } from 'react-router-dom'

const Login = () => {
  const mediaMatch: MediaQueryList = window.matchMedia('(min-width: 900px)');
  
  console.log(mediaMatch.matches)


  const [formValue, setFormValue] = useState<Record<string,string>>({
    phone: "",
    password: "",
  })

  const [viewPassword, setViewPassword] = useState<boolean>(false)

  const handleChange = (e: any) => {
    const getValue = {...formValue}
    getValue[e.target.name] = e.target.value
    setFormValue(getValue)
  }

  const styleInput: Record<string, any> = { 
   
    borderRadius: "4px",
    width: "100%",
    fontSize: "16px",
    color: "#555",
    outline:" none",
    height: "4rem",
    
  }

  const handleViewPassword = () => {
    setViewPassword(true);
  }

  let navigate = useNavigate();
    
  const handleRoute = () : any => {
      navigate('/dashboard');
  }

  return (
    <Container>

          <h3>Let's Get Started</h3>
            <br/>
          <PhoneInput
            country={"ng"}
            inputProps={{
              name: "phone",
              country: "ng",
              required: true,
            }}
            value={formValue.phone}
            onChange={() => handleChange}
            containerClass="my-container-class"
            inputStyle={styleInput}

            // inputClass="phone-input"
          />
          <br/>
            
          <div className='meta'/>
            <InputField
              type={viewPassword ? 'text' : 'password'}
              name="password"
              placeholder="Password"
              handleChange={handleChange}
              value={formValue.password}
              setIcon={true}
              handleClick={() => handleViewPassword}
            />
            <br/>
          <h5>Forgot Password ?</h5>
            <br/>
            <br/>

            <button onClick={handleRoute}>LOGIN</button>
        
    </Container>
  )
}

export default Login