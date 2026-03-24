import { styled } from "styled-components";
import { Logo } from "../../../components/logo/Logo";
import { Menu } from "./menu/Menu";
import { FlexWrapper } from "../../../components/wrapper/FlexWrapper";
import { Container } from "../../../components/wrapper/Container";
import { theme } from "../../Themes";
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
    padding: 30px 0;

    @media ${theme.media.tablet}{
        padding: 15px 0;
    }
`

