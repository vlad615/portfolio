import styled from "styled-components";
import {FlexWrapper} from "../wrapper/FlexWrapper";
import { Icon } from "./Icon";

type ContactIconsProps = {
    direction?: string;
    gap?: string;
}

export const ContactIcons = (props: ContactIconsProps) =>{
    return(
        <FlexWrapper direction={`${props.direction}` || "row"} justify="center" align="center" gap={`${props.gap}` || "10px"}>
            <StyledA href=""><Icon iconId="tg" viewbox="-1, 0, 23, 23"/></StyledA>
            <StyledA href=""><Icon iconId="git" viewbox="-2, -2, 24, 24"/></StyledA>
            <StyledA href=""><Icon iconId="vk" viewbox="-1.5, -1, 23, 23"/></StyledA>
        </FlexWrapper>
    )
}

const StyledA = styled.a`
    transition: transform 0.2s linear;

    &:hover{
        transform: translateY(-3px);
    }
`