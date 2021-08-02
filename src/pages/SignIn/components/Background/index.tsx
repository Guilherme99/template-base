import React from 'react';
import { FaAndroid } from "react-icons/fa"
import {Content} from './styles';

export const  Background: React.FC = () => (
    <Content>
        <div className='app'>
            <div className='info'>
                <h1>Plataformas Mobiles Disponíveis: </h1>
                
                <hr></hr>
                <div className="redessociais">
                    <div className="rede">
                        <FaAndroid/>  <span> <a target="_blank" href="https://play.google.com/store/apps/details?id=br.com.identoolfier" rel="noreferrer"> Android</a> </span>
                    </div>
                </div>
            </div>
        </div> 
    </Content>
)