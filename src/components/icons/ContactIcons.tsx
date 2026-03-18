import styled from "styled-components";
import { Icon } from "./Icon";

type ContactIconsProps = {
    direction?: string;
}


export const ContactIcons = (props: ContactIconsProps) =>{
    return(
        <StyledUl direction={props.direction}>
            <li><StyledA href=""><Icon iconId="tg" viewbox="-1, 0, 23, 23"/></StyledA></li>
            <li><StyledA href=""><Icon iconId="git" viewbox="-2, -2, 24, 24"/></StyledA></li>
            <li><StyledA href=""><Icon iconId="vk" viewbox="-1.5, -1, 23, 23"/></StyledA></li>
        </StyledUl>
    )
}

const StyledUl = styled.ul<ContactIconsProps>`
    display: flex;
    flex-direction: ${props => props.direction || "row"};
`

const StyledA = styled.a`
    transition: transform 0.2s linear;

    &:hover{
        transform: translateY(-3px);
    }
`