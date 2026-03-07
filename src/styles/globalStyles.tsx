import { createGlobalStyle } from "styled-components";


export const GlobalStyles = createGlobalStyle`
    *,
    *::after,
    *::before{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    ul, ol{
        list-style: none;
    }

    a{
        text-decoration: none;
    }
`