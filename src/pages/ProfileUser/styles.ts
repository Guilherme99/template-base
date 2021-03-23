import styled from "styled-components";


export const Styles = styled.div`
    height: 100%;

    #form2{
        width: 60%;
        margin: 5% auto;
        padding: 2%;
        color: #1e663c;
        border-radius: 10px;
        background:white;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

    }
    .campos_artigos2{
        display: inline-block;
        /* float: left; */
        margin: 3px;
        border: 1px solid #cecece;
        padding: 1.5%;
        border-block-start-width: medium;
        border-start-start-radius: revert;
        border-radius: 0px 0px 5px 5px;
        
    }
    .contColDir {
        padding: 2%;

    }
    .colunaDir2{
        align-items: center;
        text-align: center;
        font-size: 30px;
        margin: auto;
        width: 100%;
        display: inline-grid;
        padding: 2%;
    }
    #sub-form3 {
        border: 3spx solid #9dd6bb;
        z-index: 2;
        width: 90%;
        padding: 3%;
        margin: auto;
        border-radius: 5px;
    }
    .colunaDir2 #title{
        color: #585858;
    }

    .ui.fluid.input > input {
        margin-top: 3px;
    }
    .grids, .inputF{
        background: none;
        border-color: white;
    }

    @media (max-width:700px){
        height: 100%;

        #form2{
            width: 90%;
            padding:0 0 2% 0;
        }
    }
`;