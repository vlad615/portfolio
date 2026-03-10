import { styled } from "styled-components"
import { StyledWrapper } from "../Wrapper/FlexWrapper"
import { StyledH2 } from "../Text/StyledTitle"
import { StyledP } from "../Text/StyledP"

type ProjectCardProps = {
    img: string;
    tools: string;
    title: string;
    description: string;
}

export const ProjectCard = (props: ProjectCardProps) => {
    return(
    <StyledArticle>
        <StyledImg src={props.img}/>
        <StyledP>{props.tools}</StyledP>
        <StyledH2 size="25px">{props.title}</StyledH2>
        <StyledP>{props.description}</StyledP>
        <StyledWrapper>
            <button>Live ↭</button>
            <button>Cached ≥</button>
        </StyledWrapper>
        
    </StyledArticle>
    )
    
}

const StyledArticle = styled.article`
    display: flex;
    flex-direction: column;
    max-width: 330px;
`

const StyledImg = styled.img`
    width: 100%
`