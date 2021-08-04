import React, {useEffect, useState} from 'react';
import {Styles} from './styles';
import axio from 'axios'
import "semantic-ui-css/semantic.min.css";
import { FaTrashAlt, FaSearch,FaCheckCircle} from "react-icons/fa";
import HeaderLogin from '../../components/Navbar';
import Loading from '../../components/Loading';
import { useToast } from '../../hooks/toast';
import * as IoIcons from 'react-icons/io';
import { Adsense } from '@ctrl/react-adsense';

interface propMatriz {
  url_imagem: string,
  analisado: boolean,
  id: string,
  ferramenta_registrada: [],
}


const Historic = ()=> {

   
  const { addToast } = useToast();

  const  [imagens, setImagens] = useState<Array <propMatriz>>([]);
  const  [loading, setLoading] = useState<boolean>(false);
  const  [enable, setEnable] = useState<boolean>(false);
  const  [previous, setPrevious] = useState<boolean>(false);
  const  [count, setCount] = useState(1);
  
  
  useEffect(() => {
    (async () => {
      setLoading(true);
      const response = await axio({
        method: 'GET',
        url: 'https://identoolfier-api.herokuapp.com/app/listar/',
          headers:{
            "Authorization": "Token "+localStorage.getItem("@LDTI:token_user") 
          }

        });
        const {results} = await response.data;

       setImagens(results);
       if(response.data.next===null){
        setEnable(true); 
       }
       if(response.data.previous===null){
        setPrevious(true); 
      }
        
      
      setTimeout(() => {
        setLoading(false);
      },1500)
    })();
      
    /* return () => {
      cleanup
    } */
  }, []);
  
  const analisaImagem = async (event: React.FormEvent, id:any) => {

  event.preventDefault();

  let status: boolean;
  status = false;

  var idEnvio = new FormData();
      
  idEnvio.append("id_processo", id);
    
  while(status===false){

    await axio({      
      method: 'POST',
      url: 'https://identoolfier-api.herokuapp.com/app/analisa_imagem/',
      data: idEnvio,
        headers:{
          "Authorization": "Token "+localStorage.getItem("@LDTI:token_user") 
        }
  
    // eslint-disable-next-line no-loop-func
    }).then(res=> {        
      status = res.data.analisado; 

      if(status===true){
//        editar(id, dados, status);   */
        setImagens(imagens.map( (item:propMatriz) => item.id === id ? {...item, ferramenta_registrada:res.data.ferramenta_registrada, analisado:status} : (item)));

        return  addToast({
          type: 'success',
          title: `Item ${id}`,
          description: 'Item identificado!',
        });
      }
    // eslint-disable-next-line no-loop-func
    }).catch(()=>
      status = false
        
    )  
  }
}

  const deletarImagem = async (event: React.FormEvent, id:any) => {
    event.preventDefault();
      await axio({      
        method: 'DELETE',
        url: `https://identoolfier-api.herokuapp.com/app/apagar_registro/${id}/`,
        headers:{
              "Authorization": "Token "+localStorage.getItem("@LDTI:token_user") 
        }
    
      }).then(res=> {        
          const resul = imagens.filter(item => item.id!==id);
          setImagens(resul);
          return  addToast({
            type: 'success',
            title: `Item`,
            description: 'Item deletado!',
          });
      }).catch(err=>{
        return  addToast({
          type: 'error',
          title: `Item`,
          description: 'Erro ao deletar Item!',
        });
      }  
      )  

  }    
  
  const Ferramenta = (value:string) => {
    const Ferramenta = value.split(":");
    return Ferramenta[1];
   }
   const Acuracia = (value:any) => {
     const Acuracia = value.split(":");
     return Acuracia[0];
  }
  
  const proximoData = async (event:React.FormEvent) => {
    event.preventDefault();

    setLoading(true);
    const response = await axio({
      method: 'GET',
      url: `https://identoolfier-api.herokuapp.com/app/listar/?page=${1+count}`,
      headers:{
        "Authorization": "Token "+localStorage.getItem("@LDTI:token_user") 
      }

     });
     let data = await response.data;

     if(data.next){
        setImagens(data.results);
        setCount(count+1)
     }else if(data.next===null){
      setImagens(data.results);
      setEnable(true); 
      setCount(count+1)
     }
     if(data.previous){
      setPrevious(false); 
   }

     
   setLoading(false);
    
    
  }

  const anteriorData = async (event:React.FormEvent) => {
    event.preventDefault();

    setLoading(true);
    const response = await axio({
      method: 'GET',
      url: `https://identoolfier-api.herokuapp.com/app/listar/?page=${count-1}`,
      headers:{
        "Authorization": "Token "+localStorage.getItem("@LDTI:token_user") 
      }

     });
     let data = await response.data;
     
     if(data.previous){
      setImagens(data.results);
      setCount(count-1);
     }else if(data.previous===null){
      setImagens(data.results);
      setPrevious(true);
      setCount(count-1); 
     }

     if(data.next){
      setEnable(false); 
    }

    setLoading(false);
  }

  const orderMatriz = imagens.sort((a, b) => Number(b.id) - Number(a.id));
  
  return (
    

    <Styles>
        <HeaderLogin/>
        {
             loading? <Loading/> : 
          
            <div className='corpoHome'>
                <div className='contHome'>
                    
                    <div className='artigos'>
                      <div className="Titulo" id="message"> 
                         <h2> <IoIcons.IoIosPaper/> Histórico de Imagens </h2>
                      </div>
                            
                            
                            {
                              imagens.length>0? 

                              orderMatriz.map((item:any)=> {
                                    return (
                                        <div className='contArt' key={item.id}>
                                                    
                                            <article className='cardsImg'>
                                                <div className='colunaEsq'>
                                                    <img alt='Ferramenta' src={item.url_imagem} />
                                                    <div className="startfilme">
                                                      <h4>{item.ferramenta_registrada? Ferramenta(item.ferramenta_registrada): 'Sem descrição.'}</h4>
                                                      <i className="icon-play icon-3x"></i>
                                                  </div>
                                                </div>
                                                <div className='colunaDir'>
                                                    <label> <span className="label_infor">Ferramenta:</span> #{item.id}</label>
                                                    <div className='contColDir'>
                                                    <label className="campos_artigos">Status: </label>
                                                    <label id='stts' className='verificado'>{item.analisado? "Analisado" : "Não Analisado"}</label> <br></br>
                                                    <label className="campos_artigos" >Descrição: </label>
                                                    <label id='desc' className='descricao'>{item.ferramenta_registrada? Ferramenta(item.ferramenta_registrada): 'Sem descrição.'}</label><br></br> 
                                                    {item.ferramenta_registrada? <label className='acuracia'> Acurácia: {item.ferramenta_registrada? (Acuracia(item.ferramenta_registrada)*100).toFixed(2)+"%": 'Sem resposta.'} </label> : '' }
                                                    <div className='btnVer'>
                                                      
                                                        <button 
                                                          id='btnLindo2' 
                                                          onClick={item.analisado===true? (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => () => {} : 
                                                                   (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>{
                                                                    /* this.setState({idEnvio:idprocesso}); */
                                                                    const id = item.id;
                                                                    analisaImagem(event, id);
                                                            }}
                                                          >
                                                            {item.analisado? `Analisada ` : `Analisar `} 
                                                            {item.analisado?  <FaCheckCircle/> : <FaSearch/> } 
                                                          
                                                          </button>
                                                          
                                                          <button 
                                                                id='btnLindo3' 
                                                                value={item.id}
                                                                onClick={(event) => {
                                                                    const id = item.id;
                                                                    deletarImagem(event, id);
                                                                }}
                                                                > 
                                                                Deletar <FaTrashAlt/>
                                                          </button>

                                                      
                                                    </div>
                                                    </div>
                                                </div>
                                            </article>
                                        </div>
                                  )
                                })

                            : <h3 style={{textAlign: 'center', color:'#fff'}}>Nenhuma ferramenta encontrada.</h3>
                          }

                          <div className="ppp">
                            <button className="pag" onClick={(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => anteriorData(event)} disabled={previous} >Anterior</button>
                            <button className="pag" onClick={(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => proximoData(event)} disabled={enable} >Próximo</button>
                          </div>
                    </div>                      

                </div>
            </div>
            }  
           <Adsense
            client="ca-pub-8012874463973317"
            slot="5870779718"
            style={{ display: 'block' }}
            layout="in-article"
            format="fluid"
          />
    </Styles>
  
  );
}

export default Historic;
