import { styled } from "styled-components";
import { Logo } from "../../components/logo/Logo";
import { Menu } from "./menu/Menu";
import { FlexWrapper } from "../../components/wrapper/FlexWrapper";
import { Container } from "../../components/wrapper/Container";
import { theme } from "../../styles/Themes";
import { MobileMenu } from "./mobileMenu/MobileMenu";

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper $justify="space-between" $align="center">
                    <Logo />
                    <FlexWrapper $gap="30px">
                        <Menu />
                        <MobileMenu />
                    </FlexWrapper>
                </FlexWrapper>
                    
            </Container>
        </StyledHeader>
    )
}

const StyledHeader = styled.header`
    position: fixed;
    width: 100%;
    top: 0;
    padding: 5px 0;
    background-color: ${theme.color.primaryBg};
    z-index: 95;

    @media ${theme.media.tablet}{
        padding: 15px 0;
    }

    @media ${theme.media.mobile}{
        padding: 5px 0;
    }
`

