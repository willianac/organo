import React from "react";
import styled from "styled-components";
import PlayerCard from "../PlayerCard/PlayerCard";

const TeamConteiner = styled.section `
    width : 80%;
    height : 370px;
    margin : 0px auto 18px auto;
    text-align : center;
    background-color : ${props => props.bg ? `${props.bg}` : "white"};
`

const TeamName = styled.h3 `
    display : inline-block;
    font : bold 32px Cambria, Georgia, serif;
    color : #161618;
    border-bottom : 4px solid ${props => props.borderColor ? `${props.borderColor}` : "white"};
`

const TeamGroup = styled.div `
    display : flex;
    justify-content : space-around;
    flex-wrap : wrap;
    margin-top 28px;
`

const Team = ({ bg, borderColor, positionName, players, delAction }) => {

    return ( 
        players.length > 0 ?
        <div>
             <TeamConteiner bg={bg}>
                <TeamName borderColor={borderColor}>{positionName}</TeamName>
                <TeamGroup>
                    {players.map((player, index) => 
                        <PlayerCard 
                            name={player.name} 
                            image={player.image}
                            key={index}
                            del={delAction}
                        />)}
                </TeamGroup>
            </TeamConteiner>
        </div>
        : 
        <div></div>
    )
}

export default Team;