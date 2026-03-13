import { FlexWrapper } from "../../../../components/wrapper/FlexWrapper"
import { StyledH2 } from "../../../../components/SectionElements"
import { SkillsCard } from "./SkillsCard"
import { styled } from "styled-components"

export const Skills = () => {
    return(
    <Section>
        <StyledH2>skills</StyledH2>
        <FlexWrapper maxwidth="600px" wrap="wrap" gap="15px" justify="flex-end" align="flex-start">
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
    display: flex;
    flex-direction: column;
    gap: 50px;
    
    margin-bottom: 100px;
    div{
        align-self: flex-end;
    }
`