import { css, styled } from "styled-components"
import { theme } from "../../../Themes"
import { Logo } from "../../../../components/logo/Logo"
import { ContactIcons } from "../../../../components/icons/ContactIcons"


export const MobileMenu = () =>{
    return(
        <StyledMenu>
            <BurgerButton isOpen={false}>
                <span></span>
            </BurgerButton>
            
            <MobileMenuPopup isOpen={false}>
                <Logo />
                <ul>
                    <li><StyledA href="">home</StyledA></li>
                    <li><StyledA href="">works</StyledA></li>
                    <li><StyledA href="">about-me</StyledA></li>
                    <li><StyledA href="">contacts</StyledA></li>
                </ul>
                <SytledSelect id="language">
                    <option value="english">EN</option>
                    <option value="russian">RU</option>
                    <option value="ukrainian">UA</option>
                    <option value="belarusian">BE</option>
                </SytledSelect> 
                <ContactIcons width="64" height="64"/>
            </MobileMenuPopup>
        </StyledMenu>
    )
}

const StyledMenu = styled.nav`
    display: none;
    @media ${theme.media.tablet}{
        display: block;
    }
`

const MobileMenuPopup = styled.div<{isOpen: boolean}>`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 15px 15px 35px;
    display: none;
    background-color: ${theme.color.primaryBg};

    ${props => props.isOpen && css<{isOpen: boolean}>`
        display: flex;
        flex-direction: column;
    `}

    ul{
        margin-top: 55px;
        font-weight: 500;
        font-size: 32px;       
    }

    ul:nth-of-type(1) li{
        margin-bottom: 30px;
    }

    ul:nth-of-type(2){
        position: absolute;
        bottom: 40px;
        right: 50%;
        transform: translateX(50%);
        gap: 20px;
    }
    
`

const BurgerButton = styled.button<{isOpen: boolean}>`
    position: fixed;
    top: 15px;
    right: 15px;
    width: 25px;
    height: 25px;
    z-index: 99;

    span{
        display: block;
        width: 25px;
        height: 2px;
        background-color: ${theme.color.hoverFont};
        ${props => props.isOpen && css<{isOpen: boolean}>`
            transform: rotate(45deg);        
        `}


        &::after{
            content: "";
            display: block;
            width: 15px;
            height: 2px;
            right: 0;
            background-color: ${theme.color.hoverFont};
            transform: translate(10px, 5px);
            ${props => props.isOpen && css<{isOpen: boolean}>`
                width: 24px;
                transform: rotate(90deg) translateY(0);        
            `}
        }
    }
`

const StyledA = styled.a`
    color: ${theme.color.font}; 
    transition: color 0.2s linear;

    &::before {
        content: "#";
        color: ${theme.color.accent};
        transition: color 0.2s linear;
    }
    
    &:hover{
        color: ${theme.color.hoverFont};;
    }

    &:hover::before {
        filter: brightness(130%)
    }
`

const SytledSelect = styled.select`
    font-weight: 600;
    font-size: 32px;
    max-width: 65px;
    color: ${theme.color.font};
    background-color: ${theme.color.primaryBg};
    border: none;

    &:hover{
        color: ${theme.color.hoverFont};
    }
`