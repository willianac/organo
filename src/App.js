import React from 'react';
import Banner from './Banner/Banner';
import Form from './Form/Form';
import "./App.css"
import styled from 'styled-components';
import Card from './Card/Card';

const MainText = styled.h1 `
  inline-size: 35%;
  overflow-wrap: break-word;
  color : white;
  font-weight : 800;
  font-size 108px;
`

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      nameInput : '',
      positionInput : '',
      imageInput : '',
      imageUrl  : ''
    }
  }

  handleNameInput = (event) => {
    const name = event.target.value
    this.setState({nameInput : name}, () => console.log(this.state.nameInput))
  }

  handlePositionInput = (event) => {
    const position = event.target.value
    this.setState({positionInput : position}, ()=> console.log(this.state.positionInput))
  }

  handleImgInput = (event) => {
    const image = event.target.value
    this.setState({imageInput : image}, ()=> console.log(this.state.imageInput))
  }

  handleSubmit = () => {
    this.setState({imageUrl : this.state.imageInput})
  }
  render () {
    return (
      <div className='conteiner'>
        <Banner />
        <div className='formConteiner'>
          <Form inputHandler={[this.handleNameInput, this.handlePositionInput, this.handleImgInput]} submitHandler={this.handleSubmit}/>
          <MainText>Lorem Ipsum is simply dummy text of the </MainText>
        </div>
        <Card imag={this.state.imageInput}/>
      </div>
    );
  }
}

export default App;
