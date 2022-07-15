import React from 'react'
import styled from 'styled-components'
import { Header2 } from '../../../Components/Header'
import { BodyContainer } from '../../../Components/styles/Container.styled'
import { Colors } from '../../../Theme/Variables'
import bg from '../../../Assets/Icons/WAKAATILOGO.png'
import { HeaderText3, NormalText } from '../../../Components/Text'
import ROUTES from '../../../Navigation/routes'
import { PasswordInput, PrimaryInput } from '../../../Components/Input'
import { ClickButton } from '../../../Components/Button'
import { Formik, Form} from 'formik'
import { useNavigate } from 'react-router-dom'
import { ResetPasswordSchema } from '../../../Validation/AccountSchema'



export default function ResetPassword() {

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
        password: '',
        cpassword: '',
          }}
        validationSchema={ResetPasswordSchema}
        onSubmit={ async(values, {setErrors}) => {
  
          navigate(ROUTES.RESET_SUCCESSFUL);
  
        }}>      

        {({errors, handleChange, handleSubmit, values, isValid}) => {
              return(
        <BodyContainer bg={Colors.white}>
                <Content>
                    <Header2/>
                    <TextWrapper>
                        <Card>
                            <HeaderText3 mr='150px' mb='10px' mt='20px' weight='600' color={Colors.black}>Account Security</HeaderText3>
                            <NormalText mt='-4px' mr='180px' mb='10px' >Reset your Password</NormalText>
                            <Form>
                          
                            <PasswordInput 
                                label='Password'
                                name='password'
                                onChange={handleChange}
                                value={values.password} 
                                error={errors.password}
                                />
                            <PasswordInput 
                                label='Confirm Password'
                                name='cpassword'
                                onChange={handleChange}
                                value={values.cpassword} 
                                error={errors.cpassword} />
                            
                            <ClickButton 
                                text='Continue'
                                enabled={isValid}
                                mt='40px'
                                height='55px'
                                width='300px'/>
                            </Form>
                        </Card>
                    
                    </TextWrapper>
                
                </Content>
        </BodyContainer>
        )}
    }
    </Formik>
 
  )
}


