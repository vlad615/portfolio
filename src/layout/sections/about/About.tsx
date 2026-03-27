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
                <FlexWrapper $justify="space-between" $align="flex-start" $gap="30px">
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

    @media ${theme.media.tablet}{
        margin-bottom: 50px;
        ${FlexWrapper}{
            flex-wrap: wrap;
            justify-content: center;
        }
    }
`

const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    align-items: flex-start;
    max-width: 515px;

    @media ${theme.media.tablet}{
        max-width: unset;
    }
`

const StyledP = styled.p`
    white-space: pre-wrap;
`

const ImgWrapper = styled.div`
    max-width: 340px;
    min-width: 280px;
    @media ${theme.media.tablet}{
        max-width: 280px;
    }
`

const StyledImg = styled.img`
    width: 100%;
    z-index: 0;
`