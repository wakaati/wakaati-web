import styled from "styled-components";
import { Colors, FontSize } from "../Theme/Variables";
import { Link } from 'react-router-dom'

const TextLink = styled(Link)`
    color: ${({ color }) => color ||  `${Colors.grey}`};
    font-weight: ${({ weight }) => weight || '400'};
    font-size: ${({size}) => size || `${FontSize.normal2}px`};
    line-height: 20px;
    margin: ${({ margin }) => margin || 0};
    text-align: ${({ align }) => align || 'left'};
    font-family:${({ font }) => font || `'Poppins', sans-serif`};
    text-decoration: none;    
    &:hover{
        color: ${({hover}) => hover || `${Colors.white}`};
    }
`

export const TextNav = ({text, link, color, weight, size, hover}) => {
    return (
        <TextLink to={link} color={color} weight={weight} size={size} hover={hover}>
                {text}
        </TextLink>
        )
    }