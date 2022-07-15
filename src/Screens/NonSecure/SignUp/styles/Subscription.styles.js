import styled from "styled-components";
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import { Colors, FontSize } from '../../../../Theme/Variables'
import bg from '../../../../Assets/Icons/WAKAATILOGO.png'

export const CardContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
`
export const TabCard = styled.div`
    padding: 30px;
    border-radius: 5px;
    width: 45%;
    background-color: ${`${Colors.white}`};
    /* box-shadow: 2px 2px 4px 2px rgba(0, 0, 0, 0.15); */
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
 `
export const STabs = styled(Tabs)`
    font-family: BlinkMacSystemFont, "Segoe UI", sans-serif;
    font-size: 12px;
    width: 80%;
`

export const STabList = styled(TabList)`
    list-style-type: none;
    padding: 4px;
    display: flex;
    margin-bottom: 50px;
    justify-content: center;
`
STabList.tabsRole = 'TabList';

export const STab = styled(Tab)`
    margin-right: 4px;
    border: 2px solid ${`${Colors.purple}`};
    padding: 10px;
    border-radius: 5px;
    user-select: none;
    width: 200px;
    text-align: center;
    font-size: 16px;
    font-weight: bold;
    color: ${`${Colors.purple}`};
    display: flex;
    justify-content: center;
    flex-direction: column;
    cursor: arrow;

    &.is-selected {
    color: ${`${Colors.white}`};
    background: ${`${Colors.purple}`};
    border-bottom: 1px solid white;
    }

    &:focus {
    outline: none;
    }
`
STab.tabsRole = 'Tab';

export const STabPanel = styled(TabPanel)`
    display: none;
    flex-direction: row;
    min-height: 50vh;
    padding: 4px;
    margin-top: -5px;

    &.is-selected {
    display: block;
    }
`
STabPanel.tabsRole = 'TabPanel';

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
`

export const Card = styled.div`
    margin-top: -100px;
    min-width: 80%;
    border-radius: 10px;
    background-color: ${`${Colors.white}`};
    padding: 30px 50px;
    display: flex;
    align-items: center;
    flex-direction: column;
    /* box-shadow: 2px 2px 4px 2px rgba(0, 0, 0, 0.15); */
`

export const CardTitle = styled.b`
    font-size: ${`${FontSize.header3}px`};
`
export const CardFooter = styled.div`
margin-top: 20px;
 display: flex;
 justify-content: center;
 align-items: center;
 flex-direction: column;
`
export const Enabled = styled.img`
margin-right: 10px;
`
export const Disabled = styled.img`
margin-right: 10px;
`

export const Pricing = styled.div`

`
export const VerticalDivider = styled.div`
border-left: 1px solid ${`${Colors.lightgrey}`};
min-height: 150px;

`
export const CardContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 10px;
    border-top: 1px solid ${`${Colors.lightgrey}`};
    border-bottom: 1px solid ${`${Colors.lightgrey}`} ;
    width: 100%;
    margin-top: 20px;
    font-size: ${`${FontSize.normal3}px`};
`

export const SmallText = styled.div`
    font-size: 14px;
    font-weight: 400;
`

export default { SmallText, Card, TextWrapper, Content, STab, STabList, STabPanel, STabs, TabCard, CardContainer, CardTitle, CardFooter, Enabled, Pricing, VerticalDivider, CardContent};