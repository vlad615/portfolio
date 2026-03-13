import { StyledTable } from "../../../../components/Table";
import styled from "styled-components";

type SkillsCardProps = {
    group: string;
    values: Array<string>;
}

export const SkillsCard = (props: SkillsCardProps) => {
    return (
        <StyledTable maxwidth="calc(100% / 3 - 15px)">
            <thead>
                <tr>
                    <StyledTH>{props.group}</StyledTH>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><StyledP>{props.values.join(" ")}</StyledP></td>
                </tr>
            </tbody>


        </StyledTable>
    )
}

const StyledTH = styled.th`
    font-weight: 600;
    font-size: 16px;
    color: #fff;
    padding: 8px;
    text-align: start;
`

const StyledP = styled.p`
    line-height: 1.8em;
    padding: 8px;
`