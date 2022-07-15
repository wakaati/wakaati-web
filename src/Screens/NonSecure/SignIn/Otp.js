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
import { OtpSchema } from '../../../Validation/AccountSchema'
import { TextNav } from '../../../Components/Links'



export default function Otp() {

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
        Otp: '',
          }}
        validationSchema={OtpSchema}
        onSubmit={ async(values, {setErrors}) => {
  
          navigate(ROUTES.RESET_PASSWORD);
  
        }}>      

        {({errors, handleChange, handleSubmit, values, isValid}) => {
              return(
        <BodyContainer bg={Colors.white}>
                <Content>
                    <Header2/>
                    <TextWrapper>
                        <Card>
                            <HeaderText3 mr='150px' mb='10px' mt='20px' weight='600' color={Colors.black}>Account Security</HeaderText3>
                            <NormalText mr='60px' mt='-2px' >Enter the OTP sent to your Email / Phone. </NormalText>
                            <NormalText mt='-4px' mr='180px' mb='10px' >Secure your account</NormalText>
                            <Form>
                            <PrimaryInput 
                                label='OTP'
                                placeholder='One-time-pin'
                                inputType='number'
                                name='Otp'
                                onChange={handleChange}
                                value={values.Otp} 
                                error={errors.Otp}
                                 />
                            
                            <ClickButton 
                                text='Continue'
                                enabled={isValid}
                                mt='40px'
                                height='55px'
                                width='300px'/>
                            <NormalText>Haven't gotten an email yet? <TextNav  text='Resend Code' color={Colors.purple} link={ROUTES.SEND_OTP}/></NormalText>
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


