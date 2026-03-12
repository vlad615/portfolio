import { styled } from "styled-components";

type TableProps = {
    maxwidth?: string;
}

export const StyledTable = styled.table<TableProps>`
    max-width: ${props => props.maxwidth || "330px"};
    border-collapse: collapse;
    border: 1px solid #abb2bf;

    tr {
        border-collapse: collapse;
        border: 1px solid #abb2bf;
    }
`