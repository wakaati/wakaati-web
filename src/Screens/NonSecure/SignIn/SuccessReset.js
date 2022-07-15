import React from 'react'
import styled from 'styled-components'
import { Header2 } from '../../../Components/Header'
import { BodyContainer } from '../../../Components/styles/Container.styled'
import { Colors } from '../../../Theme/Variables'
import Success from '../../../Assets/Images/success.png'
import bg from '../../../Assets/Icons/WAKAATILOGO.png'
import {  HeaderText2, NormalText } from '../../../Components/Text'
import { PrimaryButton } from '../../../Components/Button'
import ROUTES from '../../../Navigation/routes'



export default function SuccessReset() {

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
const Bold = styled.b`

`
const Image = styled.img`
    width: 300px;
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

  return (
    <BodyContainer bg={Colors.white}>
      <Content>
        <Header2/>
      <TextWrapper>
        <Card>
            <HeaderText2 color={Colors.black} mt='30px'>Welcome Back</HeaderText2>
            <Image src={Success}/>
            <NormalText fontSize='15px'  color={Colors.grey} mt='20px'>Your password was reset successfully,</NormalText>
        
            <PrimaryButton text='Login' link={ROUTES.SIGNIN} mt='60px' width='350px' height='50px'/>
        </Card>
      </TextWrapper>
      </Content>
    </BodyContainer>

    )
}
