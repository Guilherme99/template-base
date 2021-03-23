import React from 'react';
import './index.css';
import Background from './../../assets/3.png';
const Mensagem = (props) => {
    return (
    <>
        <div className="Mensagem" >

            <img src={Background} alt="msg" />

{/*             <button  id="entrar" onClick={props.exit}> Iniciar</button> */}
        </div>
    </>
    )
    
}

export default Mensagem;