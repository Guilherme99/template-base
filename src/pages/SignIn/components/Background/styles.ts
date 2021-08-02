import styled from 'styled-components';
/* import { shade } from 'polished';
 */
import signInBackgroundImg from './../../../../assets/FERRAMENTAS.jpg';
export const Container = styled.div`
  display: flex;
  align-items: stretch;
  height: 100%;
`;

export const Content = styled.div`
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
  
  .app {
    position: relative;
    z-index: 1;
    margin: 0 auto;
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
        height: 300px;
        padding-left: 3%;
        width:100%;
        
        h1{
            color: #74e1c8;
            font-weight: 900;

        }

        .rede{
            width: 100%;
            display: flex;
            flex-direction: row;
            align-items: center;
            background: linear-gradient(#74e1c8, #b7e179);
            border-radius: 3px;
            padding: 10px 20px;
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
  @media (max-width:1100px){
    display:none;
    flex:0;
 } 
 @media (min-width:1100px) and (max-height:800px){shape-image-threshold: unset;
    display:none;
    flex:0;
    
  }
`;
