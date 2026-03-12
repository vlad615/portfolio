import {FlexWrapper} from "../wrapper/FlexWrapper";
import { Icon } from "./Icon";

type ContactIconsProps = {
    direction?: string;
    gap?: string;
}

export const ContactIcons = (props: ContactIconsProps) =>{
    return(
        <FlexWrapper direction={`${props.direction}` || "row"} gap={`${props.gap}` || "10px"}>
            <Icon iconId="tg"/>
            <Icon iconId="git"/>
            <Icon iconId="vk"/>
        </FlexWrapper>
    )
}

