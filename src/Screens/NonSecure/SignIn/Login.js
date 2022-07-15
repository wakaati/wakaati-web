import React from 'react'
import {  Header2 } from '../../../Components/Header'
import { HeaderText3, NormalText } from '../../../Components/Text'
import { ClickButton } from '../../../Components/Button'
import { BodyContainer } from '../../../Components/styles/Container.styled'
import ROUTES from '../../../Navigation/routes'
import Footer from '../../../Components/Footer'
import { Colors } from '../../../Theme/Variables'
import {Card, Content, TextWrapper} from '../Styles/LandingPage.styles'
import { PasswordInput, PrimaryInput } from '../../../Components/Input'
import { TextNav } from '../../../Components/Links'
import {Formik, Form} from 'formik'
import { useNavigate } from 'react-router-dom'
import { LoginSchema } from '../../../Validation/AccountSchema'

export default function Login() {
  const navigate = useNavigate();

  return (
    <Formik
      initialValues={{ email: '', password: ''}}
      validationSchema={LoginSchema}
      onSubmit={ async(values, {setErrors}) => {

        navigate(ROUTES.DASHBOARD);

      }}
        > 
      {({errors, handleChange, handleSubmit, values, isValid}) => {
      return(
        <BodyContainer>
          <Content>
            <Header2/>
          
              <TextWrapper>
                <Card>
                  <HeaderText3>Sign In</HeaderText3>
                  <Form>
                    <PrimaryInput 
                      placeholder='Email'
                      onChange={handleChange('email')}
                      value={values.email}
                      error={errors.email}
                      />
                    <PasswordInput 
                      placeholder='Password'
                      onChange={handleChange('password')}
                      value={values.password}
                      error={errors.password}
                      />
                    <ClickButton 
                      text='Enter'
                      mt='20px'
                      height='50px'
                      width='300px'
                      enabled={isValid}/>
                  </Form>
                  <TextNav color={Colors.lightgrey} text='Forgot Password' link={ROUTES.FORGOT_PASSWORD}/>
                  <NormalText color={Colors.white}>Don't have an account? <TextNav color={Colors.lightgrey} text='Sign up' link={ROUTES.INTRO}/></NormalText>
                </Card>
              </TextWrapper>
          </Content>
          <Footer/>
        </BodyContainer>
      )}}
  </Formik>
  )
}
