import styled from "styled-components"
import { Container } from "../../../../components/wrapper/Container"
import { light } from "../../../../styles/animations"
import { SectionTitle } from "../../../../components/title/SectionTitle"
import { Icon } from "../../../../components/icons/Icon"
import { Fade } from "react-awesome-reveal"
import { theme } from "../../../../styles/Themes"


export const AllMedia = () => {
    return (
        <Section>
            <Container>
                <Fade>
                    <SectionTitle $mgb="20px">all-media</SectionTitle>
                </Fade>
                
                
                <a href="https://gitlab.com/vlad615" target="_blank" rel="noopener noreferrer">
                    <Icon iconId="gitlab" width="140" height="60" viewbox="0 0 990 380" />
                </a>
                <a href="https://gitlab.com/vlad615" target="_blank" rel="noopener noreferrer">
                    <Icon iconId="github-big" width="130" height="60" viewbox="0 0 448 127" />
                </a>
            </Container>
        </Section>
    )
}

const Section = styled.div`
    margin-bottom: 80px;
    position: relative;
    overflow: hidden;

    &::after{
        content: "";
        position: absolute;
        display: inline-block;
        background-image: url("/elements/Dots.svg");
        background-repeat: no-repeat;
        width: 110px;
        height: 50px;
        right: 50%;
        top: 0;
        transform: translateX(-600px);
        animation: ${light} 2s ease-in-out infinite;
    }

    @media ${theme.media.mobile}{
        margin-bottom: 60px;
    }
`
