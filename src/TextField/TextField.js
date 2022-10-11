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
   display : block;
   position : relative;
   color : #100e0e;
   font-size : 24px;
   margin-bottom : 5px; 
`

const TextField = (props) => {
    return (
        <TextWrapper>
            <TextLabel>{props.name}</TextLabel>
            <TextInput placeholder={props.placeholder} onChange={props.input}/>
        </TextWrapper>
    )
}

export default TextField;