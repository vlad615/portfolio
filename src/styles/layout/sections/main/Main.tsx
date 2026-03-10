import styled from "styled-components"
import { StyledWrapper } from "../../../../components/Wrapper/FlexWrapper"
import { ContactIcons } from "../../../../components/icons/ContactIcons"
import { StyledSection } from "../../../../components/Wrapper/Container"
import me from "../../../../accets/me.webp"

export const Main = () => {
    return(
        <StyledSection>
            <StyledWrapper direction="column">
                <StyledWrapper>
                    <ContactIcons direction="column"/>
                    <StyledWrapper direction="column">
                        <h1>Vlad is a web developer and front-end developer</h1>
                        <p>He crafts responsive websites where technologies meet creativity</p>
                        <button>Contact me!!</button>
                    </StyledWrapper>
                    <Photo src={me} alt="Web Developer"/>
                </StyledWrapper>
                
                <StyledWrapper direction="column">
                    <q>With great power comes great electricity bill</q>
                    <span>- Dr. Who</span>
                </StyledWrapper>
                
            </StyledWrapper>
        </StyledSection>

    )
}

const Photo = styled.img`
    max-width: 350px;
    max-height: 350px;
    border: solid 5px transparent;
    border-radius: 50%;
    background: linear-gradient(to bottom, #E70FAA, #00C0FD) border-box; 
`