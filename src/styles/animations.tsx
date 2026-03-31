import { keyframes } from "styled-components";
import { theme } from "./Themes";


const pinkLight = keyframes`
    0%, 100%{
        opacity: 1;
        box-shadow: ${theme.color.accent} 0px 0px 10px  ;
    }

    50%{
        opacity: 0.8;
        box-shadow: ${theme.color.accent} 0px 0px 0px ;
    }
`

const light = keyframes`
    0%, 100%{
        opacity: 1;
    }

    50%{
        opacity: 0.5;
    }
`

export {
    pinkLight,
    light
}