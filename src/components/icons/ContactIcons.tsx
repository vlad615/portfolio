import {StyledWrapper} from "../Wrapper/FlexWrapper";
import { Icon } from "./Icon";

type ContactIconsProps = {
    direction?: string;
    gap?: string;
}

export const ContactIcons = (props: ContactIconsProps) =>{
    return(
        <StyledWrapper direction={props.direction || "row"} gap={props.gap || "10px"}>
            <Icon iconId="tg"/>
            <Icon iconId="git"/>
            <Icon iconId="vk"/>
        </StyledWrapper>
    )
}

