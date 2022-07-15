import styled from 'styled-components';
import { Colors, FontSize} from '../Theme/Variables';

export const HeaderText2 = styled.text`
    font-weight:${({ weight }) => weight || '800'};
    font-size: ${ ({fontSize}) => fontSize || `${FontSize.header2}px`};
    line-height:${({ lineHeight }) => lineHeight || '36px' };
    color:${({ color }) => color ||  `${Colors.white}`};
    margin-top: ${({ mt }) => mt || '14px'};
    font-family:${({ font }) => font || `'Poppins', sans-serif`};
`;

export const HeaderText3 = styled.text`
    font-size: ${({fontSize}) => fontSize || `${FontSize.header3}px`};
    line-height: 24px;
    font-weight:${({ weight }) => weight || '400'};
    color: ${({ color }) => color  || `${Colors.white}`};
    margin-top: ${({ mt }) => mt || '0px'};
    font-family:${({ font }) => font || `'Poppins', sans-serif`};
    margin-right: ${({ mr }) => mr || '0px'};
    margin-bottom: ${({ mb }) => mb || '0px'};
`;

export const SwitchableText = styled.text`
    font-size: ${({fontSize}) => fontSize || `${FontSize.header3}px`};
    line-height: 24px;
    font-weight:${({ weight }) => weight || '400'};
    color: ${({enabled})=> enabled ? `${Colors.black}` : `${Colors.lightgrey}`};
    margin-top: ${({ mt }) => mt || '0px'};
    font-family:${({ font }) => font || `'Poppins', sans-serif`};
    margin-right: ${({ mr }) => mr || '0px'};
    margin-bottom: ${({ mb }) => mb || '0px'};
`

export const SubHeaderText = styled.text`
    font-size: ${`${FontSize.header3}px`};
    line-height: 30px;
    font-weight:${({ weight }) => weight || '400'};
    color: ${({ color }) => color ||  `${Colors.black}`};
    margin-top: ${({ mt }) => mt || '14px'};
    font-family:${({ font }) => font || `'Poppins', sans-serif`};

`;

export const HeaderText4 = styled.text`
    font-size: ${`${FontSize.header4}px`};
    line-height: 24px;
    font-weight: ${({ weight }) => weight || '400'};
    color: ${({ color }) => color || {} `${Colors.white}`};
    font-family:${({ font }) => font || `'Poppins', sans-serif`};


`;

export const NormalText = styled.text`
    color: ${({ color }) => color ||  `${Colors.black}`};
    font-weight: ${({ weight }) => weight || '400'};
    font-size: ${({fontSize}) => fontSize || `${FontSize.normal2}px`};
    line-height: 20px;
    margin-top: ${({ mt }) => mt || '14px'};
    text-align: ${({ align }) => align || 'left'};
    font-family:${({ font }) => font || `'Poppins', sans-serif`};
    margin-right: ${({ mr }) => mr || '0px'};
    margin-bottom: ${({ mb }) => mb || '0px'};
`;

export const SmallText = styled.text`
    color: ${({ color }) => color || `${Colors.black}`};
    font-weight: ${({ weight }) => weight  || '600'};
    font-size: ${({ fontSize }) => fontSize || FontSize.small}px;
    line-height: 18px;
    text-align: ${({ align }) => align || 'left'};
    font-family:${({ font }) => font || `'Poppins', sans-serif`};
    margin-top: ${({ mt }) => mt || '0px'};
    margin-bottom: ${({ mb }) => mb || '0px'};

`;
