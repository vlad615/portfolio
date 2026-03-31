import styled from "styled-components"
import { theme } from "../../../styles/Themes"
import { Container } from "../../../components/wrapper/Container"
import { ContactIcons } from "../../../components/icons/ContactIcons"
import { H1 } from "../../../components/title/H1"
import frame from "./../../../accets/Abstract.png"
import me from "../../../accets/me.webp"
import { StyledButton } from "../../../components/Buttons"
import { S } from "./StylesMain"
import { Testimony } from "./Testimony"
import { pinkLight, light } from "../../../styles/animations"

export const Main = () => {
    return (
        <Section>
            <ContactWrapper><ContactIcons direction="column" /></ContactWrapper> 
            <Container>
                <Wrapper>
                    <TextWrapper>
                        <H1>Vlad is a
                            <S.StyledSpan> web developer</S.StyledSpan> and
                            <S.StyledSpan> front-end developer</S.StyledSpan>
                        </H1>
                        <S.StyledP>He crafts responsive websites where technologies meet creativity</S.StyledP>
                        <StyledButton as="a" width="150px">Contact me!!</StyledButton>
                    </TextWrapper>
                    <S.ImgWrapper>
                        <S.Photo src={me} alt="Web Developer" />
                        <S.Frame src={frame} alt="" />
                    </S.ImgWrapper>
                </Wrapper>
                <Testimony />
            </Container>
        </Section>
)
}

const Section = styled.section`
    margin: 90px 0 75px;
    position: relative;
    overflow: hidden;


    &::after{
        content: "";
        position: absolute;
        width: 90px;
        height: 90px;
        border: 1px solid ${theme.color.font};
        right: 50%;
        bottom: 10%;
        transform: translateX(850px);
        animation: ${light} 2s ease-in-out infinite ;

    }
    
`

const ContactWrapper = styled.div`
    position: fixed;
    left: 50%;
    top: 200px;
    transform: translateX(-580px);
    z-index: 96;

    &::before{
        content: "";
        position: absolute;
        background-color: ${theme.color.font};
        width: 1px;
        height: 195px;
        top: -210px;
        right: 50%;
        animation: ${pinkLight} 2s ease-in-out infinite;
    }
    
    @media screen and (max-width: 1180px){
        display: none;
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


