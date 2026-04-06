import { ProjectCard } from "../../../../../components/cards/ProjectCard"
import { SectionTitle } from "../../../../../components/title/SectionTitle"
import protect from "../../../../../accets/projects/Protect.jpg"
import kahoot from "../../../../../accets/projects/Kahoot.jpg"
import Chert from "../../../../../accets/projects/ChertNodes.png"
import { styled } from "styled-components"
import { Container } from "../../../../../components/wrapper/Container"
import { theme } from "../../../../../styles/Themes"
import { light } from "../../../../../styles/animations"
import { Fade } from "react-awesome-reveal"
import { Link } from 'react-router-dom';


export const Pojects = () => {
    return(
        <Section>
            <Container>
                <Fade>
                    <TitleWrapper>
                        <SectionTitle $afterWidth="510px">projects</SectionTitle>
                        <StyledLink to="/projects">View all ⇝</StyledLink>                  
                    </TitleWrapper>
                </Fade>
                
                <Fade direction="right">
                    <Wrapper>
                        <ProjectCard img={protect} tools={["React", "Express", "Node.js", "HTML", "SCSS", "Python", "FLask"]} title="ProtectX" description="Discord anti-crash bot"/>
                        <ProjectCard img={kahoot} tools={["Express", "Node.js", "CSS"]} title="Kahoot Answers Viewer" description="Get answers to your kahoot quiz"/>
                        <ProjectCard img={Chert} tools={["HTML", "Python", "FLask"]} title="ChertNodes" description="Minecraft servers hosting"/>
                    </Wrapper>
                </Fade>
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
        transform: translateX(770px);
        animation: ${light} 2s ease-in-out infinite ;
    }

    @media ${theme.media.large}{
        margin-bottom: 50px;
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

const StyledLink = styled(Link)`
    position: relative;
    font-weight: 500;
    font-size: 16px;
    color: ${theme.color.hoverFont};
    transition: transform 0.3s linear;

    &::after{
        content: "";
        position: absolute;
        width: 100%;
        height: 1px;
        background-color: ${theme.color.hoverFont};
        bottom: 0;
        right: 50%;
        opacity: 0;
        transition: all 0.3s linear;
    }

    &:hover{
        transform: translateX(-5px);
    }
    &:hover::after{
        opacity: 1;
        right: 0;
    }


`