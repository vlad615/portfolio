import styled, { css } from "styled-components";
import { theme } from "../styles/Themes";

type ButtonsProps = {
    width?: string;
    fontSize?: string; 
    $dark?: boolean | null;
    border?: string;
}

export const StyledButton = styled.button<ButtonsProps>`
    font-family: "Fira Code";
    font-weight: 500;
    font-size: ${props => props.fontSize || "16px"};
    color: #fff;
    border: ${ props => props.border || `1px solid ${theme.color.accent}`};
    border-color: ${theme.color.accent};
    padding: 8px 16px;
    background-color: transparent;
    max-width: ${props => props.width || "none"};
    transition: background-color 0.2s linear;

    &:hover{
        background: rgba(199, 120, 221, 0.2);
    }

    ${props=>props.$dark && css<ButtonsProps>`
        border-color: #abb2bf;
        color: #abb2bf;

        &:hover{
            background: rgba(171, 178, 191, 0.2);
        }
    `}

`