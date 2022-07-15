import styled from "styled-components";
import { Colors } from "../Theme/Variables";
import { HeaderText4,  HeaderText3, NormalText } from "./Text";
import { Link } from "react-router-dom";



const NavLink = styled(Link)`
    height:${({height})=> height || '50px' } ;
    width: ${({width})=> width || '100px' };
    color: white;
    border-radius: ${({borderRadius})=> borderRadius || '5px' };
    margin-top: ${({mt}) => mt || '20px'};
    margin-bottom: 20px;
    align-items: center;
    justify-content: center;
    display: flex;
    text-decoration: none;
    cursor: pointer;
    background-color:${({enabled})=> enabled ? `${Colors.buttons.primary.background}` : `${Colors.buttons.primary.disabled}`};

    &:hover,
    &:focus{
        opacity: 0.7;
        transform: scale(0.98);
        }
`

const PrimaryClick = styled.button`
    height:${({height})=> height || '50px' } ;
    width: ${({width})=> width || '100px' };
    color: white;
    border-radius: ${({borderRadius})=> borderRadius || '5px' };
    margin-top: ${({mt}) => mt || '20px'};
    margin-bottom: 20px;
    align-items: center;
    justify-content: center;
    display: flex;
    text-decoration: none;
    outline: none;
    border: none;
    cursor: pointer;
    background-color:${({enabled})=> enabled ? `${Colors.buttons.primary.background}` : `${Colors.buttons.primary.disabled}`};

    &:hover,
    &:focus{
        opacity: 0.7;
        transform: scale(0.98);
        }
`


export const PrimaryButton = ({ text, link, enabled=true, width, height, mt }) => {

    return (
        <NavLink to={link} disabled={!enabled} enabled={enabled} width={width} height={height} mt={mt}>
            <HeaderText4 weight='400' color={Colors.buttons.primary.color}>
                {text}
            </HeaderText4>
        </NavLink>
    )
}

export const ClickButton = ({ text, onClick, enabled=true, width, height, mt }) => {

    return (
        <PrimaryClick onClick={onClick} disabled={!enabled} enabled={enabled} width={width} height={height} mt={mt} type='submit'>
            <HeaderText4 weight='400' color={Colors.buttons.primary.color}>
                {text}
            </HeaderText4>
        </PrimaryClick>
    )
}

export const NavButton = ({ text, link, enabled=true }) => {

    return (
        <NavLink to={link} disabled={!enabled} enabled={enabled}>
            <HeaderText3 weight='300' color={Colors.buttons.primary.color}>
                {text}
            </HeaderText3>
        </NavLink>
    )
}


