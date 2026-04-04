import { StyledButton } from "../../components/Buttons"
import bg from "../../accets/man.png"
import styled from "styled-components";
import { theme } from "../../styles/Themes";
import { FlexWrapper } from "../../components/wrapper/FlexWrapper";
import { Fade } from "react-awesome-reveal";

export type AboutProps = {
    text: string;
}

export const AboutMe = ({text}: AboutProps) => {
    return(
        <FlexWrapper $justify="space-between" $align="center" $gap="30px">
            <Fade direction="left">
                <TextWrapper >
                    <StyledP>{text}</StyledP>
                    <StyledButton as="a">Read more →</StyledButton>
                </TextWrapper>
            </Fade>
            <Fade direction="right">
                <StyledImg src={bg}/>
            </Fade>
            
        </FlexWrapper>
    )
}

const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    align-items: flex-start;
    max-width: 515px;

    @media ${theme.media.tablet}{
        max-width: unset;
    }
`

const StyledP = styled.p`
    white-space: pre-wrap;
`

const StyledImg = styled.img`
    width: 100%;
    max-width: 340px;
    min-width: 280px;
    
    @media ${theme.media.tablet}{
        max-width: 280px;
    }
    z-index: 0;
`