import { FlexWrapper } from "../../../components/wrapper/FlexWrapper"
import { SectionTitle } from "../../../components/title/SectionTitle"
import { StyledButton } from "../../../components/Buttons"
import styled from "styled-components"
import bg from "../../../accets/man.png"
import { Container } from "../../../components/wrapper/Container"
import { theme } from "../../../styles/Themes"

type AboutProps = {
    text: string;
}

export const About = (props: AboutProps) =>{
    return(
        <Section>
            <Container>
                <SectionTitle afterWidth="330px" mgb="20px">about-me</SectionTitle>
                <FlexWrapper $justify="space-between" $align="flex-start" $wrap="wrap">
                    <TextWrapper >
                        <StyledP>{props.text}</StyledP>
                        <StyledButton as="a">Read more →</StyledButton>
                    </TextWrapper>
                    <ImgWrapper>
                        <StyledImg src={bg}/>
                    </ImgWrapper>
                </FlexWrapper>
            </Container>
        </Section>
    )
}

const Section = styled.section`
    margin-bottom: 100px;
`

const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    align-items: flex-start;
    max-width: 515px;
`

const StyledP = styled.p`
    white-space: pre-wrap;
`

const ImgWrapper = styled.div`
    max-width: 340px;
    
`

const StyledImg = styled.img`
    width: 100%;
    z-index: 0;
`