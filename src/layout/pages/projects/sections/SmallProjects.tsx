import styled from "styled-components"
import { Container } from "../../../../components/wrapper/Container"
import { SectionTitle } from "../../../../components/title/SectionTitle"
import { FlexWrapper } from "../../../../components/wrapper/FlexWrapper"
import { SmallPrjCard } from "../../../../components/cards/SmallPrjCard"
import { theme } from "../../../../styles/Themes"
import { Fade } from "react-awesome-reveal"


export const SmallProjects = () => {
    return(
        <Section>
            <Container>
                <TitleWrapper>
                    <SectionTitle $mgb="30px">small-projects</SectionTitle>
                </TitleWrapper>
                
                <Fade direction="right">
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
                </Fade>
                
            </Container>
        </Section>
    )
}

const Section = styled.section`
    padding-top: 80px;
    margin-bottom: 180px;
    overflow: hidden;
    position: relative;

    &::before{
        content: "";
        position: absolute;
        width: 100px;
        height: 100px;
        background-image: url("/elements/Dots.svg");
        background-repeat: no-repeat;
        background-size: cover;
        right: 50%;
        bottom: 24%;
        transform: translateX(-630px);
    }

        &::after{
        content: "";
        position: absolute;
        width: 100px;
        height: 100px;
        background-image: url("/elements/Dots.svg");
        background-repeat: no-repeat;
        background-size: cover;
        right: 50%;
        top: 18%;
        transform: translateX(700px);
    }

    @media ${theme.media.mobile}{
        padding-top: 40px;
        margin-bottom: 80px;
    }
`

const TitleWrapper = styled(Fade)`
    &::before{
        content: "";
        position: absolute;
        width: 155px;
        height: 155px;
        border: 1px solid ${theme.color.font};
        right: 50%;
        top: 10px;
        transform: translateX(-605px);
    }
`