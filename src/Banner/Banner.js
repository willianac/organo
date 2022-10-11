import styled from "styled-components"
import { Fragment } from "react"

const Background = styled.div `
    height : 300px;
`

const BannerText = styled.p `
    padding-left : 180px;
    padding-top : 20px;
    color : white;
    font-size : 62px;
`



const Banner = () => {
    return (
        <>
            <Background>
                <BannerText>Organo</BannerText>
            </Background>
        </>
    )
}

export default Banner;