import { css, styled } from "styled-components"
import { theme } from "../../../styles/Themes"
import { Logo } from "../../../components/logo/Logo"
import { ContactIcons } from "../../../components/icons/ContactIcons"
import { StyledButton } from "../../../components/Buttons"
import { useState } from "react"
import { Menu } from "../menu/Menu"
import { Languages } from "../menu/Languages"
import { Fade } from "react-awesome-reveal"


export const MobileMenu = () =>{
    const [isMenuOpen, setIsMenuopen] = useState(false);

    function changeMenuOpen(){
        setIsMenuopen(!isMenuOpen)
    }

    return(
        <StyledMenu>
            <BurgerButton $isOpen={isMenuOpen} onClick={changeMenuOpen}>
                <span></span>
            </BurgerButton>
            <MobileMenuPopup $isOpen={isMenuOpen}>
                    <Logo />

                    <Menu changeMenuOpen={changeMenuOpen}/>
                    <Fade direction="down">
                        <StyledButton as="a" fontSize="24px" $border="3px solid">Contact me!!</StyledButton>
                        <Languages fontSize="32px"/>
                    </Fade>
                    <ContactIcons width="64" height="64"/>
            </MobileMenuPopup>
        </StyledMenu>
    )
}

const StyledMenu = styled.nav``

const MobileMenuPopup = styled.div<{$isOpen: boolean}>`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 15px 15px 35px;
    display: none;
    z-index: 98;
    background-color: ${theme.color.primaryBg};
    opacity: 90%;

    ul:nth-of-type(1){
        margin-top: 55px;
        
        li + li{
            margin-top: 30px;
        }
    }

    ul:nth-of-type(2){
        position: absolute;
        bottom: 40px;
        right: 50%;
        transform: translateX(50%);
        gap: 20px;
    }

    ${props => props.$isOpen && css<{$isOpen: boolean}>`
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 30px;
    `}    
`

const BurgerButton = styled.button<{$isOpen: boolean}>`
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
        ${props => props.$isOpen && css<{$isOpen: boolean}>`
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
            ${props => props.$isOpen && css<{$isOpen: boolean}>`
                width: 24px;
                transform: rotate(90deg) translateY(0);        
            `}
        }
    }
`
