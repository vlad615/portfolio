import styled from "styled-components"
import { Container } from "../../../../components/wrapper/Container"
import { theme } from "../../../../styles/Themes"
import { light } from "../../../../styles/animations"
import { FlexWrapper } from "../../../../components/wrapper/FlexWrapper"
import { ContactComponent } from "../../../contacts/ContactComponent"
import { PagesTitle } from "../../../../components/title/PagesTitle"


export const ContactsSection = () => {
    return (
        <Section>
            <Container>
                <PagesTitle title="contants" text="How to conect with me?" $mgb="45px"/>
                <ContactComponent />
            </Container>
        </Section>
    )
}

const Section = styled.section`
    padding: 100px 0 25px;
    position: relative;
    overflow: hidden;

    &::before{
        content: "";
        position: absolute;
        width: 155px;
        height: 155px;
        border: 1px solid ${theme.color.font};
        right: 50%;
        bottom: 0;
        transform: translateX(770px);
        animation: ${light} 2s ease-in-out infinite ;
    }

    @media ${theme.media.tablet}{
        ${FlexWrapper}{
            flex-wrap: wrap;
        }
    }
`