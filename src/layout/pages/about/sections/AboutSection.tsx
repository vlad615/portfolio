import styled from "styled-components"
import { Container } from "../../../../components/wrapper/Container"
import { PagesTitle } from "../../../../components/title/PagesTitle"
import { AboutMe, AboutProps } from "../../../aboutMe/AboutMe"
import { theme } from "../../../../styles/Themes"
import { light } from "../../../../styles/animations"

export const AboutSection = (props: AboutProps) => {
    return (
        <Section>
            <Container>
                <PagesTitle title="about-me" text="Who am I?"/>
                <AboutMe {...props}/>
            </Container>
        </Section>
    )
} 

const Section = styled.div`
    margin: 100px 0;
    position: relative;
    overflow: hidden;

    &::before{
        content: "";
        position: absolute;
        background-image: url('/elements/Dots.svg');
        background-repeat: no-repeat;
        width: 110px;
        height: 50px;
        top: 40%;
        right: 50%;
        transform: translateX(-590px);
        animation: ${light} 2s ease-in-out infinite;
    }

    &::after{
        content: "";
        position: absolute;
        width: 155px;
        height: 155px;
        border: 1px solid ${theme.color.font};
        right: 50%;
        top: 20%;
        transform: translateX(750px);
        animation: ${light} 2s ease-in-out infinite;
    }
`