import { StyledWrapper } from "../../../../components/Wrapper/FlexWrapper"
import { ProjectCard } from "../../../../components/Cards/ProjectCard"
import { StyledH2 } from "../../../../components/Text/StyledTitle"
import { StyledSection } from "../../../../components/Wrapper/Container"
import protect from "../../../../accets/projects/Protect.jpg"
import kahoot from "../../../../accets/projects/Kahoot.jpg"
import Chert from "../../../../accets/projects/ChertNodes.jpg"


export const Pojects = () => {
    return(
        <StyledSection>
            <StyledWrapper direction="column">
                <StyledWrapper justify="space-between">
                    <StyledH2>#projects</StyledH2>
                    <a>View all ⇝</a>
                </StyledWrapper>
                <StyledWrapper gap="15px">
                    <ProjectCard img={protect} tools="React Express Node.js HTML SCSS Python FLask" title="ProtectX" description="Discord anti-crash bot"/>
                    <ProjectCard img={kahoot} tools="Express Node.js CSS" title="Kahoot Answers Viewer" description="Get answers to your kahoot quiz"/>
                    <ProjectCard img={Chert} tools=" HTML Python FLask" title="ChertNodes" description="Minecraft servers hosting"/>
                </StyledWrapper>
            </StyledWrapper>
        </StyledSection>

    )
}