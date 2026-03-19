import { FlexWrapper } from "../../../../components/wrapper/FlexWrapper"
import { SectionTitle } from "../../../../components/title/SectionTitle"
import { SkillsCard } from "./SkillsCard"
import { styled } from "styled-components"
import { Container } from "../../../../components/wrapper/Container"
import { theme } from "../../../Themes"

export const Skills = () => {
    return(
    <Section>
        <Container>
            <SectionTitle afterWidth="240px">skills</SectionTitle>
            <FlexWrapper $justify="space-between" >
                <ImageWrapper></ImageWrapper>
                <SkillsWrapper>
                    <SkillsCard group="Tools" values={["VSCode", "Linux", "Git", "Figma", "GitLab CI/CD"]}/>
                    <SkillsCard group="Languages" values={["TypeScript", "JavaScript", "Python"]}/>
                    <SkillsCard group="Databases" values={["PostgreSQL", "SQLite", "SQL"]}/>
                    <SkillsCard group="Other" values={["HTML", "CSS", "Rest", "Jinja", "SCSS"]}/>
                    <SkillsCard group="Frameworks" values={["React", "FastAPI", "Django"]}/>
                </SkillsWrapper>
            </FlexWrapper>
        </Container>
    </Section>
    )
}

const Section = styled.section`
    margin-bottom: 100px;

    &::before{
        content: "";
        position: absolute;
        border: solid 1px ${theme.color.font};
        width: 85px;
        height: 85px;
        left: 50%;
    }
`

const ImageWrapper = styled.div`
    /* width: 350px; */
`

const SkillsWrapper = styled.div`
    display: flex;
    max-width: 600px;
    gap: 15px;
    flex-direction: row-reverse;
    align-items: flex-start;
    flex-wrap: wrap;
    margin-top: 40px;
`