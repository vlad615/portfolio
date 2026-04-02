import { styled } from "styled-components"
import { FlexWrapper } from "../wrapper/FlexWrapper"
import { StyledButton } from "../Buttons"
import { theme } from "../../styles/Themes";

type ProjectCardProps = {
    img: string;
    tools: Array<string>;
    title: string;
    description: string;
}

export const ProjectCard = (props: ProjectCardProps) => {
    return (
    <CardWrapper>
        <ImgWrapper>
            <ViewButton>View</ViewButton>
            <StyledImg src={props.img} />
        </ImgWrapper>
        
        <StyledUl>{props.tools.map(x => <li key={x}>{x}</li>)}</StyledUl>
        <Wrapper>
            <Title>{props.title}</Title>
            <StyledP>{props.description}</StyledP>
            <FlexWrapper $gap="15px">
                <StyledButton as="a">Live ↭</StyledButton>
                <StyledButton as="a" $dark>Cached ≥</StyledButton>
            </FlexWrapper>
        </Wrapper>
    </CardWrapper>

                        
    )

}

const CardWrapper = styled.article`
    max-width: 330px;
    min-width: 240px;
    border: solid 1px ${theme.color.font};
    transition: transform 0.3s linear;
    @media screen and (min-width: 769px){
        &:hover{
            transform: scale(1.05) translateY(-15px);
        }
    }


    @media ${theme.media.tablet}{
        flex: 1 1 0%;
        max-width: unset;
}
`
const ViewButton = styled.a`
    opacity: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    font-weight: 500;
    font-size: 24px;
    color: #fff;
    border: 2px solid ${theme.color.accent};
    border-radius: 5px;
    background-color: #8b4698;
    padding: 8px 16px;
    transition: background-color 0.2s linear;

    &:hover{
        background: rgba(199, 120, 221, 0.7);
    }
`

const ImgWrapper = styled.div`
    position: relative;

    &::before{
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        background: rgba(0,0,0,0.3);
        backdrop-filter: blur(4px);
        opacity: 0;
    }

    &:hover{
        &::before{
            opacity: 1;
        }

        ${ViewButton}{
            opacity: 1;
        }
    }

    @media ${theme.media.tablet}{
        &::before{
            opacity: 1;
        }

        ${ViewButton}{
            opacity: 1;
        }
    }
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