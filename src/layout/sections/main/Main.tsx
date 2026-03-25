import styled from "styled-components"
import { theme } from "../../../styles/Themes"
import { Container } from "../../../components/wrapper/Container"
import { ContactIcons } from "../../../components/icons/ContactIcons"
import { H1 } from "../../../components/title/H1"
import frame from "./../../../accets/Abstract.png"
import me from "../../../accets/me.webp"
import { StyledButton } from "../../../components/Buttons"
import { font } from "../../../styles/Commun"

export const Main = () => {
    return (
        <Section>
            <ContactWrapper><ContactIcons direction="column" /></ContactWrapper> 
            <Container>
                <Wrapper>
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
                </Wrapper>
                
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
        right: 50%;}
    
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

const StyledSpan = styled.span`
    background-image: linear-gradient(90deg, ${theme.color.accent} 55%, ${theme.color.secondAccent} 100%);
    -webkit-background-clip: text; 
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

const QuotWrapper = styled.div`
    margin-top: 110px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-self: center;    
`

const StyledQ = styled.q`
    position: relative;

    ${font({color: "#fff", weight: 500, maxSize: 24, minSize: 16})}
    padding: 30px;
    border: 1px solid ${theme.color.font};

    & + cite{
        font-style: normal;

        ${font({color: "#fff", maxSize: 24, minSize: 16})}
        padding: 15px;
        border: 1px solid ${theme.color.font};
    }

    &::before{
        content: open-quote;
        color: ${theme.color.font};
        background-color: ${theme.color.primaryBg};
        height: 30px;
        font-size: 64px;
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
        font-size: 64px;
        position: absolute;
        bottom: -18px;
        right: 20px
    }

    @media ${theme.media.tablet}{
        padding: 25px;

        & + cite{
            padding: 12px
        }
    }

    @media ${theme.media.mobile}{
        padding: 15px;
    }
`