import { FlexWrapper } from "../../../../components/Wrapper/FlexWrapper"
import { StyledH2 } from "../../../../components/Text/StyledTitle"
import { SkillsCard } from "./SkillsCard"
import { styled } from "styled-components"

export const Skills = () => {
    return(
    <Section>
        <StyledH2>#skills</StyledH2>

        <FlexWrapper wrap="wrap" justify="flex-end" gap="15px">
            <FlexWrapper>
            </FlexWrapper>
            
            <SkillsCard group="Languages" values={["TypeScript", "JavaScript", "Python"]}/>
            <SkillsCard group="Databases" values={["PostgreSQL", "SQLite", "SQL"]}/>
            <SkillsCard group="Tools" values={["VSCode", "Linux", "Git", "Figma", "GitLab CI/CD"]}/>
            <SkillsCard group="Other" values={["HTML", "CSS", "Rest", "Jinja", "SCSS"]}/>
            <SkillsCard group="Frameworks" values={["React", "FastAPI", "Django"]}/>
        </FlexWrapper>
    </Section>
    )
}

const Section = styled.section`
`