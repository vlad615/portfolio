import { styled } from "styled-components";
import { theme } from "../../styles/Themes";
import { SmallPrjCard, SmallPrjCardProps } from "./SmallPrjCard";

type ProjectCardProps = SmallPrjCardProps & {
    img: string;
}

export const ProjectCard = (props: ProjectCardProps) => {
    return (
    <CardWrapper>
        <ImgWrapper>
            <ViewButton>View</ViewButton>
            <StyledImg src={props.img} />
        </ImgWrapper>
        <SmallPrjCard tools={props.tools} title={props.title} description={props.description} />
    </CardWrapper>        
    )
}

const CardWrapper = styled.article`
    max-width: 330px;
    min-width: 240px;
    transition: transform 0.3s linear;
    flex: 1 1 0%;
    
    @media screen and (min-width: 769px){
        &:hover{
            transform: scale(1.05) translateY(-15px);
        }
    }

    @media ${theme.media.tablet}{
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
    border: solid 1px ${theme.color.font};
    border-bottom: none;

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
