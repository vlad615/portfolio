import { styled } from "styled-components"
import { FlexWrapper } from "../../../../components/Wrapper/FlexWrapper"
import { StyledH2 } from "../../../../components/Text/StyledTitle"
import { StyledP } from "../../../../components/Text/StyledP"

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
        <FlexWrapper>
            <button>Live ↭</button>
            <button>Cached ≥</button>
        </FlexWrapper>
        
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