import styled from "styled-components"
import { Container } from "../../../../components/wrapper/Container"
import { SectionTitle } from "../../../../components/title/SectionTitle"
import { FlexWrapper } from "../../../../components/wrapper/FlexWrapper"


export const SmallProjects = () => {
    return(
        <Section>
            <Container>
                <SectionTitle $mgb="50px">small-projects</SectionTitle>
                <FlexWrapper>
                    
                </FlexWrapper>
            </Container>
        </Section>
    )
}

const Section = styled.section`
    margin-bottom: 180px;
`