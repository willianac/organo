import styled from "styled-components"
import { Fragment } from "react"
import { Positions } from "../Positions/Positions"

const Label = styled.label `
    color : #100e0e;
    font-size : 24px;
    margin-bottom : 5px; 
`

const Select = styled.select `
    width : 100%;
    height : 44px;
    color : grey;
    border : none;
    border-radius : 6px;
    font-size : 16px;
    box-shadow : 8px 8px 16px rgba(0,0,0,0.08);
`

const Dropdown = (props) => {
    const inputOption = (evento) => {
        props.inputChange(evento.target.value)
    }

    return (
       <>
            <Label>{props.name}</Label>
            <Select onChange={inputOption}>
                {Positions.map((position) => {
                    return <option value={position.position} key={position.position}>{position.position}</option>
                })}
            </Select>
       </>
    )
}
export default Dropdown;