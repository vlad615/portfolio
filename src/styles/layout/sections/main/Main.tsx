import { StyledWrapper } from "../../../../components/Wrapper/FlexWrapper"
import { ContactIcons } from "../../../../components/icons/ContactIcons"

export const Main = () => {
    return(
        <StyledWrapper>
            <ContactIcons/>
            <StyledWrapper direction="column">
                <h1>Vlad is a web developer and front-end developer</h1>
                <p>He crafts responsive websites where technologies meet creativity</p>
                <button>Contact me!!</button>
            </StyledWrapper>
            
        </StyledWrapper>
    )
}