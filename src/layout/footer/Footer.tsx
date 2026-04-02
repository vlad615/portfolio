import styled from "styled-components"
import { FlexWrapper } from "../../components/wrapper/FlexWrapper"
import { Container } from "../../components/wrapper/Container"
import { Logo } from "../../components/logo/Logo"
import { ContactIcons } from "../../components/icons/ContactIcons"
import { theme } from "../../styles/Themes"
import { Fade } from "react-awesome-reveal"

export const Footer = () => {
    return(
        <StyledFooter>
            <Container>
                <FlexWrapper direction="column" $gap="50px">
                    <FlexWrapper $justify="space-between" $wrap="wrap" $gap="15px">
                        <Fade direction="left">
                            <div>
                                <FlexWrapper $align="center">
                                    <Logo />
                                    <a>ambrosov413@gmail.com</a>
                                </FlexWrapper>
                                <StyledTitle>Back-end developer and front-end developer</StyledTitle>
                            </div>
                        </Fade>
                        
                        <Fade direction="right">
                            <FlexWrapper direction="column" $align="flex-start" $gap="10px">
                                <StyledSpan>Media</StyledSpan>
                                <ContactIcons $gap="10px"/>
                            </FlexWrapper>
                        </Fade>
                        
                    </FlexWrapper>
                    <Fade direction="up">
                        <StyledSmall>© Copyright 2022. Made by Elias</StyledSmall>
                    </Fade>
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

const StyledTitle = styled.h1`
    margin-top: 15px;
    text-align: start;
    font-weight: 400;
    font-size: 16px;
    color: #fff;
`

const StyledSpan = styled.span`
    font-weight: 500;
    font-size: 24px;
    color: #fff;
`
