import { styled } from "styled-components"
import { FlexWrapper } from "../../../components/wrapper/FlexWrapper"
import { StyledButton } from "../../../components/Buttons"
import { theme } from "../../../styles/Themes";

type ProjectCardProps = {
    img: string;
    tools: Array<string>;
    title: string;
    description: string;
}

export const ProjectCard = (props: ProjectCardProps) => {
    return (
    <CardWrapper>
        <StyledImg src={props.img} />
        <StyledUl>{props.tools.map(x => <li>{x}</li>)}</StyledUl>
        <Wrapper>
            <Title>{props.title}</Title>
            <StyledP>{props.description}</StyledP>
            <FlexWrapper $gap="5px">
                <StyledButton as="a">Live ↭</StyledButton>
                <StyledButton as="a" $dark>Cached ≥</StyledButton>
            </FlexWrapper>
        </Wrapper>
    </CardWrapper>

                        
    )

}

const CardWrapper = styled.div`
    max-width: 330px;
    border: solid 1px ${theme.color.font};
`

const StyledImg = styled.img`
    width: 100%;
    object-fit: cover;
`
const StyledUl = styled.ul`
    padding: 0 5px 5px 5px;
    border-bottom: solid 1px ${theme.color.font};
    display: flex;
    flex-wrap: wrap;
    li{
        margin-right: 10px;
    }
`

const StyledP = styled.p`
    padding: 0 5px 5px 5px;
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
`