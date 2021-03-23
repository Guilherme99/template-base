import styled from 'styled-components';
/* import { shade } from 'polished';
 */
import signInBackgroundImg from './../../assets/FERRAMENTAS.jpg';
export const Container = styled.div`
  display: flex;
  align-items: stretch;
  height: 100vh;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  place-content: center;
  align-items: center;

  width: 100%;
  max-width: 700px;

  img{
    width: 30%;
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
  /* @media (max-width:400px){
    height: 100%;
    
    form {
        margin: 30px 0;
        padding:2%;
     }
     img {
       margin-top:30px;
       width: 55%;
       height:20%;
       
     }
    } */
  @media (max-width:800px){
    height: 100%;
    
    form {
        margin: 30px 0;
        padding:2%;
        h1 {
          margin-bottom: 15%;
          font-size: 25pt;
        }
      }
     img {
       margin-top:30px;     
       
     }
    }
    @media (max-width:1100px){
      max-width: 100%;
      height: 100vh;
      flex:1;
      img{
        width: 20%;
        height:20%;
      /*  -webkit-box-shadow: -2px -2px 5px 0px #ff9000;;
        -moz-box-shadow: -2px -2px 5px 0px #ff9000;;
        box-shadow: -2px -2px 5px 0px #ff9000;; */
      }
    } 
    @media (min-width:1100px) and (max-height:800px){shape-image-threshold: unset;
      max-width: 100%;

      img{
        width: 16%;
        height:20%;
      /*  -webkit-box-shadow: -2px -2px 5px 0px #ff9000;;
        -moz-box-shadow: -2px -2px 5px 0px #ff9000;;
        box-shadow: -2px -2px 5px 0px #ff9000;; */
      }
    }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${signInBackgroundImg}) no-repeat center;
  shape-image-threshold: unset;
  background-size: cover;

  &::before {
      position: absolute;
      content: '';
      width:100vw;
      height:100vh;
      background-color: #0000006b;
      z-index:999;
      /* transform: translateX(-50%); */
    }
  @media (max-width:1100px){
    display:none;
    flex:0;
 } 
 @media (min-width:1100px) and (max-height:800px){shape-image-threshold: unset;
    display:none;
    flex:0;
    
  }
 
`;
