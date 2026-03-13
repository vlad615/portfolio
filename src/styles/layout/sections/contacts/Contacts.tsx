import styled from "styled-components"
import { FlexWrapper } from "../../../../components/wrapper/FlexWrapper"
import { Icon } from "../../../../components/icons/Icon"
import { StyledH2 } from "../../../../components/SectionElements"
import { theme } from "../../../Themes"

export const Contacts = () => {
    return(
        <StyledSection>
            <StyledH2>contacts</StyledH2>
            <FlexWrapper justify="space-between">
                <Text>
                    I’m interested in freelance opportunities. However, if you have other request or question, don’t hesitate to contact me
                </Text>
                <MessageMe>
                    <StyledH3>Massege me here</StyledH3>
                    <FlexWrapper align="center" gap="5px">
                        <a href=""><Icon iconId="tg" viewbox="0,-1,23,23"/></a><StyledP>@VladislavElmirovich</StyledP>
                    </FlexWrapper>
                    <FlexWrapper align="center" gap="5px">
                        <a href=""><Icon iconId="email" viewbox="0,-2,20,20"/></a><StyledP>ambrosov413@gmail.com</StyledP>
                    </FlexWrapper>
                    
                </MessageMe>
            </FlexWrapper>
        </StyledSection>
    )
}

const StyledSection = styled.section`
    display: flex;
    flex-direction: column;
    gap: 45px;    
    margin-bottom: 145px;
`
const StyledH3 = styled.h3`
    font-weight: 600;
    font-size: 16px;
    color: #fff;
`
const StyledP = styled.p`
    
`

const MessageMe = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid ${theme.color.font};
    padding: 15px;
    gap: 15px;
`

const Text = styled.div`
    max-width: 500px
`

