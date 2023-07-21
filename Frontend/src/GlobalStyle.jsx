import { createGlobalStyle } from "styled-components";



const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'Coolvetica';
  src: url('../src/assets/fonts/coolvetica rg.otf') format('opentype');
}

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
    font-family: 'Coolvetica', sans-serif;
    //background: #373737;
}

`


export default GlobalStyle