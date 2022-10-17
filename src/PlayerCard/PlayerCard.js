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
    background-color : #ffffa6;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
`
const CardFoot = styled.div `
    height : 60%;
    background-color : #f3f3f3;
    font : normal 22px Tahoma;
    color : #cc77dd;
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
`

const CardImg = styled.img `
    display : block;
    margin : 3px auto 0px auto;
    border-radius : 50%;
    width : 95px;
    height : 95px
`

const PlayerCard = ({ name, image }) => {
    return (
            <Card>
                <CardHead>
                    <CardImg src={image}/> 
                </CardHead>
                <CardFoot>{name}</CardFoot>
            </Card>
    )
}

export default PlayerCard;