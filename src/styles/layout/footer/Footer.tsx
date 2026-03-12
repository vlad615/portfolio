import styled from "styled-components"
import { FlexWrapper } from "../../../components/wrapper/FlexWrapper"
import { Logo } from "../../../components/logo/Logo"
import { ContactIcons } from "../../../components/icons/ContactIcons"

export const Footer = () => {
    return(
        <StyledFooter>
            <FlexWrapper justify="space-between">
                <FlexWrapper direction="column" >
                    <FlexWrapper>
                        <Logo />
                        <StyledP>ambrosov413@gmail.com</StyledP>
                    </FlexWrapper>
                    <StyledP>Web designer and front-end developer</StyledP>
                </FlexWrapper>
                <FlexWrapper direction="column" align="flex-start">
                    <StyledSpan>Media</StyledSpan>
                    <ContactIcons />
                </FlexWrapper>
            </FlexWrapper>
            
            <StyledP>© Copyright 2022. Made by Elias</StyledP>
        </StyledFooter>
    )
}

const StyledFooter = styled.footer`

    text-align: center;
`
const StyledP = styled.p`
    align-self: flex-start;
`
const StyledSpan = styled.span`
    
`