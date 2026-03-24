import { FlexWrapper } from "../../../../components/wrapper/FlexWrapper"
import { SectionTitle } from "../../../../components/title/SectionTitle"
import { StyledButton } from "../../../../components/Buttons"
import styled from "styled-components"
import bg from "../../../../accets/Image.svg"
import { Container } from "../../../../components/wrapper/Container"
import { theme } from "../../../Themes"

type AboutProps = {
    text: string;
}

export const About = (props: AboutProps) =>{
    return(
        <Section>
            <Container>
                <SectionTitle afterWidth="330px" mgb="20px">about-me</SectionTitle>
                <FlexWrapper $justify="space-between" $align="flex-start">
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
    position: relative;

    &::before{
        content: "";
        position: absolute;
        background-image: url('/elements/Dots.svg');
        width: 85px;
        height: 85px;
        top: 60px;
        z-index: -1;
    }

    &::after{
        content: "";
        position: absolute;
        background-image: url('/elements/Dots.svg');
        width: 100px;
        height: 55px;
        background-size: cover;
        left: 65%;
        bottom: 180px;
    }
`

const StyledImg = styled.img`
    width: 100%;
    z-index: 0;
`