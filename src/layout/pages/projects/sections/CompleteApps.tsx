import styled from "styled-components"
import { Container } from "../../../../components/wrapper/Container"
import { SectionTitle } from "../../../../components/title/SectionTitle"
import { FlexWrapper } from "../../../../components/wrapper/FlexWrapper"
import protect from "../../../../accets/projects/Protect.jpg"
import kahoot from "../../../../accets/projects/Kahoot.jpg"
import Chert from "../../../../accets/projects/ChertNodes.png"
import bot from "../../../../accets/projects/bot.jpg"
import { ProjectCard } from "../../../../components/cards/ProjectCard"
import { theme } from "../../../../styles/Themes"
import { light } from "../../../../styles/animations"
import { PagesTitle } from "../../../../components/title/PagesTitle"



export const CompleteApps = () => {
    return(
        <Section>
            <Container>
                <PagesTitle title="projects" text="List of my projects" $mgb="70px"/>
                
                <SectionTitle $mgb="50px">complete-app</SectionTitle>
                <FlexWrapper $gap="15px" $wrap="wrap" $justify="space-between" $align="flex-start">
                    <ProjectCard img={protect} tools={["React", "Express", "Node.js", "HTML", "SCSS", "Python", "FLask"]} title="ProtectX" description="Discord anti-crash bot"/>
                    <ProjectCard img={kahoot} tools={["Express", "Node.js", "CSS"]} title="Kahoot Answers Viewer" description="Get answers to your kahoot quiz"/>
                    <ProjectCard img={Chert} tools={["HTML", "Python", "FLask"]} title="ChertNodes" description="Minecraft servers hosting"/>
                    <ProjectCard img={bot} tools={["HTML", "Css", "JS"]} title="Kotik Bot" description="Multi-functional discord bot"/>
                </FlexWrapper>
            </Container>
        </Section>
    )
}

const Section = styled.section`
    margin-top: 100px;
    position: relative;
    overflow: hidden;

    &::before{
        content: "";
        position: absolute;
        background-image: url('/elements/Dots.svg');
        background-repeat: no-repeat;
        width: 110px;
        height: 50px;
        top: 30%;
        right: 50%;
        transform: translateX(-600px);
    }

    &::after{
        content: "";
        position: absolute;
        width: 155px;
        height: 155px;
        border: 1px solid ${theme.color.font};
        right: 50%;
        top: 13%;
        transform: translateX(750px);
        animation: ${light} 2s ease-in-out infinite;
    }

`