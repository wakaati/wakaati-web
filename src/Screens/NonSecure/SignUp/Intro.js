import React from 'react'
import styled from 'styled-components'
import { Header2 } from '../../../Components/Header'
import { BodyContainer } from '../../../Components/styles/Container.styled'
import { Colors } from '../../../Theme/Variables'
import Devices from '../../../Assets/Icons/devices.png'
import bg from '../../../Assets/Icons/WAKAATILOGO.png'
import { HeaderText3, HeaderText2 } from '../../../Components/Text'
import { PrimaryButton } from '../../../Components/Button'
import ROUTES from '../../../Navigation/routes'



export default function Intro() {

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

  return (
    <BodyContainer bg={Colors.white}>
      <Content>
        <Header2/>
      <TextWrapper>
        <img src={Devices} alt='' />
        <HeaderText2 color={Colors.black} mt='30px'>Set Up Your Account</HeaderText2>
        <HeaderText3  color={Colors.grey} mt='20px'>Get instant access to your favourite, Nollywood movies, </HeaderText3>
        <HeaderText3  color={Colors.grey} mt='5px'> premium tv shows and series. No ads, cancel anytime! 
       </HeaderText3>
       <PrimaryButton text='Continue' link={ROUTES.PERSONAL_DATA} mt='60px' width='350px' height='50px'/>
      </TextWrapper>
      </Content>
    </BodyContainer>

    )
}
