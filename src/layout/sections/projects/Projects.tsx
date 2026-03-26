import { FlexWrapper } from "../../../components/wrapper/FlexWrapper"
import { ProjectCard } from "./ProjectCard"
import { SectionTitle } from "../../../components/title/SectionTitle"
import protect from "../../../accets/projects/Protect.jpg"
import kahoot from "../../../accets/projects/Kahoot.jpg"
import Chert from "../../../accets/projects/ChertNodes.png"
import { styled } from "styled-components"
import { Container } from "../../../components/wrapper/Container"
import { theme } from "../../../styles/Themes"


export const Pojects = () => {
    return(
        <Section>
            <Container>
                <TitleWrapper>
                    <SectionTitle afterWidth="510px">projects</SectionTitle>
                    <Link href="">View all ⇝</Link>
                </TitleWrapper>
                <Wrapper>
                    <ProjectCard img={protect} tools={["React", "Express", "Node.js", "HTML", "SCSS", "Python", "FLask"]} title="ProtectX" description="Discord anti-crash bot"/>
                    <ProjectCard img={kahoot} tools={["Express", "Node.js", "CSS"]} title="Kahoot Answers Viewer" description="Get answers to your kahoot quiz"/>
                    <ProjectCard img={Chert} tools={["HTML", "Python", "FLask"]} title="ChertNodes" description="Minecraft servers hosting"/>
                </Wrapper>
            </Container>
        </Section>

    )
}

const Section = styled.section`
    margin-bottom: 100px;
    position: relative;
    overflow: hidden;


    &::after{
        content: "";
        position: absolute;
        width: 155px;
        height: 155px;
        border: 1px solid ${theme.color.font};
        right: 50%;
        bottom: 25%;
        transform: translateX(900px);
    }
`

const TitleWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 50px;
`

const Wrapper = styled.div`
    display: flex;
    align-items: start;
    gap: 15px;

    @media ${theme.media.tablet}{
        flex-wrap: wrap;
    }
`

const Link = styled.a`
    font-weight: 500;
    font-size: 16px;
    color: #fff;
    transition: transform 0.3s linear;
    
    &:hover{
        transform: translateX(-5px)
    }

`