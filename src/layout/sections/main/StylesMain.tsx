import { styled } from "styled-components"
import { theme } from "../../../styles/Themes"

const StyledSpan = styled.span`
    background-image: linear-gradient(90deg, ${theme.color.accent} 55%, ${theme.color.secondAccent} 100%);
    background-clip: text;         
    color: transparent;
`

const StyledP = styled.p`
    margin: 30px 0 25px;
    @media ${theme.media.tablet}{
        margin: 25px 0;
    }    
`

const ImgWrapper = styled.div`
    position: relative;
    max-width: 300px;
    max-height: 300px;
    display: flex;
    justify-content: center;
`

const Frame = styled.img`
    position: absolute;
    max-width: 110%;
    top: -35px;
    right: -15px;
`

const Photo = styled.img`
    margin-top: 25px;
    width: 70%;
    object-fit: cover;
    border: solid 5px transparent;
    border-radius: 50%;
    background: linear-gradient(to bottom, ${theme.color.accent}, ${theme.color.secondAccent}) border-box; 
`

export const S = {
    StyledSpan,
    StyledP,
    ImgWrapper,
    Frame,
    Photo,
}