import styled from "styled-components";

export const Styles = styled.div`

    background-color: #5795ef ;
    display: flex;
    flex-direction:row;
    justify-content: left;
    height: 8vh;
    

 h2 a{
    color: #fff;       
    margin-top: 0px;
    
}
 img{
    width: 4%;
    margin-right: 15px;
}
div.menuHeader ul {
    align-items: center;
    float: right;
}

div.menuHeader ul li {
    display: inline-flex;
    list-style-type: none;
    padding: 4px;
    transition: 0.2s;
    margin: 0.0000005%;
}

.menuHeader ul a {
    font-size: 17px;
    text-decoration: none;
    color:white;
    
}
.menuHeader ul a:hover {
    opacity: 0.5;
}

p{
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    
}

@media (max-width:430px){
   
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        
    
     img{
        width: 10%;
    }
     h2 {
        color: white;    
        font-size:20pt;   
        margin-top: 0px;
    }
}

@media (min-width:431px){
    
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

     img{
        width: 8%;
    }
     h2 {
        color: white;       
        margin-top: 0px;
    }
}
@media (min-width:658px){
    
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

     img{
        width: 5%;
    }
     h2 {
        color: white;       
        margin-top: 0px;
    }
}
`;