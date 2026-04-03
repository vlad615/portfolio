import styled from "styled-components"
import { ContactIcons } from "../../components/icons/ContactIcons"
import { theme } from "../../styles/Themes"
import { pinkLight } from "../../styles/animations"


export const AsideContacts = () =>{
    return(
        <ContactWrapper>
            <ContactIcons direction="column" />
        </ContactWrapper> 
        
    )
}

const ContactWrapper = styled.div`
    position: fixed;
    left: 50%;
    top: 200px;
    transform: translateX(-580px);
    z-index: 96;

    &::before{
        content: "";
        position: absolute;
        background-color: ${theme.color.font};
        width: 1px;
        height: 195px;
        top: -210px;
        right: 50%;
        animation: ${pinkLight} 2s ease-in-out infinite;
    }
    
    @media screen and (max-width: 1180px){
        display: none;
    }
`