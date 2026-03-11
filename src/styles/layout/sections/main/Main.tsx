import styled from "styled-components"
import { FlexWrapper } from "../../../../components/Wrapper/FlexWrapper"
import { ContactIcons } from "../../../../components/icons/ContactIcons"
import { ContainerSection } from "../../../../components/Wrapper/Container"
import me from "../../../../accets/me.webp"

export const Main = () => {
    return(
        <ContainerSection>
            <FlexWrapper direction="column">
                <FlexWrapper>
                    <ContactIcons direction="column"/>
                    <FlexWrapper direction="column">
                        <h1>Vlad is a web developer and front-end developer</h1>
                        <p>He crafts responsive websites where technologies meet creativity</p>
                        <button>Contact me!!</button>
                    </FlexWrapper>
                    <Photo src={me} alt="Web Developer"/>
                </FlexWrapper>
                
                <FlexWrapper direction="column">
                    <q>With great power comes great electricity bill</q>
                    <span>- Dr. Who</span>
                </FlexWrapper>
                
            </FlexWrapper>
        </ContainerSection>

    )
}

const Photo = styled.img`
    max-width: 350px;
    max-height: 350px;
    border: solid 5px transparent;
    border-radius: 50%;
    background: linear-gradient(to bottom, #E70FAA, #00C0FD) border-box; 
`