import styled from "styled-components"
import { theme } from "../../../Themes"
import { FlexWrapper } from "../../../../components/wrapper/FlexWrapper"
import { Container } from "../../../../components/wrapper/Container"
import { ContactIcons } from "../../../../components/icons/ContactIcons"
import { H1 } from "../../../../components/title/H1"
import frame from "./../../../../accets/Abstract.png"
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
        right: 50%;
}
`

const Section = styled.section`
    margin: 30px 0 75px;
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
    max-width: 110%;
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
`

const StyledQ = styled.q`
    position: relative;
    font-weight: 500;
    font-size: 24px;
    color: #fff;
    padding: 30px;
    border: 1px solid ${theme.color.font};

    & + cite{
        font-style: normal;
        font-size: 24px;
        color: #fff;
        padding: 15px;
        border: 1px solid ${theme.color.font};
    }

    &::before{
        content: open-quote;
        color: ${theme.color.font};
        background-color: ${theme.color.primaryBg};
        height: 30px;
        font-size: 2.5em;
        position: absolute;
        top: -25px;
    }

    &::after{
        content: close-quote;
        position: absolute;
        display: inline-block;
        transform: rotate(180deg);
        color: ${theme.color.font};
        background-color: ${theme.color.primaryBg};
        height: 30px;
        font-size: 2.5em;
        position: absolute;
        bottom: -18px;
        right: 20px
    }
`