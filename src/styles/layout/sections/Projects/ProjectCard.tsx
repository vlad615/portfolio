import { styled } from "styled-components"
import { FlexWrapper } from "../../../../components/wrapper/FlexWrapper"
import { StyledButton } from "../../../../components/Buttons"
import { StyledTable } from "../../../../components/Table"

type ProjectCardProps = {
    img: string;
    tools: string;
    title: string;
    description: string;
}

export const ProjectCard = (props: ProjectCardProps) => {
    return (
        <StyledTable>
            <thead>
                <tr>
                    <td>
                        <StyledImg src={props.img} />
                        <StyledP>{props.tools}</StyledP>
                    </td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <Wrapper>
                            <Title>{props.title}</Title>
                            <StyledP>{props.description}</StyledP>
                            <FlexWrapper gap="5px">
                                <StyledButton>Live ↭</StyledButton>
                                <StyledButton dark>Cached ≥</StyledButton>
                            </FlexWrapper>
                        </Wrapper>
                    </td>
                </tr>
            </tbody>
        </StyledTable>
    )

}

const StyledImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
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