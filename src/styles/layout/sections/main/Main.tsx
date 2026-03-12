import styled from "styled-components"
import { FlexWrapper } from "../../../../components/wrapper/FlexWrapper"
import { ContactIcons } from "../../../../components/icons/ContactIcons"
import me from "../../../../accets/me.webp"
import { StyledButton } from "../../../../components/Buttons"

export const Main = () => {
    return(
        <Section>
            <FlexWrapper>
                <ContactIcons direction="column"/>

                <FlexWrapper direction="column" maxwidth="540px">
                    <h1>Vlad is a web developer and front-end developer</h1>
                    <p>He crafts responsive websites where technologies meet creativity</p>
                    <StyledButton width="150px">Contact me!!</StyledButton>
                </FlexWrapper>
                <Photo src={me} alt="Web Developer"/>
            </FlexWrapper>
            
            <FlexWrapper direction="column">
                <q>With great power comes great electricity bill</q>
                <span>- Dr. Who</span>
            </FlexWrapper>
        </Section>

    )
}

const Section = styled.section`
`

const Photo = styled.img`
    max-width: 350px;
    max-height: 350px;
    border: solid 5px transparent;
    border-radius: 50%;
    background: linear-gradient(to bottom, #E70FAA, #00C0FD) border-box; 
`