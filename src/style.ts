import { createGlobalStyle } from 'styled-components'

export const StyleGlobal = createGlobalStyle`
    *{
        padding:0;
        margin:0;
        box-sizing:border-box;
        color:#fff;
        font-family: "Poppins", sans-serif;
        overflow-x:hidden;
    }
    
    body{
        background-color:#012615;
    }
`