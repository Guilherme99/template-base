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
  
  .app {
    display: none;
  }
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
    margin-top: 15px;
    height: 100%;
    padding-bottom:10%;
    
    form {
        margin: 30px 0;
        padding:2%;

        h1 {
          margin-bottom: 15%;
          font-size: 25pt;
          
        }
     }
     .logo {
       margin-top:35%;
       width: 30%;
     }
     .app {
        display: flex;
        z-index: 1;
        height: 100%;
        margin: 15px auto;
        font-family: Arial, Helvetica, sans-serif;
        z-index: 99999;
        .info {
            position: relative;
            bottom:0;
            display:flex;
            flex-direction: column;
            justify-content:center;
            align-items:center;
            color: white;
            /* margin-top:-230px; */
            padding-left: 3%;
            width:100%;
            
            h1{
                color: #74e1c8;
                font-weight: 900;
                font-size: 15px;

            }

            .rede{
                width: 100%;
                display: flex;
                flex-direction: row;
                align-items: center;
                background: linear-gradient(#74e1c8, #b7e179);
                border-radius: 3px;
                padding: 5px 10px;
                justify-content: space-around;

                svg{
                    width: 30px;
                    color: #232129;
                }
                span{
                    margin-left: 5%;

                    a{
                        color: #232129;
                    }
                }
            }
        }
    }
  }
    @media (max-width:1100px){
      max-width: 100%;
      height: 100vh;
      flex:1;

      .app {
        display: flex;
        z-index: 1;
        width: 100%;
        height: 100%;
        margin: 15px auto;
        font-family: Arial, Helvetica, sans-serif;
        z-index: 99999;
        .info {
            position: relative;
            bottom:0;
            display:flex;
            flex-direction: column;
            justify-content:center;
            align-items:center;
            color: white;
            /* margin-top:-230px; */
            padding-left: 3%;
            width:100%;
            
            h1{
                color: #74e1c8;
                font-weight: 900;
                font-size: 20px;

            }

            .rede{
                width: 100%;
                display: flex;
                flex-direction: row;
                align-items: center;
                background: linear-gradient(#74e1c8, #b7e179);
                border-radius: 3px;
                padding: 5px 10px;
                justify-content: space-around;

                svg{
                    width: 30px;
                    color: #232129;
                }
                span{
                    margin-left: 5%;

                    a{
                        color: #232129;
                    }
                }
            }
        }
      }

      img{
        width: 15%;
      }
    } 
    @media (min-width:1100px) and (max-height:800px){shape-image-threshold: unset;
      max-width: 100%;
      margin-top: 30px;
      img{
        width: 5px;
        height:5px;
      /*  -webkit-box-shadow: -2px -2px 5px 0px #ff9000;;
        -moz-box-shadow: -2px -2px 5px 0px #ff9000;;
        box-shadow: -2px -2px 5px 0px #ff9000;; */
      }
    }
   
`;

export const Background = styled.div`
  flex: 1;
  height: 100vh;
  background: url(${signInBackgroundImg}) no-repeat center;
  shape-image-threshold: unset;
  background-size: cover;
  
  &::before {
      position: absolute;
      content: '';
      width:100vw;
      height:100vh;
      background-color: #0000006b;
      z-index:9999;
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
