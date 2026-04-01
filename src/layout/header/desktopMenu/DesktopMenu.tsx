import { styled } from "styled-components"
import { Menu } from "../menu/Menu"
import { Languages } from "../menu/Languages"
import { Fade } from "react-awesome-reveal";



export const DesktopMenu = () =>{
    return(
        <Fade direction="down">
            <StyledMenu>
                <Menu />
                <Languages />
            </StyledMenu>
        </Fade>
        
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