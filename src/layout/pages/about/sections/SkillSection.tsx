import styled from "styled-components"
import { Container } from "../../../../components/wrapper/Container"
import { light } from "../../../../styles/animations"
import { SectionTitle } from "../../../../components/title/SectionTitle"
import { SkillsCard } from "../../../../components/cards/SkillsCard"


export const SkillSection = () => {
    return (
        <Section>
            <Container>
                <SectionTitle $mgb="50px">skills</SectionTitle>
                <SkillsWrapper>
                    <SkillsCard group="Tools" values={["VSCode", "Linux", "Git", "Figma", "VSCode", "Linux", "Git", "GitLab CI/CD"]}/>
                    <SkillsCard group="Other" values={["HTML", "CSS", "Rest", "Jinja", "SCSS"]}/>
                    <SkillsCard group="Databases" values={["PostgreSQL", "SQLite", "SQL"]}/>
                    <SkillsCard group="Frameworks" values={["React", "FastAPI", "Django"]}/>
                    <SkillsCard group="Languages" values={["TypeScript", "JavaScript", "Python"]}/>
                </SkillsWrapper>
            </Container>
        </Section>
    )
} 

const Section = styled.section`
    margin: 100px 0 0;
    position: relative;
    overflow: hidden;

    &::before{
        content: "";
        position: absolute;
        background-image: url('/elements/Dots.svg');
        background-repeat: no-repeat;
        width: 100px;
        height: 100px;
        top: 0;
        right: 50%;
        transform: translateX(730px);
        animation: ${light} 2s ease-in-out infinite;
    }
`

const SkillsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    align-items: flex-start;

`