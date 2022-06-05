import React, { ChangeEvent, useState } from 'react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { Container } from './LoginStyle'

import InputField from '../../components/Custom_InputField/InputField'

import { useNavigate } from 'react-router-dom'

const Login = () => {

  const [formValue, setFormValue] = useState<Record<string,string>>({
    phone: "",
    password: "",
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
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

  let navigate = useNavigate();

  const handleRoute = () : void => {
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
        onChange={(phone: string) => setFormValue({...formValue, phone})}
        containerClass="my-container-class"
        inputStyle={styleInput}
      />

      <br/>
        
      <InputField
        type='password'
        name="password"
        placeholder="Password"
        handleChange={handleChange}
        value={formValue.password}
        setIcon={true}
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