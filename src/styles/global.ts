import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #F0F0F5;
    -webkit-font-smoothing: antialiased;
  }
  body,input,button {
    font: 16px Roboto,sans-serif;
  }

  #root{
    max-width: 960px; //Define o máximo tamanho
    margin: 0 auto; //Centraliza
    padding: 40px 20px; //40px em cima e baixo e 20px na esquerda ou direita
  }
`;
