import styled from "styled-components"
import { Container } from "../../../../components/wrapper/Container"
import { SectionTitle } from "../../../../components/title/SectionTitle"
import { FlexWrapper } from "../../../../components/wrapper/FlexWrapper"
import protect from "../../../../accets/projects/Protect.jpg"
import kahoot from "../../../../accets/projects/Kahoot.jpg"
import Chert from "../../../../accets/projects/ChertNodes.png"
import { ProjectCard } from "../../../../components/cards/ProjectCard"
import { theme } from "../../../../styles/Themes"



export const CompleteApps = () => {
    return(
        <Section>
            <Container>
                <SectionTitle weigth={600} before="/" $mgb="15px">projects</SectionTitle>
                <StyledP>List of my projects</StyledP>
                <SectionTitle $mgb="50px">complete-app</SectionTitle>
                <FlexWrapper $gap="15px" $wrap="wrap" $justify="space-between">
                    <ProjectCard img={protect} tools={["React", "Express", "Node.js", "HTML", "SCSS", "Python", "FLask"]} title="ProtectX" description="Discord anti-crash bot"/>
                    <ProjectCard img={kahoot} tools={["Express", "Node.js", "CSS"]} title="Kahoot Answers Viewer" description="Get answers to your kahoot quiz"/>
                    <ProjectCard img={Chert} tools={["HTML", "Python", "FLask"]} title="ChertNodes" description="Minecraft servers hosting"/>
                    <ProjectCard img={Chert} tools={["HTML", "Css", "JS"]} title="Kotik Bot" description="Multi-functional discord bot"/>
                </FlexWrapper>
            </Container>
        </Section>
    )
}

const Section = styled.section`
    margin: 100px 0 80px;
`

const StyledP = styled.p`
    font-size: 16px;
    color: ${theme.color.hoverFont};
    margin-bottom: 70px;
`