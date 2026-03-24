import styled from "styled-components"
import { FlexWrapper } from "../../../components/wrapper/FlexWrapper"
import { Container } from "../../../components/wrapper/Container"
import { Logo } from "../../../components/logo/Logo"
import { ContactIcons } from "../../../components/icons/ContactIcons"
import { theme } from "../../Themes"

export const Footer = () => {
    return(
        <StyledFooter>
            <Container>
                <FlexWrapper direction="column" $gap="50px">
                    <FlexWrapper $justify="space-between">
                        <div>
                            <FlexWrapper $align="center">
                                <Logo />
                                <a>ambrosov413@gmail.com</a>
                            </FlexWrapper>
                            <StyledP>Web designer and front-end developer</StyledP>
                        </div>
                        <FlexWrapper direction="column" $align="flex-start" $gap="10px">
                            <StyledSpan>Media</StyledSpan>
                            <ContactIcons $gap="10px"/>
                        </FlexWrapper>
                    </FlexWrapper>
                    <StyledSmall>© Copyright 2022. Made by Elias</StyledSmall>
                </FlexWrapper>
            </Container>
        </StyledFooter>
    )
}

const StyledFooter = styled.footer`
    border-top: 1px solid ${theme.color.font};
    text-align: center;
    padding: 30px 0;
`

const StyledSmall = styled.small`
    align-self: center;
    font-size: 16px;
`

const StyledP = styled.p`
    margin-top: 15px;
`

const StyledSpan = styled.span`
    font-weight: 500;
    font-size: 24px;
    color: #fff;
`
