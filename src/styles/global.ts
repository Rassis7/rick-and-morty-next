import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  :root {
    --white: #fff;
    --gray-100: #e1e1e6;
    --gray-300: #a8a8b3;
    --gray-500: #718096;
    --gray-700: #323238;
    --gray-800: #232327;
    --gray-900: #121214;
    --purple-500: #805ad5;
    --green-200: #9ae6b4;
    --green-500: #67ea94;
    --red-200: #FEB2B2;
    --red-500: #E53E3E;
  }
  
  @media (max-width: 1080px) {
    html {
      font-size: 93,75%;
    }
  }
  @media (max-width: 720px) {
    html {
      font-size: 87,5%;
    }
  }
  
  body {
    background: var(--gray-900);
    color: var(--white);
  }
  
  body, input, textarea, select, button {
    font: 400 1rem "Roboto", sans-serif;
  }
  
  button {
    cursor: pointer;
  }
  
  a {
    color: inherit;
    text-decoration: none;
  }
`
