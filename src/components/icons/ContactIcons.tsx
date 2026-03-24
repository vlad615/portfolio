import styled from "styled-components";
import { Icon } from "./Icon";

type ContactIconsProps = {
    direction?: string;
    $gap?: string;
    width?: string;
    height?: string;
    viewbox?: string;
}


export const ContactIcons = (props: ContactIconsProps) =>{
    return(
        <StyledUl direction={props.direction}>
            <li><a href=""><Icon iconId="tg"  width={props.width || "32"} height={props.height || "32"} viewbox={props.viewbox || "1, 0, 23, 23"}/></a></li>
            <li><a href=""><Icon iconId="git" width={props.width || "32"} height={props.height || "32"} viewbox={props.viewbox || "-2, -2, 24, 24"}/></a></li>
            <li><a href=""><Icon iconId="vk" width={props.width || "32"} height={props.height || "32"} viewbox={props.viewbox || "-1.5, -1, 23, 23"}/></a></li>
        </StyledUl>
    )
}

const StyledUl = styled.ul<ContactIconsProps>`
    display: flex;
    flex-direction: ${props => props.direction || "row"};
    gap: ${props => props.$gap || "0px"};

    li{
        transition: transform 0.3s linear;
        &:hover{
            transform: translateY(-3px);
        }
        
    }
`
