import styled from "styled-components";
import { theme } from "../../styles/Themes";

type StyledTitleProps = {
    weigth?: number;
    size?: string;
    color?: string;
    before?: string;
    afterWidth?: string;
    mgb?: string;
}


export const SectionTitle = styled.h2<StyledTitleProps>`
    position: relative;
    font-weight: ${props => props.weigth || 500};
    font-size: ${props => props.size || "32px"};
    color: ${props => props.color || "#fff"};
    margin-bottom: ${props => props.mgb || "0px"};

    &::before {
        content: '${props => props.before || "#"}';
        color: ${theme.color.accent};
        transition: color 0.2s linear;
    }
    
    &::after{
        content: "";
        position: absolute;
        height: 1px;
        width: ${props => props.afterWidth || "0px"};
        background-color: ${theme.color.accent};
        transform: translateX(15px);
        top: 50%;
    }
`