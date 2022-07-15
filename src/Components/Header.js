import React from 'react'
import styled from 'styled-components'
import Logo from '../Assets/Images/Wakaati.png'
import { NavButton } from './Button'
import { HeaderText3} from './Text'
import ROUTES from '../Navigation/routes'
import { TextNav } from './Links'
import { Link } from 'react-router-dom'
import { Colors } from '../Theme/Variables'

export const Header = () => {

    const Container = styled.div`
        padding: 0 40px;
        margin: 0 auto;
    `
    const Header = styled.header`
        padding: 30px 0;
    `
    const Nav = styled.nav`
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 40px;
    `
    const ButtonWrapper = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: space-between;

    `
    const ImgLink = styled(Link)`
    
    `

  return (
        <Header>
            <Container>
                <Nav>
                    <ImgLink to={ROUTES.LANDING_PAGE}>
                        <img src={Logo} alt='WakaatiLogo' width='180px'/>
                    </ImgLink>
                <ButtonWrapper>
                    <HeaderText3 mt='30px'>Already a Member? </HeaderText3>
                    <NavButton text='Sign in' link={ROUTES.SIGNIN}/>
                </ButtonWrapper>
                </Nav>
            </Container>
        </Header>
  )
}


export const Header2 = () => {

    const Container = styled.div`
        padding: 0 40px;
        margin: 0 auto;
`
    const Header = styled.header`
        padding: 40px 0;
`
    const Nav = styled.nav`
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 40px;
`
    const ButtonWrapper = styled.div`
        display: flex;
        flex-direction: row;

`
 const ImgLink = styled(Link)`
    
    `

return (
    <Header>
        <Container>
            <Nav>
                <ImgLink to={ROUTES.LANDING_PAGE}>
                   <img src={Logo} alt='WakaatiLogo' width='180px'/>
                </ImgLink>
                <ButtonWrapper>
                    <TextNav text='Sign in' link={ROUTES.SIGNIN} color={Colors.black} weight='600' size='50' hover={Colors.purple}/>
                </ButtonWrapper> 
            </Nav>
        </Container>
    </Header>
)

}