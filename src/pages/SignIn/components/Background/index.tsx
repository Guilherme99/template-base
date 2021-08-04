import { Adsense } from '@ctrl/react-adsense';
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
        <Adsense
            client="ca-pub-8012874463973317"
            slot="5870779718"
            style={{ display: 'block' }}
            layout="in-article"
            format="fluid"
          />
    </Content>
)