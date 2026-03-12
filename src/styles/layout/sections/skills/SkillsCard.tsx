import { StyledTable } from "../../../../components/Table";
import styled from "styled-components";

type SkillsCardProps = {
    group: string;
    values: Array<string>;
}

export const SkillsCard = (props: SkillsCardProps) => {
    return(
        <StyledTable maxwidth="calc(100% / 3 - 10px)">
            <th>{props.group}</th>
            <tr><StyledP>{props.values.join(" ")}</StyledP></tr>
            
        </StyledTable>
    )
}

const StyledP = styled.p`
    
`