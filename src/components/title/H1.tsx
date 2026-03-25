import { styled } from "styled-components";

type StyledTitleProps = {
    weigth?: number;
    size?: string;
    color?: string;
    border?: string;
}

export const H1 = styled.h1<StyledTitleProps>`
    font-weight: ${props => props.weigth || 600};
    font-size: ${props => props.size || "32px"};
    color: ${props => props.color || "#fff"};
    border: ${props => props.border || "none"};
    white-space:  collapse;
`