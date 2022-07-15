import styled from 'styled-components';
import { Colors } from '../../Theme/Variables';


export const BodyContainer = styled.div`
    background-color: ${({bg}) => bg || Colors.black};
    max-width: 100%;  
`
export const ContentWrapper = styled.div`
    max-width: 100%;
    padding: 0 40px;
    margin: 0 auto;
    min-height: 50px;
`

export const RowWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const ColumnWrapper = styled.div`
    display: flex;
    flex-direction: column;

`