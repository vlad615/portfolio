import { styled } from "styled-components";
import { Logo } from "../../../components/Logo/Logo";
import { Menu } from "../../../components/Menu/Menu";

export const Header = () =>{
    return(
        <StyledHeader>
            <Logo />
            <div style={{display: "flex", gap: '30px'}}>
                <Menu />
                <SytledSelect>
                    <option value="english">EN</option>
                    <option value="russian">RU</option>
                    <option value="ukrainian">UA</option>
                    <option value="belarusian">BE</option>
                </SytledSelect>
            </div>
            
        </StyledHeader>
    )
}

const StyledHeader = styled.header`
    max-width: 1400px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
`

const SytledSelect = styled.select.attrs(()=>({
    name: 'language',
    id: 'language'
}))`
`