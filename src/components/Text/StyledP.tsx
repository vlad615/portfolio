

import styled from "styled-components";

type StyledPProps = {
    weigth?: number;
    size?: string;
    color?: string;
    border?: string;
}

export const StyledP = styled.p<StyledPProps>`
    font-weight: ${props => props.weigth || 400};
    font-size: ${props => props.size || "16px"};
    color: ${props => props.color || "#abb2bf"};
    border: ${props => props.border || "none"};
`
