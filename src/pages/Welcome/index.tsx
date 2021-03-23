import React from 'react';
import {Style, Background} from './styles';
import {Link} from 'react-router-dom';
import { FaAndroid } from 'react-icons/fa';
import { Button } from 'semantic-ui-react';
import "semantic-ui-css/semantic.min.css";
import Header from './../../components/Header';
import {Adsense} from '@ctrl/react-adsense';

const Corpo = () => (
    <>
        <Header/>
      

        <Style>
            <div className='imagem-de-fundo'>
                <div className='blur-conteudo'>
                {/*   <div className='icone'><img width='128px' height='128px' alt='Identoolfier' src={Logo} /></div> */}
                    <div className='meio'>
                        <h1>Detector de Ferramentas</h1>
                        <div className='descricao'>
                            <p>Com <i>IDENTOOLFIER</i> você poderá fazer análise das suas ferramentas!</p>
                            <p>Registre-se para ter acesso ao nosso sistema de análise!</p>
                        </div>
                        {/* <h2>COMECE AGORA MESMO!</h2> */}
                    </div>
                    <div className='botoes'>
                        <Link to="/signin"><Button id='btn2'>Iniciar agora!</Button></Link>
                    </div>

                </div>
                <div className="img-bg">
                    .
                </div>
                <div className='app'>
                    <div className='info'>
                        <h1>Plataformas Mobiles Disponíveis: </h1>
                        
                        <hr></hr>
                        <div className="redessociais">
                            <div className="rede">
                            <FaAndroid/>    <span> Android </span>
                            </div>
                        </div>
                    </div>
                </div> 
            <Adsense
                client="ca-pub-2562382365369923"
                slot="5870779718"
                />
            </div>
            <Background/>
        </Style>
    </>

);

export default Corpo;