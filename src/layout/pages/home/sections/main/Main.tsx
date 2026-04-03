import styled from "styled-components"
import { theme } from "../../../../../styles/Themes"
import { Container } from "../../../../../components/wrapper/Container"
import { H1 } from "../../../../../components/title/H1"
import frame from "../../../../../accets/Abstract.png"
import me from "../../../../../accets/me.webp"
import { StyledButton } from "../../../../../components/Buttons"
import { S } from "./StylesMain"
import { Testimony } from "./Testimony"
import { light } from "../../../../../styles/animations"
import { Fade } from "react-awesome-reveal"


export const Main = () => {
    return (
        <Section>
            
            <Container>
                <Wrapper>
                    <Fade direction="left">
                        <TextWrapper>
                            <H1>Vlad is a
                                <S.StyledSpan> web developer</S.StyledSpan> and
                                <S.StyledSpan> front-end developer</S.StyledSpan>
                            </H1>
                            <S.StyledP>He crafts responsive websites where technologies meet creativity</S.StyledP>
                            <StyledButton as="a" >Contact me!!</StyledButton>
                        </TextWrapper>
                    </Fade>
                    <Fade direction="right">
                        <S.ImgWrapper>
                            <S.Photo src={me} alt="Web Developer" />
                            <S.Frame src={frame} alt="" />
                        </S.ImgWrapper>
                    </Fade>
                    
                </Wrapper>
                <Testimony />
            </Container>
        </Section>
)
}

const Section = styled.section`
    margin: 90px 0 75px;
    overflow: hidden;
    position: relative;


    &::after{
        content: "";
        position: absolute;
        width: 90px;
        height: 90px;
        border: 1px solid ${theme.color.font};
        right: 50%;
        bottom: 10%;
        transform: translateX(690px);
        animation: ${light} 2s ease-in-out infinite;
    }
    
`

const Wrapper = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;

    @media ${theme.media.tablet}{
        flex-wrap: wrap;

        ${StyledButton}{
            display: none;
        }
    }
` 

const TextWrapper = styled.div`
    max-width: 540px;
`


