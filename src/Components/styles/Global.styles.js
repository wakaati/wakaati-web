import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Prompt:wght@300;400;500;600;700&display=swap");

    * {
        box-sizing: border-box;
    }

    body{

        font-family: 'Prompt', sans-serif;
        margin: 0;
    }

    img{
        max-width: 100%;    
    }

`

export default GlobalStyles;