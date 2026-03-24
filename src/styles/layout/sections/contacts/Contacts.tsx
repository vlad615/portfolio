import styled from "styled-components"
import { FlexWrapper } from "../../../../components/wrapper/FlexWrapper"
import { Icon } from "../../../../components/icons/Icon"
import { SectionTitle } from "../../../../components/title/SectionTitle"
import { theme } from "../../../Themes"
import { Container } from "../../../../components/wrapper/Container"

export const Contacts = () => {
    return(
        <Section>
            <Container>
                <SectionTitle afterWidth="130px" mgb="45px">contacts</SectionTitle>
                <FlexWrapper $justify="space-between">
                    <StyledP>
                        I’m interested in freelance opportunities. However, if you have other request or question, don’t hesitate to contact me
                    </StyledP>
                    <MessageMe>
                        <StyledH3>Massege me here</StyledH3>
                        <FlexWrapper $justify="center" $align="center" $gap="5px">
                            <Icon iconId="tg" viewbox="2,1,23,23"/><a href="">@VladislavElmirovich</a>
                        </FlexWrapper>
                        <FlexWrapper $justify="center" $align="center" $gap="5px">
                            <Icon iconId="email" viewbox="0,0,20,20"/><a href="mailto:ambrosov413@gmail.com">ambrosov413@gmail.com</a>
                        </FlexWrapper>
                    </MessageMe>
                </FlexWrapper>
            </Container>
        </Section>
    )
}

const Section = styled.section`
    margin-bottom: 145px;
`


const StyledH3 = styled.h3`
    font-weight: 600;
    font-size: 16px;
    color: #fff;
`
const StyledP = styled.p`
    max-width: 500px;
`

const MessageMe = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid ${theme.color.font};
    padding: 15px;
    gap: 15px;

    a{
        font-weight: 400;
        font-size: 16px;
        color: #abb2bf;
        transition: color 0.2 linear;

        &:hover{
            color: #fff;
        }
    }
`



