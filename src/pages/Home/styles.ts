import styled from 'styled-components';
/* import { shade } from 'polished'; */

export const Styles = styled.div`

.corpoHome {
    background-color: rgb(0 181 64 / 20%);    
    border-radius: 10px;
    max-width: 1280px;
    margin: 5px auto;
}

.contHome {
    margin: 5px auto;
    padding: 10px;
}

.artigos {
    margin-top: 2%;
    display: flex;
    flex-direction: row;
    justify-content:center;
    flex-wrap:wrap;
    /* justify-content: center;
    justify-content: space-between; */
    padding: .5px;
}
.contArt {
    /* background-color: rgba(240,242,250,1);
    margin: auto;
    width: 30%;
    border-radius: 10px; */
    display: flex;
    flex-direction: column;
    position: relative;
	background-color: #fff;
	border-radius: 8px;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	overflow: hidden;
	width: 26%;
    height: 470px;
    max-height: 470px;
    margin: 0.5%;
    padding:0;
    /* -webkit-box-shadow: 0px 0px 4px 2px rgba(240,242,250,1);
    -moz-box-shadow: 0px 0px 4px 2px rgba(240,242,250,1);
    box-shadow: 0px 0px 4px 2px rgba(240,242,250,1); */
}
.startfilme{
	position: absolute;
	display: flex;
	flex-direction: column;
	text-align: center;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	background-color: rgba(0, 0, 0, 0.5);
	width: 100%;
	height: 100%;
	padding:2px; 	
	left: 0;
	top: 0;
	opacity: 0;
	transition: 0.2s;
	visibility: hidden;
	z-index: 1;

}
.startfilme > h4{
	color: #F8BB16;
	text-transform:uppercase;
}
.startfilme > i {
	color: #fff;
}
.startfilme > i:hover{
	cursor: pointer;
	color: #F8BB16;
}
.cardsImg > .colunaEsq:hover .startfilme{
	opacity: 1;
	visibility: visible;
}

.cardsImg > .colunaEsq{
	position: relative;
	width: 100%;
	height: 250px;
    border-bottom: 1px solid #333;
}
.cardsImg > .colunaEsq > img {
	width: 100%;
	height: 100%;	
}
.sendImg {
    max-width: 1004px;
    border-radius: 5px;
    margin: auto;
    text-align: center;
    padding: 10px;    
    background-color: rgba(0, 0, 0, 0.2);
}
.btnLindo {
    border: none;
    font-size: 20px;
    display: inline;
    border-radius: 10px;
    text-transform: uppercase;
    padding: 15px;
    position: relative;
    transition: all 400ms ease;
    cursor: pointer;
    background-color: #1e663c;
    margin: 1%;
    color:#fff;
}

    
.btnVer{
    display: flex;
    flex-direction: row;
    position: absolute;
    bottom:0;
    width:100%;
    padding: 0;
   
}

#btnLindo2{
    border: none;
    font-size: 15px;
    display: inline;
    border-radius: 10px;
    text-transform: uppercase;
    padding: 18px;
    position: relative;
    transition: all 400ms ease;
    cursor: pointer;
    background-color: #18787cdb;
    color: #fff; 
      
}
#btnLindo3{
    border: none;
    font-size: 15px;
    display: inline;
    border-radius: 10px;
    text-transform: uppercase;
    padding: 10px;
    position: relative;
    transition: all 400ms ease;
    cursor: pointer;
    background-color: #f52623;
    margin-left: 20px;
    color: #fff;
}


.cardsImg {
    display: flex;
    flex-direction: column;
   /*  margin: 10px auto;  */ 
    /* border-radius: 10px; */
    display: flex;
    justify-items: center;
    height: 100%;
}


.colunaDir {
    align-items: center;
    text-align: center;
    /* font-size: 13px; */
    margin: 2% auto;
    height: 200px;
    width: 100%;
    border-radius: 5px;
    justify-content: left;
    color:teal;
    position:relative;
}
.contColDir label,.colunaDir label {
    font-size: 20px;
    font-family: Georgia, 'Times New Roman', Times, serif;
    justify-content: center;
}
.contColDir{
    padding-top: 2%;


}
.colunaDir button {
    margin: 5% auto;
    border: none;
    font-size: 20px;
    border-radius: 10px;
    text-transform: uppercase;
    padding: 15px;
    transition: all 400ms ease;
    cursor: pointer;
    background-color: #5ce1e6;
}
.crop{
    max-width: 50%;
    max-height: 50%;
    align-items: center;
    margin: 0 auto;
}
  input[type='file'] {
    display: none;

  }
  
  .input-wrapper label {
    background-color: #8be1ad;
    margin: 10px;
    padding: 15px;
    border: none;
    font-size: 20px;
    border-radius: 10px;
    transition: all 400ms ease;
    cursor: pointer;
    margin: auto;
    
  }
  
  .input-wrapper label:hover {
    background: rgb(0, 0, 0, 0);
    color: #fff;
    box-shadow: inset 0 0 0 3px #8be1ad;
  }
  #input-file{
    width: 300px;
    height: 40px;
  }
  
 
  @media (max-width:400px){
    .input-wrapper{
        width: 100%;
    }
    .input-wrapper label {
        padding: 5px;
        border: none;
        font-size: 20px;
        border-radius: 10px;
        transition: all 400ms ease;
        cursor: pointer;
      }
      #input-file{
        width: 300px;
        height: 40px;
    }
    
      .btnLindo{
        border: none;
        font-size: 20px;
        width:80%;
        border-radius: 10px;
        text-transform: uppercase;
        padding: 5px;
        margin-top:4%;
        
    }
        
    .crop{
        max-width: 80%;
        height: 50%;
        align-items: center;
        margin: 3% auto 0 auto;
    } 
    .cardsImg > .colunaEsq{
        position: relative;
        width: 200px;
        height: 150px;
    }
   
    .artigos {
      flex-direction: column;
      
    }
    .contArt {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
        height: 150px;
       /*  height: 50vh; */
        max-height: 250px;
     
    }
    .cardsImg {
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
    }


    .colunaDir {
        margin: 0 auto ;
        height: 150px;
        width: 70%;
        border-radius: 5px;
        justify-content: center;
        align-content:center;
        padding-top: 2%;
    }
        
    .contColDir label,.colunaDir label {
        font-size: 10px;
        padding:0;
        font-family: Georgia, 'Times New Roman', Times, serif;
        justify-content: center;
    }
    .contColDir{
        padding-top: 2%;

    }
    .btnVer{
        display: flex;
        flex-direction: row;
        margin-bottom: 2px;
    }
    #btnLindo2{
        font-size: 10px;
        padding: 8px;
        
    }
    #btnLindo3{
        font-size: 10px;
        padding: 8px;
        margin-left: 5px;
    }
    
  }
  @media (min-width:400px) and (max-width:450px){
    .input-wrapper{
        width: 100%;
    }
    .input-wrapper label {
        padding: 5px;
        border: none;
        font-size: 20px;
        border-radius: 10px;
        transition: all 400ms ease;
        cursor: pointer;
        
      }
      .btnLindo{
        border: none;
        font-size: 20px;
        display: inline;
        border-radius: 10px;
        text-transform: uppercase;
        padding: 5px;
        
    }
        
    .crop{
        max-width: 80%;
        height: 50%;
        align-items: center;
        margin: 5% auto 0 auto;
    } 
    .cardsImg > .colunaEsq{
        position: relative;
        width: 200px;
        height: 150px;
    }
   
    .artigos {
      flex-direction: column;
      
    }
    .contArt {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
        height: 150px;
       /*  height: 50vh; */
        max-height: 250px;
     
    }
    .cardsImg {
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
    }


    .colunaDir {
        margin: 0 auto ;
        height: 150px;
        width: 70%;
        border-radius: 5px;
        justify-content: center;
        align-content:center;
        padding-top: 2%;
    }
        
    .contColDir label,.colunaDir label {
        font-size: 15px;
        font-family: Georgia, 'Times New Roman', Times, serif;
        justify-content: center;
    }
    .contColDir{
        padding-top: 2%;

    }
    
    .btnVer{
        display: flex;
        flex-direction: row;
        margin-bottom: 2px;
    }
    #btnLindo2{
        font-size: 10px;
        padding: 8px;
        
    }
    #btnLindo3{
        font-size: 10px;
        padding: 8px;
        margin-left: 5px;
    }
  }
  @media (min-width:450px ) and (max-width:768px){
    .cardsImg > .colunaEsq{
        position: relative;
        width: 250px;
        height: 200px;
    }
    .colunaEsq > img{
       
        width: 100%;
        height: 100%;
    }
   
    .artigos {
      flex-direction: column;
      
    }
    .contArt {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
        height: 200px;
       /*  height: 50vh; */
        max-height: 200px;
     
    }
    .cardsImg {
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
    }


    .colunaDir {
        margin: 0 auto ;
        height: 200px;
        width: 70%;
        border-radius: 5px;
        justify-content: center;
        align-content:center;
        padding-top: 2%;
    }
        
    .contColDir label,.colunaDir label {
        font-size: 18px;
        font-family: Georgia, 'Times New Roman', Times, serif;
        justify-content: center;
    }
    .contColDir{
        padding-top: 2%;

    }
    .btnVer{
        display: flex;
        flex-direction: row;
        margin-bottom: 2px;
    }
    .crop{
        max-width: 70%;
        width: 100%;
        max-height: 50%;
        align-items: center;
        margin: 0 auto;
    }
   
    #input-file{
        width: 350px;
        height: 40px;
    }
  }
  @media (min-width:769px ) and (max-width:967px){
    .cardsImg > .colunaEsq{
        position: relative;
        width: 250px;
        height: 250px;
    }
   
    .artigos {
      flex-direction: column;
      
    }
    .contArt {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
        height: 250px;
       /*  height: 50vh; */
        max-height: 250px;
     
    }
    .cardsImg {
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
    }


    .colunaDir {
        margin: 0 auto ;
        height: 250px;
        width: 70%;
        border-radius: 5px;
        justify-content: center;
        align-content:center;
        padding-top: 2%;
    }
        
    .contColDir label,.colunaDir label {
        font-size: 28px;
        font-family: Georgia, 'Times New Roman', Times, serif;
        justify-content: center;
    }
    .contColDir{
        padding-top: 2%;

    }
    .btnVer{
        display: flex;
        flex-direction: row;
        margin-bottom: 2px;
    }
    .crop{
        max-width: 70%;
        width: 100%;
        max-height: 50%;
        align-items: center;
        margin: 0 auto;
    }
   
    #input-file{
        width: 350px;
        height: 40px;
    }
    
  }
  
`;

