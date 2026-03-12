import { FlexWrapper } from "../../../../components/Wrapper/FlexWrapper"
import { StyledH2 } from "../../../../components/Text/StyledTitle"
import { StyledP } from "../../../../components/Text/StyledP"
import styled from "styled-components"
import bg from "../../../../accets/Image.svg"

export const About = () =>{
    return(
        <Section>
            <StyledH2>#about-me</StyledH2>
            <FlexWrapper>
                <FlexWrapper direction="column" maxwidth="515px">
                    <StyledP>
                        Hello, i’m Elias!

    I’m a self-taught front-end developer based in Kyiv, Ukraine. I can develop responsive websites from scratch and raise them into modern user-friendly web experiences. 

    Transforming my creativity and knowledge into a websites has been my passion for over a year. I have been helping various clients to establish their presence online. I always strive to learn about the newest technologies and frameworks.
                    </StyledP>
                    <button>Read more</button>
                </FlexWrapper>
                <StyledImg src={bg}/>
            </FlexWrapper>
            
        </Section>
    )
}

const Section = styled.section`
`

const StyledImg = styled.img`
    width:100%;
    max-height: 500px
`