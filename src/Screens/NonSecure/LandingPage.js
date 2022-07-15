import React from 'react'
import { Header } from '../../Components/Header'
import styled from 'styled-components'
import bg from '../../Assets/Images/bg.png'
import { HeaderText2, HeaderText3, NormalText } from '../../Components/Text'
import { PrimaryButton } from '../../Components/Button'
import tv from '../../Assets/Images/Tv.png'
import { Fadeanimation } from '../../Components/Animation/index'
import { BodyContainer } from '../../Components/styles/Container.styled'
import ROUTES from '../../Navigation/routes'
import Footer from '../../Components/Footer'
import Google from '../../Assets/Icons/google.png'
import Apple from '../../Assets/Icons/apple.png'
import { Colors } from '../../Theme/Variables'
import {Content, TextWrapper, Section, SectionText, DownloadButton, ButtonWrapper} from './Styles/LandingPage.styles'

function LandingPage() {
  
  return (
    <BodyContainer>
    <Content>
      <Header/>
      <TextWrapper>
          <HeaderText2 fontSize='55px'>It's Movie Time!!</HeaderText2>
          <HeaderText3 fontSize='35px' mt='40px'>Stream Unlimited Nollywood</HeaderText3>
          <HeaderText3 fontSize='35px' mt='10px'>Movies</HeaderText3>
          <NormalText fontSize='25px' mt='50px' color={Colors.white}>Watch Anywhere, Cancel Anytime</NormalText>
          <PrimaryButton text='START STREAMING' mt='20px' link={ROUTES.INTRO} height='60px' width='330px'/>
      </TextWrapper>
    </Content>

    <Section>
        <SectionText>
            <img src={tv} alt=''/>
        </SectionText>
          <SectionText>
          <HeaderText2 fontSize='55px'>Watch Premium</HeaderText2>
          <HeaderText2 fontSize='55px' mt='40px'>Nollywood Movies</HeaderText2>      
          <HeaderText3 fontSize='30px' mt='40px' color={Colors.lightpurple}>Stream Unlimited Movies, Tv Programs,</HeaderText3>
          <HeaderText3 fontSize='30px' mt='10px' color={Colors.lightpurple} >Live Shows on any device</HeaderText3>
          <ButtonWrapper>
            <DownloadButton href=''>
              <img src={Google} alt='' width='200px'/>
           </DownloadButton>
           <DownloadButton href=''>
             <img src={Apple} alt='' width='200px'/>
           </DownloadButton>
          </ButtonWrapper>
        </SectionText>
    </Section>
    <Footer/>
    </BodyContainer>  )
}

export default LandingPage