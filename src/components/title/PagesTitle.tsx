import styled from "styled-components"
import { SectionTitle } from "./SectionTitle"
import { theme } from "../../styles/Themes"

type PagesTitleProps = {
    title: string;
    text: string;
    $mgb?: string;
}

export const PagesTitle = (props: PagesTitleProps) => {
    return(
        <>
            <SectionTitle $weigth={600} $before="/" $mgb="15px">{props.title}</SectionTitle>
            <StyledP $mgb={props.$mgb}>{props.text}</StyledP>
        </>
    )
}

const StyledP = styled.p<{$mgb?: string}>`
    font-size: 16px;
    color: ${theme.color.hoverFont};
    margin-bottom: ${props => props.$mgb || "10px"};
`