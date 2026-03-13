import styled from "styled-components"
import { theme } from "../../../Themes"
import { FlexWrapper } from "../../../../components/wrapper/FlexWrapper"
import { ContactIcons } from "../../../../components/icons/ContactIcons"
import { StyledH1 } from "../../../../components/SectionTitle"
import vertical from "../../../../accets/elements/vertical.svg"
import frame from "../../../../accets/elements/frame.svg"
import me from "../../../../accets/me.webp"
import { StyledButton } from "../../../../components/Buttons"

export const Main = () => {
    return (
        <Section>
            <FlexWrapper justify="space-between">
                <ContactWrapper><ContactIcons direction="column" /></ContactWrapper>
                <FlexWrapper direction="column" maxwidth="540px" align="flex-start">
                    <StyledH1>Vlad is a
                        <StyledSpan> web developer</StyledSpan> and
                        <StyledSpan> front-end developer</StyledSpan>
                    </StyledH1>
                    <StyledP>He crafts responsive websites where technologies meet creativity</StyledP>
                    <StyledButton width="150px">Contact me!!</StyledButton>
                </FlexWrapper>
                <ImgWrapper>
                    <Photo src={me} alt="Web Developer" />
                </ImgWrapper>

            </FlexWrapper>

            <QuotWrapper>
                <StyledQ>With great power comes great electricity bill</StyledQ>
                <span>- Dr. Who</span>
            </QuotWrapper>
        </Section>

    )
}

const Section = styled.section`
    margin: 30px 0 75px;
    position: relative;
    &::before{
        content: "";
        background-image: url(vertical);
        left: -100px;
    }
`

const ContactWrapper = styled.div`
    position: absolute;
    left: -100px;     
`
const StyledSpan = styled.span`
    background-image: ${theme.color.accent};
    -webkit-background-clip: text; 
    background-clip: text;         
    color: transparent;
`

const StyledP = styled.p`
    margin: 30px 0 25px;
`

const ImgWrapper = styled.div`
    max-width: 300px;
    max-height: 300px;
    margin-bottom: 110px;
    
    &::after{
        background-image: url({frame});
        background-size: 200%;
    }
`

const Photo = styled.img`
    width: 100%;
    object-fit: cover;
    border: solid 5px transparent;
    border-radius: 50%;
    background: ${theme.color.imgBorder} border-box; 
`

const QuotWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-self: center;
`

const StyledQ = styled.q`
    position: relative;
    font-weight: 500;
    font-size: 24px;
    color: #fff;
    padding: 30px;
    border: 1px solid #abb2bf;

    & + span{
        font-weight: 400;
        font-size: 24px;
        color: #fff;
        padding: 15px;
        border: 1px solid #abb2bf;
    }

`