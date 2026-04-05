import styled from "styled-components"
import { FlexWrapper } from "../../../../../components/wrapper/FlexWrapper"
import { SectionTitle } from "../../../../../components/title/SectionTitle"
import { theme } from "../../../../../styles/Themes"
import { Container } from "../../../../../components/wrapper/Container"
import { light } from "../../../../../styles/animations"
import { Fade } from "react-awesome-reveal"
import { ContactComponent } from "../../../../contacts/ContactComponent"

export const Contacts = () => {
    return(
        <Section>
            <Container>
                <Fade>
                    <SectionTitle $afterWidth="130px" $mgb="45px">contacts</SectionTitle>
                </Fade>
                <ContactComponent />
            </Container>
        </Section>
    )
}

const Section = styled.section`
    margin-bottom: 145px;
    position: relative;

    &::after{
        content: "";
        position: absolute;
        display: inline-block;
        background-image: url("/elements/Dots.svg");
        background-repeat: no-repeat;
        background-size: cover;
        width: 100px;
        height: 100px;
        right: 50%;
        bottom: 10%;
        transform: translateX(-630px);
        animation: ${light} 2s ease-in-out infinite;
    }

    @media ${theme.media.tablet}{
        margin-bottom: 80px;
        ${FlexWrapper}{
            flex-wrap: wrap;
        }
    }
`




