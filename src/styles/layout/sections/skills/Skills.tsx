import { FlexWrapper } from "../../../../components/wrapper/FlexWrapper"
import { StyledH2 } from "../../../../components/SectionTitle"
import { SkillsCard } from "./SkillsCard"
import { styled } from "styled-components"

export const Skills = () => {
    return(
    <Section>
        <StyledH2>#skills</StyledH2>

        <FlexWrapper wrap="wrap" justify="flex-end" >
             
            <FlexWrapper maxwidth="600px" wrap="wrap" gap="10px" justify="flex-end">
                <SkillsCard group="Languages" values={["TypeScript", "JavaScript", "Python"]}/>
                <SkillsCard group="Databases" values={["PostgreSQL", "SQLite", "SQL"]}/>
                <SkillsCard group="Tools" values={["VSCode", "Linux", "Git", "Figma", "GitLab CI/CD"]}/>
                <SkillsCard group="Other" values={["HTML", "CSS", "Rest", "Jinja", "SCSS"]}/>
                <SkillsCard group="Frameworks" values={["React", "FastAPI", "Django"]}/>
            </FlexWrapper>
        </FlexWrapper>
    </Section>
    )
}

const Section = styled.section`
`