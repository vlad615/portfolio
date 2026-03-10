import { createGlobalStyle } from "styled-components";


export const GlobalStyles = createGlobalStyle`
    *,
    *::after,
    *::before{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        min-width: 365px;
        background-color: #282c33;
    }

    ul, ol{
        list-style: none;
    }

    a{
        text-decoration: none;
    }
`