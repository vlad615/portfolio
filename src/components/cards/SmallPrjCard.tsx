import styled from "styled-components"
import { theme } from "../../styles/Themes"
import { FlexWrapper } from "../wrapper/FlexWrapper";
import { StyledButton } from "../Buttons";

export type SmallPrjCardProps = {
    tools: Array<string>;
    title: string;
    description: string;
}

export const SmallPrjCard = (props: SmallPrjCardProps) => {
    return(
        <ProjectWrapper>
            <StyledUl>{props.tools.map(x => <li key={x}>{x}</li>)}</StyledUl>
            <Title>{props.title}</Title>
            <StyledP>{props.description}</StyledP>
            <FlexWrapper $gap="15px">
                <StyledButton as="a" $mrg="0 0 15px 15px">Live ↭</StyledButton>
                <StyledButton as="a" $mrg="0 0 15px" $dark>Cached ≥</StyledButton>
            </FlexWrapper>
        </ProjectWrapper>
    )
    
}

const ProjectWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;

    max-width: 330px;
    min-width: 240px;
    border: solid 1px ${theme.color.font};
    transition: transform 0.3s linear;
    flex: 1 1 0%;

    @media ${theme.media.tablet}{
        max-width: unset;
        }
`
const StyledUl = styled.ul`
    padding: 5px;
    border-bottom: solid 1px ${theme.color.font};
    display: flex;
    flex-wrap: wrap;
    li{
        margin-right: 10px;
    }
`

const StyledP = styled.p`
    margin: 0 15px;
`

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin: 15px;
`

const Title = styled.h3`
    font-weight: 500;
    font-size: 24px;
    color: #fff;
    margin: 0 15px;
`