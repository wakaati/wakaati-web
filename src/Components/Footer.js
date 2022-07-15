import styled from "styled-components";
import React from 'react'
import { ContentWrapper, RowWrapper, ColumnWrapper } from "./styles/Container.styled";
import { HeaderText3 } from "./Text";
import ROUTES from "../Navigation/routes";
import { TextNav } from "./Links";
import FeatherIcons from 'feather-icons-react';
import { Colors } from "../Theme/Variables";



export default function Footer() {

const LinkWrapper = styled.span`
    display: flex;
    justify-content: space-evenly;
    margin-top: 15px;
    width: 50%;
`
const Footer = styled.div`
    padding: 40px 0;
`
const SocialLink = styled.a`
    text-decoration: none;
    display: flex;
    border-color: none;
`
  return (
    <Footer>
        <ContentWrapper>
            <ColumnWrapper>
                <HeaderText3>Need Help? Contact us</HeaderText3>
            </ColumnWrapper>
            <RowWrapper>
                <LinkWrapper>
                <TextNav text='Privacy' link={ROUTES.PRIVACY}/>
                <TextNav text='Term of Use' link={ROUTES.TERM_OF_USE}/>
                <TextNav text='Contact Us' link={ROUTES.CONTACT}/>
                </LinkWrapper>

                <LinkWrapper>
                  <SocialLink href="https://facebook.com">
                    <FeatherIcons icon='facebook' fill={Colors.white} color={Colors.white}/>
                  </SocialLink>
                  <SocialLink href="https://twitter.com">
                    <FeatherIcons icon='twitter' fill={Colors.white} color={Colors.white} />
                  </SocialLink>
                  <SocialLink href="https://instagram.com">
                    <FeatherIcons icon='instagram' fill={Colors.white} color={Colors.black}/>
                  </SocialLink>
                </LinkWrapper>
            </RowWrapper>
        </ContentWrapper>
    </Footer>
  )
}
