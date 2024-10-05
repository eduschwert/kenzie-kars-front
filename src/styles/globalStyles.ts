import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  ::-webkit-scrollbar {
    width: 12px;
    height: 12px;
  }

  ::-webkit-scrollbar-track {
    background: #f1f3f5;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

  input[type=number]::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  input[type=number] {
    -moz-appearance: textfield;
    appearance: textfield;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
    cursor: pointer;
  }

  ul, ol, li {
    list-style: none;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    background-color: #e9ecef;
    min-height: 100vh;
  }

  :root {
    font-size: 60%;

    --toastify-color-success: #18794e;
    --toastify-color-error: #cd2b31;

    --toastify-toast-width: 32rem;
    --toastify-toast-background: #fff;
    --toastify-toast-min-height: 6.4rem;
    --toastify-toast-max-height: 80rem;
    --toastify-font-family: 'Inter', sans-serif;

    --toastify-text-color-light: #212529;
  }

  @media (min-width: 700px) {
    :root {
      font-size: 62.5%;
    }
  }
`;
