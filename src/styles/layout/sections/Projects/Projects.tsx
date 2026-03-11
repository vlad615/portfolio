import { FlexWrapper } from "../../../../components/Wrapper/FlexWrapper"
import { ProjectCard } from "./ProjectCard"
import { StyledH2 } from "../../../../components/Text/StyledTitle"
import { ContainerSection } from "../../../../components/Wrapper/Container"
import protect from "../../../../accets/projects/Protect.jpg"
import kahoot from "../../../../accets/projects/Kahoot.jpg"
import Chert from "../../../../accets/projects/ChertNodes.jpg"


export const Pojects = () => {
    return(
        <ContainerSection>
            <FlexWrapper direction="column">
                <FlexWrapper justify="space-between">
                    <StyledH2>#projects</StyledH2>
                    <a>View all ⇝</a>
                </FlexWrapper>
                <FlexWrapper gap="15px">
                    <ProjectCard img={protect} tools="React Express Node.js HTML SCSS Python FLask" title="ProtectX" description="Discord anti-crash bot"/>
                    <ProjectCard img={kahoot} tools="Express Node.js CSS" title="Kahoot Answers Viewer" description="Get answers to your kahoot quiz"/>
                    <ProjectCard img={Chert} tools=" HTML Python FLask" title="ChertNodes" description="Minecraft servers hosting"/>
                </FlexWrapper>
            </FlexWrapper>
        </ContainerSection>

    )
}