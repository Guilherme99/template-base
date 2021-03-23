import styled from "styled-components";


import signInBackgroundImg from './../../assets/home.png';
import signInBackgroundImg2 from './../../assets/user_interface2.png';
/* import signInBackgroundImg2 from './../../assets/FERRAMENTAS.jpg'; */

export const Style = styled.div`
    display:flex;
    flex-direction: row;
    align-items:center;
    justify-content:center;
    width:100%;
    height:100vh;
    background-color:#fbfbfb;
    
    .img-bg{
        background: url(${signInBackgroundImg2}) no-repeat center;
        background-size: cover;
        width:250px;
        height:100%;
        margin: auto;
        display:none;
    }
    
    .imagem-de-fundo {
        display:flex;
        flex-direction: column;
        z-index: 1;
        width:100%;
        height:100%;
        max-width: 1080px;
        background: url(${signInBackgroundImg}) no-repeat center;
        background-size: 100% 100%;
            
    }
    
    .blur-conteudo {
        display:flex;
        flex-direction: column;
        justify-content:center;
        align-items:left;
        z-index: 2;
        width:100%;
        height:100vh;
        max-width: 1080px;
        padding-left: 5%;
    }
    /* .icone {
        margin: auto;
        max-width: 1080px;
        text-align: center;
    } */
    
    .meio {
        display:flex;
        flex-direction: column;
        justify-content:center;
        align-items:left;
        color: white;
        text-align: left;
        /* margin-top:50%; */
        height: 300px;
        padding-left: 3%;
        width:100%;
        
    }
    .meio h1{
        font-size: 30pt;
        font-family: 'Noto Sans', sans-serif;
        font-weight:500;
        color:#8492a6;
    }
    
    .descricao {
        text-align: left;
        font-size: 20px;
        font-family: 'Noto Sans', sans-serif;
        color:#828694;
    }
    .botoes {
        display: flex;
        flex-direction: row;
        justify-content:left;
        align-items:center;
        margin: 0;
    }
    
    .botoes a {
        justify-content: space-around;
        font-weight: bold;   
        text-decoration: none;
        color: black;
        margin: 1% auto 1% 3%;
    }
    
    .botoes button {
        text-align: center;
        border: none;
        font-size: 20px;
        display: inline;
        border-radius: 10px;
        text-transform: uppercase;
        padding: 15px 25px;
        max-width: 275px;
        position: relative;
        transition: all 400ms ease;
        cursor: pointer;
    }
    #btn2 {
        background-color: #5272db;
        color:#fff;
    }
    
    hr{
        width: 60%;
        height:0.5px;
        margin: 0 auto 2% auto;
    }
  .redessociais{
        display: flex;
        flex-direction: row;
        width:200px;
        

    }
    .redessociais > .rede{
        width: 100%;
        height: 35px;
        border-radius: 3px;
        background-color: transparent;
        padding:1% 2% ;
        margin: 1%;
        color: #8492a6 !important;
        border: 1px solid #8492a6 !important;
        text-align: center;
        display:flex;
        flex-direction: row;
        align-items:center;
        justify-content: center;
        transition: .5s all;

        svg{
            margin-right: 5%;
        }
    }
    .redessociais > .rede:hover{
        background-color: #2f55d4;
        color: #fff!important;
        border: 1px solid #2f55d4 !important;
        cursor: pointer;
    }
    
  .app {
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    position:relative;
    z-index: 1;
    width:100%;
    max-width: 1080px;
    font-family: Arial, Helvetica, sans-serif;

    .info {
        display:flex;
        flex-direction: column;
        justify-content:center;
        align-items:center;
        color: white;
        text-align: left;
        /* margin-top:-230px; */
        height: 300px;
        padding-left: 3%;
        width:100%;
        
        h1{
            color:#8492a6;
        }
    }
    }
    @media (max-width:450px){
       .imagem-de-fundo {
        display:flex;
        padding-top:15%;  
      }
      .meio h1{
        font-size: 22pt;
        font-family: 'Noto Sans', sans-serif;
        font-weight:500;
        color:#8492a6;
    }
    
    .descricao {
        text-align: left;
        font-size: 18px;
        font-family: 'Noto Sans', sans-serif;
        color:#828694;
    }
    
    }
    @media (max-width:1200px){
        .meio {
                display:flex;
                flex-direction: column;
                justify-content:top;
                top:0;
             }
             .blur-conteudo {
                display:flex;
                flex-direction: column;
                justify-content:top;
                align-items:left;
                z-index: 2;
                width:100%;
                height:100vh;
                max-width: 1080px;
                padding-left: 5%;
                margin-top: -40%;
                margin-bottom: -20%;
            }
    
    }
    @media (max-width:900px){
        display:flex;
        flex-direction: column;
        height:100%;
        display:flex;
        width:100%;
        padding-top:0;
        background-color:#fbfbfb;

        .botoes button {
          width: 100%;
          height: calc(100%/1.1);
          font-size: 15px;
          padding: 20px 15px;
          text-align: center;
        }
        .imagem-de-fundo {
            top:0;
            height:100%;
            background-size: 100% 100%;
         }
           
        .app {
            display:flex;
            flex-direction: column;
            justify-content:center;
            align-items:center;
            position:relative;
            z-index: 1;
            width:100%;
            max-width: 1080px;
            font-family: Arial, Helvetica, sans-serif;

            .info {
                display:flex;
                flex-direction: column;
                justify-content:center;
                align-items:center;
                color: white;
                text-align: center;
                /* margin-top:-230px; */
                
            }
            }
            .img-bg{
                background: url(${signInBackgroundImg2}) no-repeat center;
                background-size: 100% 100%;
                width:350px;
                height:400px;
                margin: auto;
                display:block;
            }

    }    
    @media (max-width:899px){
        .imagem-de-fundo {
            top:0;
            height:100%;
            background-size: cover;
         }
           
        .app {
            display:flex;
            flex-direction: column;
            align-items:center;
            position:relative;
            z-index: 1;
            width:100%;
            max-width: 1080px;
            font-family: Arial, Helvetica, sans-serif;

            .info {
                display:flex;
                flex-direction: column;
                align-items:center;
                color: white;
                text-align: center;
                /* margin-top:-230px; */
                
            }
            }
            .img-bg{
                background: url(${signInBackgroundImg2}) no-repeat center;
                background-size: 80% 80%;
                width:350px;
                height:400px;
                margin: -25% auto 0 auto;
                display:block;
            }
    

    }    
    
    @media (min-width:900px) and (max-width:1600px){
        .imagem-de-fundo {
            top:0;
            height:100%;
            background-size: initial;
            
         }
      
        .app {
            margin:0 auto;
            display:flex;
            flex-direction: column;
            justify-content:center;
            align-items:center;
            position:relative;
            z-index: 1;
            width:100%;
            max-width: 1080px;
            font-family: Arial, Helvetica, sans-serif;

            .info {
                display:flex;
                flex-direction: column;
                justify-content:center;
                align-items:center;
                color: white;
                text-align: center;
                
                
            }
            }
            .img-bg{
                background: url(${signInBackgroundImg2}) no-repeat center;
                background-size: 75% 100%;
                width:350px;
                height:500px;
                margin: auto;
                display:block;
            }
    

    }    

    @media (min-width:1100px) and (max-height:800px){

        height: 100%;

        .img-bg{
                background: url(${signInBackgroundImg2}) no-repeat center;
                background-size: 75% 90%;
                width:350px;
                height:400px;
                margin: auto;
                display:block;
            }
            .imagem-de-fundo {
                background: url(${signInBackgroundImg}) no-repeat center;
                background-size: 100% 100%;
                    
            }
    }
   
    
`;
export const Background = styled.div`
  flex: 1;
  height: 100vh;

  background: url(${signInBackgroundImg2}) no-repeat center;
  background-size: 370px 420px;
  
 /*  &::before{
    content: "";
    background-color:#f2f3f6;
  } */
  &::before {
      position: absolute;
      content: '';

      border-style: solid;
      border-color: #ff9000 transparent;
      border-width: 6px 6px 0 6px;

      top: 100%;
      left: 50%;
      transform: translateX(-50%);
    }
  @media (max-width:1600px){
    display:none;
 } 
`;
