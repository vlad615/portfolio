import { StyledTable } from "../../../../components/Table";
import styled from "styled-components";

type SkillsCardProps = {
    group: string;
    values: Array<string>;
}

export const SkillsCard = (props: SkillsCardProps) => {
    return (
        <StyledTable maxwidth="calc(100% / 3 - 10px)">
            <thead>
                <tr>
                    <th>{props.group}</th>
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

const StyledP = styled.p`
    
`