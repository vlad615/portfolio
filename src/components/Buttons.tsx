import styled, { css } from "styled-components";

type ButtonsProps = {
    width?: string;
    $dark?: boolean | null;
}

export const StyledButton = styled.button<ButtonsProps>`
    font-family: "Fira Code";
    font-weight: 500;
    font-size: 16px;
    color: #fff;
    border: 1px solid #c778dd;
    padding: 8px 16px;
    background-color: transparent;
    max-width: ${props => props.width};
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