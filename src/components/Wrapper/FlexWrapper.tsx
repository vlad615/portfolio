import { styled } from "styled-components";


type FlexWrapperProps = {
    direction?: string;
    justify?: string;
    align?: string;
    wrap?: string;
    gap?: string;
    maxwidth?: string;
    minheight?: string
    padding?: string;
    border?: string;
}

export const FlexWrapper = styled.div<FlexWrapperProps>`
    display: flex;
    flex-direction: ${props => props.direction || "row"};
    justify-content: ${props => props.justify || "flex-start"};
    align-items: ${props => props.align || "stretch"};
    flex-wrap: ${props => props.wrap || "nowrap"};
    gap: ${props => props.gap || "0px"};
    max-width: ${props => props.maxwidth || "none"};
    min-height: ${props => props.minheight || "none"};
    padding: ${props => props.padding || "none"};
    border: ${props => props.border || "none"}

`