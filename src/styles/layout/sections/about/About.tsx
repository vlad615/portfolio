import { FlexWrapper } from "../../../../components/wrapper/FlexWrapper"
import { StyledH2 } from "../../../../components/SectionElements"
import { StyledButton } from "../../../../components/Buttons"
import styled from "styled-components"
import bg from "../../../../accets/Image.svg"

type AboutProps = {
    text: string;
}

export const About = (props: AboutProps) =>{
    return(
        <Section>
            <StyledH2>about-me</StyledH2>
            <FlexWrapper>
                <FlexWrapper direction="column" maxwidth="515px" gap="30px" justify="center" align="flex-start">
                    <StyledP>{props.text}</StyledP>
                    <StyledButton>Read more →</StyledButton>
                </FlexWrapper>
                <StyledImg src={bg}/>
            </FlexWrapper>
        </Section>
    )
}

const Section = styled.section`
    display: flex;
    flex-direction: column;
    margin-bottom: 100px;
`

const StyledP = styled.p`
    white-space: pre-wrap;
`

const StyledImg = styled.img`
    width:100%;
    max-height: 500px
`