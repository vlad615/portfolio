import { styled } from "styled-components"
import { theme } from "../../../styles/Themes"
import { font } from "../../../styles/Commun"
import Typewriter from 'typewriter-effect';



export const Testimony = () => {
    return(
        <QuotWrapper>
            <StyledQ>
                <p>With great power comes great electricity bill</p>
                <Typewriter
                    onInit={(typewriter) => {
                    typewriter.typeString('With great power comes great electricity bill.')
                    .callFunction((state) => {
                    if (state.elements.cursor) {
                        state.elements.cursor.style.display = 'none';}
                    })
                    .start();
                }}
                    options={{
                    cursor: '',
                    delay: 30
                }}
                /> 
            </StyledQ>
            <cite>- Dr. Who</cite>
        </QuotWrapper>
    )
}

const QuotWrapper = styled.div`
    margin-top: 110px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-self: center;    
`

const StyledQ = styled.q`
    position: relative;

    ${font({color: "#fff", weight: 500, maxSize: 24, minSize: 16})}
    padding: 30px;
    border: 1px solid ${theme.color.font};

    p{
        opacity: 0;
        line-height: 0;
    }

    & + cite{
        font-style: normal;

        ${font({color: "#fff", maxSize: 24, minSize: 16})}
        padding: 15px;
        border: 1px solid ${theme.color.font};
    }

    &::before{
        content: open-quote;
        color: ${theme.color.font};
        background-color: ${theme.color.primaryBg};
        height: 30px;
        font-size: 64px;
        position: absolute;
        top: -25px;
    }

    &::after{
        content: close-quote;
        position: absolute;
        display: inline-block;
        transform: rotate(180deg);
        color: ${theme.color.font};
        background-color: ${theme.color.primaryBg};
        height: 30px;
        font-size: 64px;
        position: absolute;
        bottom: -18px;
        right: 20px
    }

    @media ${theme.media.tablet}{
        padding: 25px;

        & + cite{
            padding: 12px
        }
    }

    @media ${theme.media.mobile}{
        padding: 15px;
    }
`