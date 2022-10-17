import styled from "styled-components";

const TextWrapper = styled.div `
    margin : 35px 0px
`
const TextInput = styled.input `
    width : 100%;
    height : 44px;
    border : none;
    border-radius : 6px;
    outline : none;
    color : grey;
    font-size : 16px;
    box-shadow : 8px 8px 16px rgba(0,0,0,0.08);
`

const TextLabel = styled.label `
   color : #100e0e;
   font-size : 24px;
   margin-bottom : 5px; 
`

const TextField = (props) => {
    const inputTyping = (event) => {
        props.inputChange(event.target.value)
    }
    return (
        <TextWrapper>
            <TextLabel>{props.name}</TextLabel>
            <TextInput value={props.value} required placeholder={props.placeholder} onChange={inputTyping}/>
        </TextWrapper>
    )
}

export default TextField;