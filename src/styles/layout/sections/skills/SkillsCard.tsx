import { FlexWrapper } from "../../../../components/Wrapper/FlexWrapper"
import { StyledH2 } from "../../../../components/Text/StyledTitle"
import { StyledP } from "../../../../components/Text/StyledP"

type SkillsCardProps = {
    group: string;
    values: Array<string>;
}

export const SkillsCard = (props: SkillsCardProps) => {
    return(
        <FlexWrapper direction="column" padding="10px" maxwidth="195px"  border="1px solid #abb2bf">
            <StyledH2 weigth={600} size="16px">{props.group}</StyledH2>
            <StyledP>{props.values.join(" ")}</StyledP>
        </FlexWrapper>
    )
}
