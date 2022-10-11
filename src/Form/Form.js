import styled from "styled-components";
import TextField from "../TextField/TextField";
import React from "react";

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
    position : relative;
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
`


const Form = ({inputHandler, submitHandler}) => {
    return (
        <FormDiv>
            <FormText>Preencha os dados corretamente para inserir o jogador</FormText>
           <FormWrapper >
                <TextField name={'Nome'} placeholder={'Digite seu nome'} input={inputHandler[0]}/>
                <TextField name={'Posição'} placeholder={'Digite a posição'} input={inputHandler[1]}/>
                <TextField name={'Foto'} placeholder={'Digite o endereço da imagem'} input={inputHandler[2]}/>
           </FormWrapper>
           <FormButton onClick={submitHandler}>Enviar</FormButton>
        </FormDiv>
    )  
}

export default Form;