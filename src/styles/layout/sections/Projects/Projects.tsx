import { StyledWrapper } from "../../../../components/Wrapper/FlexWrapper"
import { ProjectCard } from "../../../../components/Cards/ProjectCard"
import { StyledH2 } from "../../../../components/Text/StyledTitle"
import { StyledSection } from "../../../../components/Wrapper/Container"
import protect from "../../../../accets/projects/Protect.jpg"

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
                </StyledWrapper>
            </StyledWrapper>
        </StyledSection>

    )
}