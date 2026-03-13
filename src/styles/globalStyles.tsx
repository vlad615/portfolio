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
        font-family: "Fira Code", sans-serif;
        font-weight: 400;
        color: #abb2bf;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        min-width: 365px;
        background-color: #282c33;
    }

    ul, ol{
        list-style: none;
    }

    a{
        text-decoration: none;
    }

    button, input, select{
        cursor: pointer;
    }

    button{
        background-color: unset;
        border: none;
    }
`