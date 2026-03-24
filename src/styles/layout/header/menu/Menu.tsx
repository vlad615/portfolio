import { styled } from "styled-components"
import { theme } from "../../../Themes"


export const Menu = () =>{
    return(
        <StyledMenu>
            <ul>
                <li><StyledA href="">home</StyledA></li>
                <li><StyledA href="">works</StyledA></li>
                <li><StyledA href="">about-me</StyledA></li>
                <li><StyledA href="">contacts</StyledA></li>
            </ul>
            <SytledSelect id="language">
                <option value="english">EN</option>
                <option value="russian">RU</option>
                <option value="ukrainian">UA</option>
                <option value="belarusian">BE</option>
            </SytledSelect>
        </StyledMenu>
    )
}

const StyledMenu = styled.nav`
    display: flex;
    gap: 30px;

    ul{
        display: flex;
        gap: 30px;
        font-weight: 400;
        font-size: 16px;        
    }

    @media ${theme.media.tablet}{
        display: none;
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

const SytledSelect = styled.select`
    font-weight: 600;
    font-size: 16px;
    color: ${theme.color.font};
    background-color: ${theme.color.primaryBg};
    border: none;

    &:hover{
        color: ${theme.color.hoverFont};
    }
`