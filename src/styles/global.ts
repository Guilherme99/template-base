import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
   /*  background-image: linear-gradient(to bottom, #5ce1e6, #fff); */
   background-color:  #f2f3f6;
    color: #fff;
    -webkit-font-smoothing: antialiased;
  }

  body, input , button {
    font-family: 'Roboto Slab', serif;
    font-size:16px;
  }

  h1,h2,h3,h4,h5,h6, strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
    border: none;
    outline: 0;
  }
  .slick-list, .slick-track { touch-action:pan-y; }
  .drag-drop-item
  {
    touch-action: none;
  }
`;
