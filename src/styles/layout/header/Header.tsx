import { styled } from "styled-components";
import { Logo } from "../../../components/logo/Logo";
import { Menu } from "../../../components/menu/Menu";
import { FlexWrapper } from "../../../components/wrapper/FlexWrapper";
import { theme } from "../../Themes";

export const Header = () =>{
    return(
        <StyledHeader>
            <Logo />
            <FlexWrapper gap="30px">
                <Menu />
                <SytledSelect>
                    <option value="english">EN</option>
                    <option value="russian">RU</option>
                    <option value="ukrainian">UA</option>
                    <option value="belarusian">BE</option>
                </SytledSelect>
            </FlexWrapper>
        </StyledHeader>
    )
}

const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px 0;
`

const SytledSelect = styled.select`
    font-weight: 600;
    font-size: 16px;
    color: ${theme.color.font};
    background-color: ${theme.color.primaryBg};
    border: none;

    &:hover{
        color: ${theme.color.hoverText};
    }
`