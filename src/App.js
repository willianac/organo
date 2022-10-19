import React from 'react';

import Banner from './Banner/Banner';
import Form from './Form/Form';
import Team from './Team/Team';
import { Positions } from './Positions/Positions';

import styled from 'styled-components';
import "./App.css"

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
      players : []
    }
  }

  insertPlayer = (player) => {
    this.setState({players : [...this.state.players, player]})
  }
  
  removePlayer = (delPlayer) => {
    let filteredPlayers = this.state.players.filter(player => player.name !== delPlayer)
    this.setState({players : filteredPlayers})
  }

  render () {
    return (
      <div className='conteiner'>
        <Banner />
        <div className='formConteiner'>
          <Form onPlayerCreated={this.insertPlayer}/>
          <MainText>Monta tua seleção ai, pae!</MainText>
        </div>
        {Positions.map((position) =>  (position.position !== 'Selecione') ? <Team 
          key={position.position} 
          bg={position.primaryColor} 
          borderColor={position.secondaryColor} 
          positionName={position.position} 
          players={this.state.players.filter((player) => player.position === position.position)}
          delAction={this.removePlayer} 
          />  
          : 
          ''
          )}
      </div>
    );
  }
}

export default App;
