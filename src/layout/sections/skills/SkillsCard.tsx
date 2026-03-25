import styled from "styled-components";
import { theme } from "../../../styles/Themes";

type SkillsCardProps = {
    group: string;
    values: Array<string>;
}

export const SkillsCard = (props: SkillsCardProps) => {
    return (
    <SkillWrapper>
        <StyledH3>{props.group}</StyledH3>
        <StyledP>{props.values.join(" ")}</StyledP>
    </SkillWrapper>
)}

const SkillWrapper = styled.div`
    max-width: 190px;
    border: solid 1px ${theme.color.font};
`

const StyledH3 = styled.h3`
    font-weight: 600;
    font-size: 16px;
    color: #fff;
    padding: 10px;
    border-bottom: solid 1px ${theme.color.font};
`

const StyledP = styled.p`
    line-height: 1.8em;
    padding: 5px;
`