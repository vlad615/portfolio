import { styled } from "styled-components"
import { theme } from "../../../styles/Themes"

type LanguagesProps = {
    fontSize?: string;
}

export const Languages = (props: LanguagesProps) => {
    return(
    <SytledSelect fontSize={props.fontSize} id="language">
        <option value="english">EN</option>
        <option value="russian">RU</option>
        <option value="ukrainian">UA</option>
        <option value="belarusian">BE</option>
    </SytledSelect> 
    )
}

const SytledSelect = styled.select<LanguagesProps>`
    font-weight: 600;
    font-size: ${props => props.fontSize || "16px"};
    max-width: 65px;
    color: ${theme.color.font};
    background-color: ${theme.color.primaryBg};
    border: none;

    &:hover{
        color: ${theme.color.hoverFont};
    }
`