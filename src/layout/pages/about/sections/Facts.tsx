import styled from "styled-components"
import { light } from "../../../../styles/animations"
import { theme } from "../../../../styles/Themes"
import { Container } from "../../../../components/wrapper/Container"
import { SectionTitle } from "../../../../components/title/SectionTitle"


export const Facts = () =>{
    return <Section>
        <Container>
            <SectionTitle $mgb="25px">my-facts</SectionTitle>
            <FactsWrapper>
                <Fact>I don't like sushi</Fact>
                <Fact>I often play tenis with my friend</Fact>
                <Fact>My favorite movie is The pursuit of happyness</Fact>
                <Fact>I like <span>chess</span></Fact>
                <Fact>My play the <span>guitar</span></Fact>
                <Fact>I don't like video games</Fact>
            </FactsWrapper>
        </Container>
    </Section>
}

const Section = styled.div`
    padding: 100px 0;
    position: relative;
    overflow: hidden;

    &::before{
        content: "";
        position: absolute;
        background-image: url('/elements/Dots.svg');
        background-repeat: no-repeat;
        width: 100px;
        height: 100px;
        bottom: 10%;
        right: 50%;
        transform: translateX(710px);
        animation: ${light} 2s ease-in-out infinite;
    }

    &::after{
        content: "";
        position: absolute;
        width: 155px;
        height: 155px;
        border: 1px solid ${theme.color.font};
        right: 50%;
        top: 37%;
        transform: translateX(-600px);
        animation: ${light} 2s ease-in-out infinite;
    }
`

const FactsWrapper = styled.div`
    display: flex;
    gap: 15px;
    flex-wrap: wrap;
    max-width: 600px;
    position: relative;

    &::before{
        content: "";
        position: absolute;
        background-image: url("/public/elements/Group.png");
        background-repeat: no-repeat;
        width: 180px;
        height: 170px;
        left: 0;
        transform: translateX(750px);
    }
`

const Fact = styled.p`
    font-size: 16px;
    padding: 8px;
    border: 1px solid ${theme.color.font};
    
    span{
        color: ${theme.color.hoverFont};
    }
`