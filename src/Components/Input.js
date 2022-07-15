import styled from "styled-components";
import { Colors } from "../Theme/Variables";
import { NormalText } from "./Text";
import EyeIcon from "../Assets/Icons/eye.png"
import Open from "../Assets/Icons/open.png"
import Close from "../Assets/Icons/close.png"
import { useState } from "react";


const Input = styled.input`
  font-size: 14px;
  padding: 10px;
  background: ${`${Colors.inputs.textInput}`};
  border-radius: 3px;
  width: 300px;
  height: 40px;
  border: 2px solid ${`${Colors.lightgrey}`};
  &:focus {
    outline: none;
    border-color: ${`${Colors.purple}`};
  }

  ::placeholder {
    color: ${`${Colors.inputs.placeholder}`};
  }
`
const Container = styled.div`
  display:  flex;
  flex-direction: column;

`
const Eye = styled.div`
  margin-top: -25px;
  margin-left: 250px;
  width: 40px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  cursor: pointer;
  position: relative;

`



export const PrimaryInput = ({ placeholder, inputType, value, onChange, error, label, name }) => {
  return (
    <Container>
      <NormalText>{label}</NormalText>
        <Input
          placeholder={placeholder}
          type={inputType}
          value={value}
          onChange={onChange}
          name={name}
        />
      <NormalText color={Colors.error}>{error}</NormalText>
    </Container>
  )
}

export const PasswordInput = ({ placeholder, label, value, onChange, error, name }) => {
  const [hidePassword, setHidePassword] = useState(true)
  return (
    <Container>
      <NormalText>{label}</NormalText>    
        <Input
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          name={name}
          type={hidePassword ? 'password' : 'text' }
          placeholderTextColor={`${Colors.inputs.placeholder}`}
        />
        <Eye onClick={() => setHidePassword(!hidePassword)}>
          <img src={hidePassword ? Close : Open} width='14px'/>
        </Eye>
     
      <NormalText color={Colors.error}>{error}</NormalText>
    </Container>
  )
}

export const TextTips = ({text}) => {
  return(
  <Container>
  <NormalText>{text}</NormalText>    
  
  </Container>
  )
}