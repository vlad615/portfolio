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
        <StyledUl direction={props.direction} $gap={props.$gap}>
            <li>
                <a href="https://t.me/VladislavElmirovich" target="_blank" rel="noopener noreferrer">
                    <Icon iconId="tg"  width={props.width || "30"} height={props.height || "30"} viewbox={props.viewbox || "1, 1, 22, 22"}/>
                </a>
            </li>
            <li>
                <a href="https://github.com/vlad615" target="_blank" rel="noopener noreferrer">
                    <Icon iconId="git" width={props.width || "26"} height={props.height || "26"} viewbox={props.viewbox || "-2, -2, 98, 96"}/>
                </a>
            </li>
            <li>
                <a href="https://vk.com/id1079683739" target="_blank" rel="noopener noreferrer">
                    <Icon iconId="vk" width={props.width || "30"} height={props.height || "30"} viewbox={props.viewbox || "0, 0, 22, 22"}/>
                </a>
            </li>
        </StyledUl>
    )
}

const StyledUl = styled.ul<{direction?:string, $gap?: string}>`
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
