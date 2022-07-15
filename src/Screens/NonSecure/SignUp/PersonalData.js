import React from 'react'
import styled from 'styled-components'
import { Header2 } from '../../../Components/Header'
import { BodyContainer } from '../../../Components/styles/Container.styled'
import { Colors } from '../../../Theme/Variables'
import bg from '../../../Assets/Icons/WAKAATILOGO.png'
import { HeaderText3, NormalText } from '../../../Components/Text'
import { ClickButton } from '../../../Components/Button'
import ROUTES from '../../../Navigation/routes'
import { PrimaryInput } from '../../../Components/Input'
import { TextNav } from '../../../Components/Links'
import { Formik, Form} from 'formik'
import { PersonalSchema } from '../../../Validation/AccountSchema'
import { useNavigate } from 'react-router-dom'

export default function PersonalData() {

  const Content = styled.section`
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-size: cover;
  padding-bottom: 180px;
`

const TextWrapper = styled.div`
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const Card = styled.div`
  margin-top: -100px;
  min-width: 50%;
  border-radius: 10px;
  background-color: ${`${Colors.white}`};
  padding: 30px 50px;
  display: flex;
  align-items: center;
  flex-direction: column;
`
const navigate = useNavigate();

return (
  <Formik
      initialValues={{
      firstname: '',
      lastname: '',
      email: '',
      phone: '',
            }}
      validationSchema={PersonalSchema}
      onSubmit={ async(values, {setErrors}) => {

        navigate(ROUTES.ACCOUNT_PASSWORD);

      }}
          >
            {({errors, handleChange, handleSubmit, values, isValid}) => {
              return(
              <BodyContainer bg={Colors.white}>
                <Content>
                  <Header2/>
                    <TextWrapper>
                      <Card>
                        <HeaderText3 mr='180px' mb='30px' weight='600' color={Colors.black}>Personal Data</HeaderText3>
                        <NormalText mr='-40px' mt='-13px' mb='10px' >Enter the folowing information to Personalize your account. </NormalText>
                  <Form>
                  <PrimaryInput 
                    label='First Name'
                    placeholder='Your First Name'
                    name='firstname'
                    onChange={handleChange}
                    value={values.firstname} 
                    error={errors.firstname}
                    inputType='text'
                    />            
                  <PrimaryInput 
                    label='Last Name'
                    placeholder='Your Last Name'
                    name='lastname'
                    onChange={handleChange}
                    value={values.lastname}
                    error={errors.lastname}
                    inputType='text'
                     />
                  <PrimaryInput 
                    label='Email'
                    placeholder='example@email.com'
                    name='email'
                    onChange={handleChange}
                    value={values.email} 
                    error={errors.email}
                    inputType='email'
                    />
                  <PrimaryInput 
                    label='Phone Number'
                    placeholder='2348101010010'
                    name='phone'
                    onChange={handleChange}
                    value={values.phone}
                    error={errors.phone}
                    inputType='number'
                    />           
                  <ClickButton 
                    text='Continue'
                    enabled={isValid}
                    mt='40px'
                    height='55px'
                    width='300px'/>
                  </Form>
                  <NormalText>Already have an account? <TextNav link={ROUTES.SIGNIN} text='Log in' weight='600' hover={Colors.purple} /></NormalText>
                  <NormalText>By continuing, you agree to the Terms of use, Privacy
                    Policy, and Community Standards of wakaati.com</NormalText>
                </Card>
              
              </TextWrapper>
          
          </Content>
        </BodyContainer>

  )}}
  </Formik>

  )
}


