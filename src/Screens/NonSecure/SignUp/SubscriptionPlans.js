import React from 'react'
import styled from 'styled-components'
import { Header2 } from '../../../Components/Header'
import { BodyContainer } from '../../../Components/styles/Container.styled'
import { Colors} from '../../../Theme/Variables'
import { HeaderText3, NormalText, SwitchableText } from '../../../Components/Text'
import { ClickButton } from '../../../Components/Button'
import ROUTES from '../../../Navigation/routes'
import { Disabled, SmallText, Card, TextWrapper, Content, STab, STabList, STabPanel, STabs, TabCard, CardContainer, CardTitle, CardFooter, Enabled, Pricing, VerticalDivider, CardContent } from './styles/Subscription.styles'
import { useNavigate } from 'react-router-dom'
import Ok from '../../../Assets/Icons/Ok.png'
import Disable from '../../../Assets/Icons/disabled.png'
import {monthlyPlan, yearlyPlan}  from '../../../Data/PricePlan'


export default function SubscriptionPlans() {
 
const navigate = useNavigate();


return (
  
              <BodyContainer bg={Colors.white}>
                <Content>
                  <Header2/>
                    <TextWrapper>
                      <Card>
                        <HeaderText3  mb='30px' weight='600' color={Colors.black}>Choose A Plan</HeaderText3>
                        {/* <NormalText mr='-40px' mt='-13px' mb='10px' >Enter the folowing information to Personalize your account. </NormalText> */}
               
                        <STabs
                            selectedTabClassName='is-selected'
                            selectedTabPanelClassName='is-selected'
                        >
                            <STabList>
                            <STab>Monthly</STab>
                            <STab>Yearly<SmallText>17% Off</SmallText></STab>
                            </STabList>
                  

                            <STabPanel>
                                <CardContainer>
                                {  monthlyPlan.map(({types, info, amount, currency})=>{
                                    return(
                                 <TabCard>
                                 <CardTitle> {types}</CardTitle>
                                 <CardContent>
                                  Watch on:
                                  { 
                                  info.map(({title, enable}) =>{
                                    return(<SwitchableText fontSize='16px' mt='30px' enabled={enable}>{enable ? <Enabled src={Ok}/> : <Disabled src={Disable}/>}{title} </SwitchableText>)
                                     })
                                  }
                                  </CardContent>
                                 <CardFooter>  
                                 <Pricing><NormalText>{currency}</NormalText><HeaderText3 color='black' fontSize='30px'>{amount}</HeaderText3><NormalText>/Monthly</NormalText> </Pricing>              

                                   <ClickButton 
                                      text='Select'
                                      width='200px'/>
                                  </CardFooter>

                              </TabCard>
                              
                                    )
                               
                                     })}
                                    
                                </CardContainer>
                             </STabPanel>
                            <STabPanel>
                                <CardContainer>
                                {  yearlyPlan.map(({types, info, amount, currency})=>{
                                    return(
                                 <TabCard>
                                 <CardTitle> {types}</CardTitle>
                                 <CardContent>
                                  Watch on:
                                  { 
                                  info.map(({title, enable}) =>{
                                    return(<SwitchableText fontSize='16px' mt='30px' enabled={enable}>{enable ? <Enabled src={Ok}/> : <Disabled src={Disable}/>}{title} </SwitchableText>)
                                     })
                                  }
                                  </CardContent>
                                 <CardFooter>  
                                 <Pricing><NormalText>{currency}</NormalText><HeaderText3 color='black' fontSize='30px'>{amount}</HeaderText3><NormalText>/Monthly</NormalText> </Pricing>              

                                   <ClickButton 
                                      text='Select'
                                      width='200px'/>
                                  </CardFooter>

                              </TabCard>
                              
                                    )
                               
                                     })}
                                </CardContainer>
                                </STabPanel>
                        </STabs>
                        <NormalText>By continuing, you agree to the Terms of use, Privacy
                            Policy, and Community Standards of wakaati.com</NormalText>
                       </Card>
                    </TextWrapper>
          
          </Content>
        </BodyContainer>



  )
}


