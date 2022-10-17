import styled from "styled-components";
import TextField from "../TextField/TextField";
import Dropdown from "../Dropdown/Dropdown";
import React, { useState } from "react";

const FormText = styled.h1 `
    font-family : Arial;
    font-size : 18px;
    color : #100e0e;
`
const FormDiv = styled.div `
    width : 35%;
    height : 490px;
    background-color : #f0edf1;
    display: flex;
    justify-content : center;
    flex-direction : column;
    align-items : center;
    border-radius : 6px;
    box-shadow : 8px 8px 16px rgba(0,0,0,0.08);
`
const FormWrapper = styled.form `
    width : 80%;
`
const FormButton =  styled.button `
    width : 80%;
    height : 38px;
    background-color : #B721FF;
    border-radius : 6px;
    cursor : pointer;
    border : none;
    color : white;
    font : bold 16px Helvetica;
    margin-top : 18px;
    &:hover {
        background-color: #067bda;
      }
`

const Form = ( { onPlayerCreated }) => {

    const [name, setName] = useState('')
    const [image, setImage] = useState('')
    const [position, setPosition] = useState('')

    const createPlayer = () => {
        if(!name || !image || !position) return alert('Preencha com os dados necessários.')
        const player = {  
            name : name,
            image : image,
            position : position
        }
        onPlayerCreated(player)
        setName('')
        setImage('')
    }

    return (
        <FormDiv>
            <FormText>Preencha os dados corretamente para inserir o jogador</FormText>
            <FormWrapper>
                <TextField value={name} name={'Nome'} placeholder={'Digite o nome do jogador'} inputChange={(value => setName(value))}/>
                <TextField value={image} name={'Imagem'} placeholder={'Digite a URL da imagem'} inputChange={(value => setImage(value))}/>
                <Dropdown name={'Posição'} inputChange={(value) => setPosition(value)}/>
            </FormWrapper>
            <FormButton onClick={createPlayer}>Enviar</FormButton>
        </FormDiv>
    )  
}

export default Form;