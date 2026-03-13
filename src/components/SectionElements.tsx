import styled from "styled-components";
import { theme } from "../styles/Themes";

type StyledTitleProps = {
    weigth?: number;
    size?: string;
    color?: string;
    border?: string;
}

export const StyledH1 = styled.h1<StyledTitleProps>`
    font-weight: ${props => props.weigth || 600};
    font-size: ${props => props.size || "32px"};
    color: ${props => props.color || "#fff"};
    border: ${props => props.border || "none"};
`

export const StyledH2 = styled.h2<StyledTitleProps>`
    font-weight: ${props => props.weigth || 500};
    font-size: ${props => props.size || "32px"};
    color: ${props => props.color || "#fff"};
    border: ${props => props.border || "none"};

    &::before {
        content: "#";
        -webkit-background-clip: text; 
        background-clip: text;         
        color: ${theme.color.accent};
        transition: color 0.2s linear;
    }
`

export const Link = styled.a`
    font-weight: 500;
    font-size: 16px;
    color: #fff;
    transition: transform 0.3s linear;
    
    &:hover{
        transform: translateX(-5px)
    }

`
