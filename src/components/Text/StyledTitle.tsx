import styled from "styled-components";

type StyledTitleProps = {
    weigth?: number;
    size?: string;
    color?: string;
}

export const StyledH1 = styled.h1<StyledTitleProps>`
    font-weight: ${props => props.weigth || 600};
    font-size: ${props => props.size || "32px"};
    color: ${props => props.color || "#fff"};
`

export const StyledH2 = styled.h2<StyledTitleProps>`
    font-weight: ${props => props.weigth || 500};
    font-size: ${props => props.size || "32px"};
    color: ${props => props.color || "#fff"};
`
