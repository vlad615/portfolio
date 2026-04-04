import styled from "styled-components"
import { theme } from "../../../styles/Themes"
import { Fade } from "react-awesome-reveal"
import { Link } from 'react-router-dom';


export const Menu = (props: { setIsMenuopen: (arg0: boolean) => void; }) => {
    return(
        <StyledUl onClick={()=>{props.setIsMenuopen(false) }}>
            <Fade direction="down">
                <li><StyledA to="/">home</StyledA></li>
                <li><StyledA to="/projects">works</StyledA></li>
                <li><StyledA to="/about">about-me</StyledA></li>
                <li><StyledA to="/contacts">contacts</StyledA></li>
            </Fade>
            
        </StyledUl>
    )
}

const StyledUl = styled.ul`
    font-weight: 500;
    font-size: 32px;     
`

const StyledA = styled(Link)`
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