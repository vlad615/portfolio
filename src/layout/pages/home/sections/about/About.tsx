import { FlexWrapper } from "../../../../../components/wrapper/FlexWrapper"
import { SectionTitle } from "../../../../../components/title/SectionTitle"
import styled from "styled-components"
import { Container } from "../../../../../components/wrapper/Container"
import { theme } from "../../../../../styles/Themes"
import { light } from "../../../../../styles/animations"
import { Fade } from "react-awesome-reveal"
import { AboutMe, AboutProps } from "../../../../aboutMe/AboutMe"


export const About = (props: AboutProps) =>{
    return(
        <Section>
            <Container>
                <Fade>
                    <SectionTitle $afterWidth="330px" $mgb="20px">about-me</SectionTitle>
                </Fade>
                <AboutMe {...props}/>
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

