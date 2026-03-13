import styled from "styled-components"
import { FlexWrapper } from "../../../components/wrapper/FlexWrapper"
import { Logo } from "../../../components/logo/Logo"
import { ContactIcons } from "../../../components/icons/ContactIcons"
import { theme } from "../../Themes"

export const Footer = () => {
    return(
        <StyledFooter>
            <FlexWrapper justify="space-between">
                <FlexWrapper gap="15px" direction="column" justify="center">
                    <FlexWrapper align="center">
                        <Logo />
                        <StyledP>ambrosov413@gmail.com</StyledP>
                    </FlexWrapper>
                    <StyledP>Web designer and front-end developer</StyledP>
                </FlexWrapper>
                <FlexWrapper direction="column" align="flex-start" gap="10px">
                    <StyledSpan>Media</StyledSpan>
                    <ContactIcons gap="10px"/>
                </FlexWrapper>
            </FlexWrapper>
            <StyledP>© Copyright 2022. Made by Elias</StyledP>
        </StyledFooter>
    )
}

const StyledFooter = styled.footer`
    display:flex;
    flex-direction: column;
    gap: 50px;
    border-top: 1px solid ${theme.color.font};
    padding: 30px 0;
    text-align: center;
`
const StyledP = styled.p`
    align-self: center;
`
const StyledSpan = styled.span`
    font-weight: 500;
    font-size: 24px;
    color: #fff;
`