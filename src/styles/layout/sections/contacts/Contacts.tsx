import styled from "styled-components"
import { FlexWrapper } from "../../../../components/wrapper/FlexWrapper"
import { Icon } from "../../../../components/icons/Icon"
import { StyledH2 } from "../../../../components/SectionTitle"

export const Contacts = () => {
    return(
        <StyledSection>
            <StyledH2>#contacts</StyledH2>
            <FlexWrapper justify="space-between">
                <Text>
                    I’m interested in freelance opportunities. However, if you have other request or question, don’t hesitate to contact me
                </Text>
                <MessageMe>
                    <StyledH3>Massege me here</StyledH3>
                    <StyledP><a href=""><Icon iconId="tg"/></a> @VladislavElmirovich</StyledP>
                    <StyledP><a href=""><Icon iconId="email" viewbox="0,0,20,20"/></a> ambrosov413@gmail.com</StyledP>
                </MessageMe>
            </FlexWrapper>
            
        </StyledSection>
    )
}

const StyledSection = styled.section`
    
`
const StyledH3 = styled.h3`
    
`
const StyledP = styled.p`
    
`

const MessageMe = styled.div`
    display: flex;
    flex-direction: column;
    border: 2px solid darkgray
`

const Text = styled.div`
    max-width: 500px
`

