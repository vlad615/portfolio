import {FlexWrapper} from "../wrapper/FlexWrapper";
import { Icon } from "./Icon";

type ContactIconsProps = {
    direction?: string;
    gap?: string;
}

export const ContactIcons = (props: ContactIconsProps) =>{
    return(
        <FlexWrapper direction={`${props.direction}` || "row"} gap={`${props.gap}` || "10px"}>
            <a href=""><Icon iconId="tg"/></a>
            <a href=""><Icon iconId="git" viewbox="-2, -2, 24, 24"/></a>
            <a href=""><Icon iconId="vk" viewbox="-2, -2, 24, 24"/></a>
        </FlexWrapper>
    )
}

