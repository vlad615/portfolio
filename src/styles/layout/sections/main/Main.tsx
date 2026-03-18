import styled from "styled-components"
import { theme } from "../../../Themes"
import { FlexWrapper } from "../../../../components/wrapper/FlexWrapper"
import { Container } from "../../../../components/wrapper/Container"
import { ContactIcons } from "../../../../components/icons/ContactIcons"
import { H1 } from "../../../../components/title/H1"
import { Icon } from "../../../../components/icons/Icon"
import frame from "./../../../../accets/elements/Abstract.png"
import coma from "../../../../accets/elements/coma.svg"
import me from "../../../../accets/me.webp"
import { StyledButton } from "../../../../components/Buttons"

export const Main = () => {
    return (
        <Section>
            <ContactWrapper><ContactIcons direction="column" /></ContactWrapper> 
            <Container>
                <FlexWrapper $justify="space-between" $align="flex-end">
                    <TextWrapper>
                        <H1>Vlad is a
                            <StyledSpan> web developer</StyledSpan> and
                            <StyledSpan> front-end developer</StyledSpan>
                        </H1>
                        <StyledP>He crafts responsive websites where technologies meet creativity</StyledP>
                        <StyledButton as="a" width="150px">Contact me!!</StyledButton>
                    </TextWrapper>
                    <ImgWrapper>
                        <Photo src={me} alt="Web Developer" />
                        <Frame src={frame} alt="" />
                    </ImgWrapper>
                </FlexWrapper>
                
                <QuotWrapper>
                    <StyledQ>With great power comes great electricity bill</StyledQ>
                    <cite>- Dr. Who</cite>
                </QuotWrapper>
            </Container>
        </Section>

    )
}

const Section = styled.section`
    margin: 30px 0 75px;
`

const ContactWrapper = styled.div`
    position: fixed;
    left: 50%;
    transform: translateX(-580px);

    &::before{
        content: "";
        position: absolute;
        background-color: ${theme.color.font};
        width: 1px;
        height: 120px;
        top: -135px;
        right: 40%;
}
`
const TextWrapper = styled.div`
    max-width: 540px;
`

const StyledSpan = styled.span`
    background-image: linear-gradient(90deg, ${theme.color.accent} 55%, ${theme.color.secondAccent} 100%);
    -webkit-background-clip: text; 
    background-clip: text;         
    color: transparent;
`

const StyledP = styled.p`
    margin: 30px 0 25px;
`

const ImgWrapper = styled.div`
    position: relative;
    max-width: 300px;
    max-height: 300px;
    /* &::before{
        content: "";
        background-image: url(${frame});
        display: inline-block;
        position: absolute;
        width: 300px;
        height: 300px;  
    } */
`

const Frame = styled.img`
    position: absolute;
    width: 110%;
    top: -60px;
    right: 30px;
`

const Photo = styled.img`
    width: 70%;
    object-fit: cover;
    border: solid 5px transparent;
    border-radius: 50%;
    background: linear-gradient(to bottom, ${theme.color.accent}, ${theme.color.secondAccent}) border-box; 
`

const QuotWrapper = styled.div`
    margin-top: 110px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-self: center;
    position: relative;

    &::before{
        content: "";
        display: inline-block;
        background-image: url(${`${coma}`});
        width: 60px;
        height: 60px;
        position: absolute;

    }
`

const StyledQ = styled.q`
    font-weight: 500;
    font-size: 24px;
    color: #fff;
    padding: 30px;
    border: 1px solid #abb2bf;

    & + cite{
        font-weight: 400;
        font-size: 24px;
        color: #fff;
        padding: 15px;
        border: 1px solid #abb2bf;
    }

    &::before{
        content: "";
    }

    &::after{
        content: "";
    }
`