import React, { Fragment, useState } from 'react'
import NextBtn from '../../components/Button/NextBtn'
import CustomRadioButton from '../../components/CustomRadioButton/CustomRadioButton'
import InputField from '../../components/Custom_InputField/InputField'
import SelectCountry from '../../components/SelectCountry/SelectCountry'
import { Container, Footer, FormSection, Section, Select } from './RegisterStyle'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { useNavigate } from 'react-router-dom'



const Register = () => {

  const styleInput: Record<string, any> = { 
    borderRadius: "4px",
    width: "100%",
    fontSize: "16px",
    color: "#555",
    outline:" none",
    height: "4rem", 
  }


  const [count, setCount] = useState<number>(1);

  const [viewPassword, setViewPassword] = useState<boolean>(false)
  
  const [formValue, setFormValue] = useState<Record<string,string>>({
    phone: "",
    radio: "",
    fullName: "",
    email: "",
    password: "",
    address: "",
    getDate: "",
    gender: ""
  })

    let navigate = useNavigate();
    
    const handleRoute = () : any => {
        navigate('/dashboard');
    }

    const handleChange = (e: any) => {
      const getValue = {...formValue}
      getValue[e.target.name] = e.target.value
      setFormValue(getValue)
    }


    const handleIncrement = () => {
      
      setCount((previousState) => previousState + 1);
      if(count === 3) {
        return setCount(3);
      }
    }

    const handleDecrement = () => {
        if(count < 2) {
            return setCount(1);
        }
        setCount((previousState) => previousState - 1); 
    }

    const handleViewPassword = () => {
        setViewPassword(true);
    }

  
  return (
    <Container>
      <h3>Register</h3>



      {
        count === 1 && (
          <Fragment>
            <Select>
              <label>Select Your Country</label>
              <SelectCountry />
            </Select>

            <Section>
              <h4>PRE SCHOOL</h4>
              <div>
                <CustomRadioButton 
                  name="radio"
                  title="Reception"
                  value="Reception"
                  id="Reception"
                  handleCheckChieldElement={handleChange}
                />
              </div>
            </Section>

            <Section>
              <h4>PRE SCHOOL Reception PRIMARY SCHOOL</h4>
              <div>
                {
                  ['Grade 1', 'Grade 2', 'Grade 3', 'Grade 4', 'Grade 5', 'Grade 6'].map((item, index) => (
                    <CustomRadioButton 
                      name="radio"
                      title={item}
                      value={item}
                      id={item}
                      handleCheckChieldElement={handleChange}
                    />
                  ))
                }
              </div>
            </Section>

            <Section>
              <h4>SECONDARY SCHOOL ENTRANCE EXAM PREP.</h4>
              <div>
                {
                  ['British', 'Catholic', 'Military', 'National/Unity School'].map((item, index) => (
                    <CustomRadioButton 
                      name="radio"
                      title={item}
                      value={item}
                      id={item}
                      handleCheckChieldElement={handleChange}
                    />
                  ))
                }
              </div>
            </Section>

          </Fragment>
        )
      }

      {
        count === 2 && (
          <FormSection>
            <InputField
              type='text'
              name="fullName"
              placeholder="Full Name"
              handleChange={handleChange}
              value={formValue.fullName}
            />
            <div className='meta'/>
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
            <div className='meta'/>
            <InputField
              type="email"
              name="email"
              placeholder="Email Address"
              handleChange={handleChange}
              value={formValue.email}
            />
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
          </FormSection>
        )
      }

      {
        count === 3 && (
          <FormSection>
            <InputField
              type='text'
              name="address"
              placeholder="Enter your address"
              handleChange={handleChange}
              value={formValue.address}
            />
            <div className='meta'/>
            <InputField
              type='date'
              name="getDate"
              placeholder="Enter your address"
              handleChange={handleChange}
              value={formValue.getDate}
            />
            <div className='meta'/>
            <Section>
              <h4>Gender</h4>
              <div>
                {
                  ['Male', 'Female'].map((item, index) => (
                    <CustomRadioButton 
                      name="gender"
                      title={item}
                      value={item}
                      id={item}
                      handleCheckChieldElement={handleChange}
                    />
                  ))
                }
              </div>
            </Section>



          </FormSection>
        )

      }
        

      <Footer>
        {
          count === 2 && (
            <>
              <NextBtn handleClckEvent={handleDecrement}>Back</NextBtn>
              <div/>
              <NextBtn handleClckEvent={handleIncrement}>Next</NextBtn>
            </>
            
          )
        }

        {count !== 2 && count !== 3 && (
          <>
            <div/>
              <NextBtn handleClckEvent={handleIncrement}>Next</NextBtn>
          </>
        )}
        
        
        {
           count === 3 && (
            <>
              <NextBtn handleClckEvent={handleDecrement}>Back</NextBtn>
              <div/>
              <NextBtn handleClckEvent={handleRoute}>Register</NextBtn>
            </>
          ) 
        }
       
      </Footer>
    </Container>
  )
}

export default Register