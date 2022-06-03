import React, { useState } from 'react'
import { Container } from './LoginStyle'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import InputField from '../../components/Custom_InputField/InputField'
import NextBtn from '../../components/Button/NextBtn'
import { useNavigate } from 'react-router-dom'

const Login = () => {
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
    height: "3.5vmax",
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
            inputStyle={styleInput}
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
          <NextBtn handleClckEvent={handleRoute}>Register</NextBtn>
        
    </Container>
  )
}

export default Login