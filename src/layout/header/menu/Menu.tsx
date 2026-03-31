import styled from "styled-components"
import { theme } from "../../../styles/Themes"



export const Menu = () => {
    return(
        <StyledUl>
            <li><StyledA href="">home</StyledA></li>
            <li><StyledA href="">works</StyledA></li>
            <li><StyledA href="">about-me</StyledA></li>
            <li><StyledA href="">contacts</StyledA></li>
        </StyledUl>
    )
}

const StyledUl = styled.ul`
    font-weight: 500;
    font-size: 32px;     
`

const StyledA = styled.a`
    color: ${theme.color.font}; 
    transition: color 0.2s linear;

    &::before {
        content: "#";
        color: ${theme.color.accent};
        transition: color 0.2s linear;
    }
    
    &:hover{
        color: ${theme.color.hoverFont};;
    }

    &:hover::before {
        filter: brightness(130%)
    }
`