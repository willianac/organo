import styled from "styled-components"

const Card = styled.section `
    display : flex;
    flex-direction : column;
    height : 280px;
    width : 210px;
    margin : auto;
`

const CardHead = styled.div `
    height : 40%;
    background-color : #0077ff;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
`
const CardFoot = styled.div `
    height : 60%;
    background-color : #ffffff;
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
`

const CardDelete = styled.span `
    position : relative;
    top : 1px;
    left : 88px;
    font : bold 35px Arial;
    cursor : pointer;
    &:hover {
        color: red;
      }
`

const CardImg = styled.img `
    display : block;
    position : relative;
    margin : 22px auto 0px auto;
    border-radius : 50%;
    width : 100px;
    height : 100px;
    border : 5px solid white;
`

const CardName = styled.h2 `
    font : normal 22px Tahoma;
    color : #cc77dd;
    margin-top : 52px;
`

const PlayerCard = ({ name, image, del }) => {
    
    const deleteCard = (player) => {
        del(player.target.id)
    }

    return (
        <Card>
            <CardHead>
                <CardDelete id={name} onClick={deleteCard}>×</CardDelete>
                <CardImg src={image}/> 
            </CardHead>
            <CardFoot>
                <CardName>{name}</CardName>
            </CardFoot>
        </Card>
    )
}

export default PlayerCard;