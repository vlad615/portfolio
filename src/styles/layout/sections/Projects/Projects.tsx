import { FlexWrapper } from "../../../../components/wrapper/FlexWrapper"
import { ProjectCard } from "./ProjectCard"
import { SectionTitle } from "../../../../components/title/SectionTitle"
import protect from "../../../../accets/projects/Protect.jpg"
import kahoot from "../../../../accets/projects/Kahoot.jpg"
import Chert from "../../../../accets/projects/ChertNodes.jpg"
import { styled } from "styled-components"


export const Pojects = () => {
    return(
        <Section>
            <FlexWrapper $justify="space-between" $align="center">
                <SectionTitle>projects</SectionTitle>
                <Link href="">View all ⇝</Link>
            </FlexWrapper>
            <FlexWrapper $justify="space-between" $align="flex-start">
                <ProjectCard img={protect} tools="React Express Node.js HTML SCSS Python FLask" title="ProtectX" description="Discord anti-crash bot"/>
                <ProjectCard img={kahoot} tools="Express Node.js CSS" title="Kahoot Answers Viewer" description="Get answers to your kahoot quiz"/>
                <ProjectCard img={Chert} tools=" HTML Python FLask" title="ChertNodes" description="Minecraft servers hosting"/>
            </FlexWrapper>
        </Section>

    )
}

const Section = styled.section`
    display:flex;
    flex-direction: column;
    gap: 50px;
    margin-bottom: 100px;
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