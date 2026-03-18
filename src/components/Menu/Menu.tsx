import { styled } from "styled-components"
import { theme } from "../../styles/Themes"


export const Menu = () =>{
    return(
        <StyledMenu>
            <ul>
                <li><StyledA href="">home</StyledA></li>
                <li><StyledA href="">works</StyledA></li>
                <li><StyledA href="">about-me</StyledA></li>
                <li><StyledA href="">contacts</StyledA></li>
            </ul>
        </StyledMenu>
    )
}

const StyledMenu = styled.nav`
    ul{
        display: flex;
        gap: 30px;
        font-weight: 400;
        font-size: 16px;        
    }
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