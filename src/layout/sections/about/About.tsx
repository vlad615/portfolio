import { FlexWrapper } from "../../../components/wrapper/FlexWrapper"
import { SectionTitle } from "../../../components/title/SectionTitle"
import { StyledButton } from "../../../components/Buttons"
import styled from "styled-components"
import bg from "../../../accets/man.png"
import { Container } from "../../../components/wrapper/Container"
import { theme } from "../../../styles/Themes"
import { light } from "../../../styles/animations"
import { Fade } from "react-awesome-reveal"

type AboutProps = {
    text: string;
}

export const About = (props: AboutProps) =>{
    return(
        <Section>
            <Container>
                <Fade>
                    <SectionTitle $afterWidth="330px" $mgb="20px">about-me</SectionTitle>
                </Fade>
                
                <FlexWrapper $justify="space-between" $align="flex-start" $gap="30px">
                    <Fade direction="left">
                        <TextWrapper >
                            <StyledP>{props.text}</StyledP>
                            <StyledButton as="a">Read more →</StyledButton>
                        </TextWrapper>
                    </Fade>
                    <Fade direction="right">
                        <StyledImg src={bg}/>
                    </Fade>
                    
                </FlexWrapper>
            </Container>
        </Section>
    )
}

const Section = styled.section`
    position: relative;
    overflow: hidden;
    margin-bottom: 100px;

    &::before{
        content: "";
        position: absolute;
        width: 155px;
        height: 155px;
        border: 1px solid ${theme.color.font};
        right: 50%;
        bottom: 50%;
        transform: translateX(-630px);
        animation: ${light} 2s ease-in-out infinite ;
    }

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
        transform: translateX(700px);
        animation: ${light} 2s ease-in-out infinite;
    }

    @media ${theme.media.tablet}{
        margin-bottom: 50px;
        ${FlexWrapper}{
            flex-wrap: wrap-reverse;
            justify-content: center;
        }
    }
`

const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    align-items: flex-start;
    max-width: 515px;

    @media ${theme.media.tablet}{
        max-width: unset;
    }
`

const StyledP = styled.p`
    white-space: pre-wrap;
`

// const ImgWrapper = styled.div`
//     max-width: 340px;
//     min-width: 280px;
//     @media ${theme.media.tablet}{
//         max-width: 280px;
//     }
// `

const StyledImg = styled.img`
    width: 100%;
        max-width: 340px;
    min-width: 280px;
    @media ${theme.media.tablet}{
        max-width: 280px;
    }
    z-index: 0;
`