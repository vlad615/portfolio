import styled from "styled-components";

type StyledTitleProps = {
    weigth?: number;
    size?: string;
    color?: string;
    border?: string;
}

export const StyledH1 = styled.h1<StyledTitleProps>`
    font-weight: ${props => props.weigth || 600};
    font-size: ${props => props.size || "32px"};
    color: ${props => props.color || "#fff"};
    border: ${props => props.border || "none"};
`

export const StyledH2 = styled.h2<StyledTitleProps>`
    font-weight: ${props => props.weigth || 500};
    font-size: ${props => props.size || "32px"};
    color: ${props => props.color || "#fff"};
    border: ${props => props.border || "none"};
`
