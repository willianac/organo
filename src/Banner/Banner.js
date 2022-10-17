import styled from "styled-components";
import ball from "./ball2.png"

const Background = styled.div `
    width : 80%;
    height : 300px;
    margin : auto;
`

const BannerText = styled.p `
    padding-top : 20px;
    color : white;
    font-size : 62px;
`

const BannerImg = styled.img `
    width : 50px;
`

const Banner = () => {
    return (
        <Background>
            <BannerText>Organo <BannerImg src={ball}/> </BannerText>
        </Background>
    )
}

export default Banner;