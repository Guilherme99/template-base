import styled from 'styled-components';
/* import { shade } from 'polished';
 */
import signInBackgroundImg from './../../assets/FERRAMENTAS.jpg';
export const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  position:relative;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 890px;
  padding-top: 5%;

  .separator{
    width: 100%;
    margin-bottom: 3%;
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: row;
    color:#333;

    hr{
      margin: 0 3% 0 3%;
      width: 100%;
      color:#333;
      background-color: red;
    }
  }
  h1 {
    font-size: 25pt;
    color: #232129;
  }
  .form_cad{
    display:flex;
    flex-direction: column;
    width: 100%;  
    
  }
  .columns{
    display:flex;
    flex-direction: row;
    justify-content:center;
    width:100%;
    border:none;
    box-shadow: none;
  }
  .grids{
     width: 100%;

     h4{
        color: #232129;
        font-size: 15pt;
        float:left;
        display:flex;
        flex-direction:row;
        align-items:center;
        width:100%;
        svg{
          margin-right: 2%;

        }
     }
  }
  .ui.segment{
      margin-right: 1%;
      margin-top: 0;
      background:none;
      border:none;
      box-shadow: none;
      
  }  
  #buttonConfirm{
    width:60%;
    margin:auto;
    border:none;
    box-shadow: none;
  }
  img{
    width: 25%;
    height:20%;
   /*  -webkit-box-shadow: -2px -2px 5px 0px #ff9000;;
    -moz-box-shadow: -2px -2px 5px 0px #ff9000;;
    box-shadow: -2px -2px 5px 0px #ff9000;; */
  }
  form {
    margin:auto;
    width: 340px;
    text-align: center;

    span{
      color: #232129;
      width:100%;
      span{
        margin-left: 10px;
        width:100%;

        a{
          display: inline;
          text-underline-position: bottom;
          color:red;
        }
      }
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
    margin-bottom: 24px;
    text-decoration: none;
    transition: color 0.2s;

    &:hover {
      color:#000;
    }

    svg {
      margin-right: 16px;
    }
  }
  @media (max-width:700px){
    height: 100%;
    width:100%;

    h1 {
      font-size: 25pt;
      color: #232129;
      text-align:center;
      margin-bottom: 30px;
    }
    
    form {
        margin: 30px 0;
        width:100%;
     }
     img {
       margin-top:30px;
       width: 30%;
      height:20%;
     }
    .columns{
      flex-direction: column;
      width:100%;
    }

    #buttonConfirm{
      width:90%;
      margin:auto;
      border:none;
      box-shadow: none;
    }
    .grids{
      width: 100%;
      padding:2%;
    }
    .ui.segment{
      margin: 0;          
    } 
  }

  @media (max-height:400px){
    img {
       width: 20%;
       height:25%;
    }
  }
  @media (max-width:1100px){
      max-width: 100%;
      .columns{
        flex-direction: column;
        width:100%;
      }
      
    } 
  @media (min-width:1100px) and (max-height:800px){
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
  position:relative;
  flex:1;
  height: 100%;
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
