import { styled } from "styled-components"
import { Menu } from "../menu/Menu"
import { Languages } from "../menu/Languages"


export const DesktopMenu = () =>{
    return(
        <StyledMenu>
            <Menu />
            <Languages />
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
`