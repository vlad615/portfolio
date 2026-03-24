import { FlexWrapper } from "../../../../components/wrapper/FlexWrapper"
import { SectionTitle } from "../../../../components/title/SectionTitle"
import { SkillsCard } from "./SkillsCard"
import { styled } from "styled-components"
import dots from "../../../../accets/elements/Dots.svg"
import { Container } from "../../../../components/wrapper/Container"
import { theme } from "../../../Themes"

export const Skills = () => {
    return(
    <Section>
        <Container>
            <SectionTitle afterWidth="240px" mgb="50px">skills</SectionTitle>
            <FlexWrapper $justify="space-between" >
                <ImageWrapper>
                    {/* <img src={dots} alt="" />
                    <img src={dots} alt="" /> */}
                </ImageWrapper>
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
    position: relative;
    
    &::after{
        content: "";
        position: absolute;
        background-image: url('/elements/Dots.svg');
        background-size: cover;
        width: 60px;
        height: 60px;
        left: 50%;
        top: 200px;
        transform: translateX(-280px)
    }
`

const ImageWrapper = styled.div`
    position: relative;

    &::before{
        content: "";
        position: absolute;
        background-image: url('/elements/StyleOutline.svg');
        background-repeat: no-repeat;
        background-size: cover;
        width: 115px;
        height: 115px;
        left: 45px;
        bottom: -20px;
    }

    &::after{
        content: "";
        position: absolute;
        background-image: url('/elements/Dots.svg');
        background-size: cover;
        width: 60px;
        height: 60px;
        left: 30px;
        top: 50px;
    }
`

const SkillsWrapper = styled.div`
    position: relative;
    display: flex;
    max-width: 600px;
    gap: 15px;
    flex-direction: row-reverse;
    align-items: flex-start;
    flex-wrap: wrap;

    
    &::before{
        content: "";
        position: absolute;
        border: solid 1px ${theme.color.font};
        width: 85px;
        height: 85px;
        left: -150px;
        top: -25px;
        
    }

    &::after{
        content: "";
        position: absolute;
        border: solid 1px ${theme.color.font};
        width: 50px;
        height: 50px;
        bottom: 15px;
        left: -50px;
    }
`