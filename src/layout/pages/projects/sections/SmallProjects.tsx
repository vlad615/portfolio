import styled from "styled-components"
import { Container } from "../../../../components/wrapper/Container"
import { SectionTitle } from "../../../../components/title/SectionTitle"
import { FlexWrapper } from "../../../../components/wrapper/FlexWrapper"
import { SmallPrjCard } from "../../../../components/cards/SmallPrjCard"


export const SmallProjects = () => {
    return(
        <Section>
            <Container>
                <SectionTitle $mgb="50px">small-projects</SectionTitle>
                <FlexWrapper $wrap="wrap" $gap="15px">
                    <SmallPrjCard tools={['HTML', 'CSS', 'JS']} title="Bot boilerplate" description="Start creating scalable discord.js bot with typescript in seconds" />
                    <SmallPrjCard tools={['HTML', 'CSS', 'JS']} title="Bot boilerplate" description="Start creating scalable discord.js bot with typescript in seconds" />
                    <SmallPrjCard tools={['HTML', 'CSS', 'JS']} title="Bot boilerplate" description="Start creating scalable discord.js bot with typescript in seconds" />
                    <SmallPrjCard tools={['HTML', 'CSS', 'JS']} title="Bot boilerplate" description="Start creating scalable discord.js bot with typescript in seconds" />
                    <SmallPrjCard tools={['HTML', 'CSS', 'JS']} title="Bot boilerplate" description="Start creating scalable discord.js bot with typescript in seconds" />
                    <SmallPrjCard tools={['HTML', 'CSS', 'JS']} title="Bot boilerplate" description="Start creating scalable discord.js bot with typescript in seconds" />
                    <SmallPrjCard tools={['HTML', 'CSS', 'JS']} title="Bot boilerplate" description="Start creating scalable discord.js bot with typescript in seconds" />
                    <SmallPrjCard tools={['HTML', 'CSS', 'JS']} title="Bot boilerplate" description="Start creating scalable discord.js bot with typescript in seconds" />
                </FlexWrapper>
            </Container>
        </Section>
    )
}

const Section = styled.section`
    margin-bottom: 180px;
`