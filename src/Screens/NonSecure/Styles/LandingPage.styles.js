import styled from "styled-components"
import bg from '../../../Assets/Images/bg.png'
import { Fadeanimation } from '../../../Components/Animation/index'


export const Content = styled.section`
background-image: url(${bg});
background-repeat: no-repeat;
background-size: cover;
padding-bottom: 180px;
`

export const TextWrapper = styled.div`
margin-top: 50px;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
animation-name: ${Fadeanimation};
animation-duration: 10s;
`
export const Section = styled.section`
margin: 1px 0;
display: flex;
background-image:  linear-gradient(90deg, #520A5E, #000);
padding: 90px 200px;
flex-direction: row;
justify-content: space-between;
`
export const SectionText = styled.div`
display: flex;
flex-direction: column;
`
export const DownloadButton = styled.a`
text-decoration: none;
`
export const ButtonWrapper = styled.span`
display: flex;
flex-direction: row;
margin-top: 20px;
justify-content: space-between;`

export const Card = styled.div`
  min-width: 30%;
  border-radius: 10px;
  padding: 30px 50px;
  display: flex;
  align-items: center;
  flex-direction: column;
  align-items: flex-start;
  background-image: linear-gradient(130deg, rgba(0, 0, 0, 0.5), rgba(255, 255, 255, 0.2));
`

export default {Card, Content, TextWrapper, Section, SectionText, DownloadButton, ButtonWrapper};