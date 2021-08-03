import {createGlobalStyle} from "styled-components"
export const GlobalStyle=createGlobalStyle`
.container{
    width: 100vw;
    height: 100vh;
  }
  .app-container{
    font-family: "Open Sans Condensed",sans-serif;
    padding: 20px 60px;
    @media screen and (max-width:800px){
        
          padding:10px
        
      }
  }
  a{
    text-decoration: none;
    color: black;
  }
  
  *{
    box-sizing: border-box;
  }
`