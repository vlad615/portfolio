import { FlexWrapper } from "../../../../components/wrapper/FlexWrapper"
import { ProjectCard } from "./ProjectCard"
import { StyledH2 } from "../../../../components/SectionTitle"
import protect from "../../../../accets/projects/Protect.jpg"
import kahoot from "../../../../accets/projects/Kahoot.jpg"
import Chert from "../../../../accets/projects/ChertNodes.jpg"
import { styled } from "styled-components"


export const Pojects = () => {
    return(
        <Section>
            <FlexWrapper justify="space-between">
                <StyledH2>#projects</StyledH2>
                <a>View all ⇝</a>
            </FlexWrapper>
            <FlexWrapper justify="space-between">
                <ProjectCard img={protect} tools="React Express Node.js HTML SCSS Python FLask" title="ProtectX" description="Discord anti-crash bot"/>
                <ProjectCard img={kahoot} tools="Express Node.js CSS" title="Kahoot Answers Viewer" description="Get answers to your kahoot quiz"/>
                <ProjectCard img={Chert} tools=" HTML Python FLask" title="ChertNodes" description="Minecraft servers hosting"/>
            </FlexWrapper>
        </Section>

    )
}

const Section = styled.section`
`