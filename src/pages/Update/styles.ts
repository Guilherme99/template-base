import styled from "styled-components";

export const Style = styled.div`

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
  #form2{
    margin: 7% auto;
    width: 100%;  
    background: #fff;
    border-radius: 10px;
  }
  #sub-form{
    padding:0;
  }
  .form_cad{
    display:flex;
    flex-direction: column;
    width:100%;
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
        width:90%;
        padding-bottom: 2%;
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

  @media (min-width:1200px){
    #form2{
        width: 70%;  
        
    }
  }
`;