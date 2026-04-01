import styled, { css } from "styled-components";
import { theme } from "../styles/Themes";
import { pinkLight } from "../styles/animations";

type ButtonsProps = {
    width?: string;
    fontSize?: string; 
    $dark?: boolean | null;
    $border?: string;
    backgraund?: string;
}

export const StyledButton = styled.button<ButtonsProps>`
    font-family: "Fira Code";
    font-weight: 500;
    font-size: ${props => props.fontSize || "16px"};
    color: #fff;
    border: ${ props => props.$border || `1px solid ${theme.color.accent}`};
    border-color: ${theme.color.accent};
    padding: 8px 16px;
    background-color:${props => props.backgraund || "transparent"};
    max-width: ${props => props.width || "none"};
    transition: all 0.2s linear;
    animation: ${pinkLight} 2s ease-in-out infinite ;

    &:hover{
        background: rgba(199, 120, 221, 0.2);
        animation: none;
        transform: scale(1.1);
    }

    ${props=>props.$dark && css<ButtonsProps>`
        border-color: #abb2bf;
        color: #abb2bf;

        &:hover{
            background: rgba(171, 178, 191, 0.2);
        }
    `}

`