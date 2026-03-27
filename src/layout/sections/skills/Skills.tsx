import { FlexWrapper } from "../../../components/wrapper/FlexWrapper"
import { SectionTitle } from "../../../components/title/SectionTitle"
import { SkillsCard } from "./SkillsCard"
import { styled } from "styled-components"
import right from "../../../accets/fiveelements.png"
import { Container } from "../../../components/wrapper/Container"
import { theme } from "../../../styles/Themes"

export const Skills = () => {
    return(
    <Section>
        <Container>
            <SectionTitle afterWidth="240px" mgb="50px">skills</SectionTitle>
            <FlexWrapper $justify="space-between" $align="flex-end">
                <ImgWrapper>
                    <StyledImg src={right} />
                </ImgWrapper>
                
                <SkillsWrapper>
                    <SkillsCard group="Tools" values={["VSCode", "Linux", "Git", "Figma", "VSCode", "Linux", "Git", "GitLab CI/CD"]}/>
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
    
    @media ${theme.media.tablet}{
        margin-bottom: 50px;
        
        ${SectionTitle}{
            margin-bottom: 20px;
        }
    }
`

const SkillsWrapper = styled.div`
    display: flex;
    max-height: 300px;
    gap: 15px;
    flex-direction: column;
    flex-wrap: wrap-reverse;

    @media ${theme.media.tablet}{
        flex-direction: row;
        width: 100%;
        flex-wrap: wrap;
        max-height: unset;
    }
`

const ImgWrapper = styled.div`
    max-width: 350px;

    @media ${theme.media.tablet}{
        display: none;
    }
`

const StyledImg = styled.img`
    width: 100%;
`