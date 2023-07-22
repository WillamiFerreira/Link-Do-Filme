import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');

*{
    margin:0;
    padding:0;
    border: 0;
    box-sizing: border-box;
}

#root{
    min-height: 100vh;
    min-width: 100vw;
    display: flex;
    align-items: flex-start;
    justify-content: center;
}
body{
    font-family: Arial, Helvetica, sans-serif;
    
    h1{
        font-family: 'Bebas Neue', sans-serif;
        letter-spacing: 2px;
    }
}

`


export default GlobalStyle