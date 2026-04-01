import styled from "styled-components"
import { FlexWrapper } from "../../../components/wrapper/FlexWrapper"
import { Icon } from "../../../components/icons/Icon"
import { SectionTitle } from "../../../components/title/SectionTitle"
import { theme } from "../../../styles/Themes"
import { Container } from "../../../components/wrapper/Container"
import { light } from "../../../styles/animations"
import { Fade } from "react-awesome-reveal"

export const Contacts = () => {
    return(
        <Section>
            <Container>
                <Fade>
                    <SectionTitle $afterWidth="130px" $mgb="45px">contacts</SectionTitle>
                </Fade>
                
                <FlexWrapper $justify="space-between" $gap="30px">
                    <Fade direction="left">
                        <StyledP>
                            I’m interested in freelance opportunities. However, if you have other request or question, don’t hesitate to contact me
                        </StyledP>
                    </Fade>
                    <Fade direction="right">
                        <MessageMe>
                            <StyledH3>Massege me here</StyledH3>
                            <a href="https://t.me/VladislavElmirovich" target="_blank" rel="noopener noreferrer">
                                <FlexWrapper $justify="center" $align="center" $gap="5px">
                                    <Icon iconId="tg" viewbox="2,1,23,23"/>@VladislavElmirovich
                                </FlexWrapper>
                            </a>
                            <a href="mailto:ambrosov413@gmail.com">
                                <FlexWrapper $justify="center" $align="center" $gap="5px">
                                    <Icon iconId="email" viewbox="0,0,20,20"/>ambrosov413@gmail.com
                                </FlexWrapper>
                            </a>
                        </MessageMe>
                    </Fade>
                    
                </FlexWrapper>
            </Container>
        </Section>
    )
}

const Section = styled.section`
    margin-bottom: 145px;
    position: relative;

    &::after{
        content: "";
        position: absolute;
        display: inline-block;
        background-image: url("/elements/Dots.svg");
        background-repeat: no-repeat;
        background-size: cover;
        width: 100px;
        height: 100px;
        right: 50%;
        bottom: 10%;
        transform: translateX(-630px);
        animation: ${light} 2s ease-in-out infinite;
    }

    @media ${theme.media.tablet}{
        margin-bottom: 80px;
        ${FlexWrapper}{
            flex-wrap: wrap;
        }
    }
`


const StyledH3 = styled.h3`
    font-weight: 600;
    font-size: 16px;
    color: #fff;
`
const StyledP = styled.p`
    max-width: 500px;
`

const MessageMe = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid ${theme.color.font};
    padding: 15px;
    gap: 15px;

    a{
        font-weight: 400;
        font-size: 16px;
        color: #abb2bf;
        transition: all 0.3s linear;

        &:hover{
            color: #fff;
            transform: translateY(-5px);
        }
    }
`



