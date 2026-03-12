import { styled } from "styled-components"
import { FlexWrapper } from "../../../../components/wrapper/FlexWrapper"
import { StyledH2 } from "../../../../components/SectionTitle"
import { StyledButton } from "../../../../components/Buttons"
import { StyledTable } from "../../../../components/Table"

type ProjectCardProps = {
    img: string;
    tools: string;
    title: string;
    description: string;
}

export const ProjectCard = (props: ProjectCardProps) => {
    return(
    <StyledTable>
        <StyledImg src={props.img}/>
        <StyledP>{props.tools}</StyledP>
        <tr>
            <StyledH2 size="25px">{props.title}</StyledH2>
            <StyledP>{props.description}</StyledP>
            <FlexWrapper gap="5px">
                <StyledButton >Live ↭</StyledButton>
                <StyledButton dark>Cached ≥</StyledButton>
            </FlexWrapper>
        </tr>
    </StyledTable>
    )
    
}

const StyledP = styled.p`
    
`

const StyledImg = styled.img`
    width: 100%;
    object-fit: cover;
`