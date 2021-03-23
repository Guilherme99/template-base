import styled from 'styled-components';
/* import { shade } from 'polished';
 */
import signInBackgroundImg from './../../assets/FERRAMENTAS.jpg';
export const Container = styled.div`
  display: flex;
  align-items: stretch;
  height: 100%;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  place-content: center;
  align-items: center;

  width: 100%;
  max-width: 700px;
  

  .separator{
    width: 50%;
    margin-top: 3%;
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: row;
    color:#333;

    hr{
      margin: 0 3% 0 3%;
      width: 100%;
      color:#333;
      background: #333;
    }
  }
  img{
    width: 25%;
    height:20%;
   /*  -webkit-box-shadow: -2px -2px 5px 0px #ff9000;;
    -moz-box-shadow: -2px -2px 5px 0px #ff9000;;
    box-shadow: -2px -2px 5px 0px #ff9000;; */
  }
  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;
    h1 {
      margin-bottom: 15%;
      font-size: 30pt;
      color: #232129;
    }

    a {
      color: #232129;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        color:#000;
      }
    }
  }

  a#Create-Account {
    display: flex;
    align-items: center;

    color: #232129;
    display: block;
    margin-top: 24px;
    text-decoration: none;
    transition: color 0.2s;

    &:hover {
      color:#000;
    }

    svg {
      margin-right: 16px;
    }
  }
  @media (max-width:800px){
    height: 100%;
    padding-bottom:10%;
    
    form {
        margin: 30px 0;
        padding:2%;
     }
     img {
       margin-top:30px;
     }
    }
`;

export const Background = styled.div`
  flex: 1;
  height: 100vh;
  background: url(${signInBackgroundImg}) no-repeat center;

  shape-image-threshold: unset;
  background-size: cover;
 
`;
