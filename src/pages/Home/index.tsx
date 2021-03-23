import React, {useEffect, useState} from 'react';
import {Styles} from './styles';
import axio from 'axios'
import 'react-image-crop/dist/ReactCrop.css';
import ReactCrop from 'react-image-crop';
import "semantic-ui-css/semantic.min.css";
import { TiCloudStorage} from "react-icons/ti";
import { FaTrashAlt, FaSearch,FaCheckCircle} from "react-icons/fa";
import Mensagem from '../../components/Mensagem/index'; 
import HeaderLogin from '../../components/Navbar';
import Loading from '../../components/Loading';

import { useToast } from '../../hooks/toast';

interface propMatriz {
  img: string,
  status: boolean,
  idprocesso: string,
  descricao: string,
  acuracia: string
}

const Home = ()=> {

   /*  const  [imagem, setImage] = useState(null); */

    const { addToast } = useToast();

    const  [matriz, setMatriz] = useState<Array <propMatriz>>([]);
    const  [imgRef, setImgRef] = useState(null);
    const  [imgNew, setImgNew] = useState('');
    const  [src, setSrc] = useState<string | null>(null);
    const  [loading, setLoading] = useState<boolean>(false);
    const  [crop, setCrop] = useState({
      unit: 'px' as any,
      width: 250,
      height: 250,
      maxWidth: 356 as any,
      maxHeight: 356 as any
    });

    useEffect(() => {
        setLoading(true);
        
        setTimeout(() => {
          setLoading(false);
        },1500)      
      /* return () => {
        cleanup
      } */
    }, []);

    const onSelectFile = (e:any) => {
      e.preventDefault();
      if (e.target.files && e.target.files.length > 0) {
        const reader = new FileReader();
        reader.addEventListener('load', () =>
          setSrc(reader?.result as any)
        );
        reader.readAsDataURL(e.target.files[0]);
      }
    };
  
    const onImageLoaded = (image:any) => {
    
      setImgRef(image);
    };
  
    const onCropComplete = (crop:any) => {
      makeClientCrop(crop);
    };
  
    const onCropChange = (crop:any, percentCrop:any) => {
      setCrop(crop)
    };
  
    const makeClientCrop = async (crop:any) => {
      if (imgRef && crop.width && crop.height) {
        const croppedImageUrl = await getCroppedImg(
          imgRef,
          crop,
          'newFile.jpeg'
        );
        setImgNew(croppedImageUrl as any);
      }
    }
  
    const getCroppedImg  =  (image:any, crop:any, fileName:any) => {
      const canvas = document.createElement('canvas');
      const scaleX = image.naturalWidth / image.width;
      const scaleY = image.naturalHeight / image.height;
      canvas.width = crop.width;
      canvas.height = crop.height;
      const ctx = canvas.getContext('2d');
  
      ctx?.drawImage(
        image,
        crop.x * scaleX,
        crop.y * scaleY,
        crop.width * scaleX,
        crop.height * scaleY,
        0,
        0,
        crop.width,
        crop.height
      );
  
      return new Promise((resolve, reject) => {
  
          let fileUrl = canvas.toDataURL("image/jpg");
          resolve(fileUrl)
      
        }
      )
    }

    const atualiza = async (img2:any,status:boolean,idprocs:string) => {
      
      return setMatriz([...matriz, {
          img: img2,
          status: status,
          idprocesso: idprocs,
          descricao: "Sem descrição",
          acuracia: ""
        } ]
      )
    
  }
  
  const editar = (id:any, dados: any[], status:any) => {
    setMatriz(matriz.map( (item:any) => item.idprocesso === id ? {...item, descricao:dados[1], acuracia:dados[0], status:status } : (item)));

    return  addToast({
      type: 'success',
      title: `Item ${id}`,
      description: 'Item identificado!',
    });
  }


  const imageSlipt =  async (image:string) => {
    let imagem = new FormData();
  
    var base64 = [];
    base64 = image.split(',');
                   
    imagem.append('imagem_enviada_base64', base64[1]); 
    
    return imagem;
  
  }

  const enviarImagem = async (e:React.FormEvent) =>{
  
    e.preventDefault();
    
    if(imgNew===undefined || imgNew===''){
      return  addToast({
        type: 'error',
        title: `Imagem`,
        description: 'Selecione uma imagem com o seletor!',
      });;
    }
    //console.log(imgNew);
    
    await axio({

      method: 'POST',
      url: 'https://identoolfier-api.herokuapp.com/app/enviar_imagem/',
      data: await imageSlipt(imgNew),
        headers:{
            'content-type': 'multipart/form-data',
            "Authorization": "Token "+localStorage.getItem("@LDTI:token_user") 
         }
    
     }).then(res=> {        
        
        atualiza(imgNew, false, res.data.id_processo);
        return  addToast({
          type: 'success',
          title: `Item`,
          description: 'Item Enviado!',
        });
      }).catch(err=>{
        addToast({
          type: 'error',
          title: `Item `,
          description: 'Falha ao enviar!',
        });
    })       
  }
  const analisaImagem = async (event: React.FormEvent, id:any) => {

    event.preventDefault();

    let status;
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
    
      }).then(res=> {        
        status = res.data.analisado; 

        if(status===true){

          let dados: any[] = [];
          dados = res.data.ferramenta_registrada.split(":");
          editar(id, dados, status);  

        }
      }).catch(err=>
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
          const resul = matriz.filter(item => item.idprocesso!==id);
          setMatriz(resul);
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
  const orderMatriz = matriz.sort((a, b) => Number(b.idprocesso) - Number(a.idprocesso));
                       
  return (
    

    <Styles>
        <HeaderLogin/>
        {
          loading? <Loading/> : 
          <div className='corpoHome'>
              <div className='contHome'>
                  <div className='sendImg'>
                      <form onSubmit={enviarImagem}>
                        <div className='input-wrapper'>
                          <label htmlFor='input-file'>
                            Selecionar um arquivo <TiCloudStorage />
                          </label>
                          <input id='input-file' type='file' accept="image/*" onChange={onSelectFile} />
                          <button className="btnLindo" type="submit"> Enviar </button>
                        </div>
                      </form>
                      <div className="crop">
                      {src && (
                          <ReactCrop
                              src={src}
                              crop={crop}
                              ruleOfThirds
                              onImageLoaded={onImageLoaded}
                              onComplete={onCropComplete}
                              onChange={onCropChange}
                              locked={true as boolean}
                              
                          />
                          )}
                      </div>
                  </div>
                  
                  <div className='artigos'>
                                            
                      {
                      matriz.length===0? 
                            <Mensagem />
                            : ''  
                      }
                        {
                          matriz && 
                          orderMatriz.map( ({img, status,idprocesso, descricao, acuracia }) => 
                              <div className='contArt' key={idprocesso}>
                                                    
                                        <article className='cardsImg'>
                                            <div className='colunaEsq'>
                                                <img /* width='256px' height='256px' */ alt='Ferramenta' src={img} />
                                                <div className="startfilme">
                                                  <h4>{descricao}</h4>
                                                  <i className="icon-play icon-3x"></i>
                                                </div>
                                            </div>
                                            <div className='colunaDir'>
                                                <label> Ferramenta:</label>
                                                
                                                <div className='contColDir'>
                                                    <label className="campos_artigos" htmlFor="status">Status: </label>
                                                    <label id='stts'  htmlFor="campo_status">{status? "Analisado" : "Não Analisado"}</label> <br></br>
                                                    <label className="campos_artigos" htmlFor="desc">Descrição: </label>
                                                    <label id='desc' htmlFor="campo_desc">{descricao}</label><br></br>
                                                    <label htmlFor="acuracia">{(acuracia!=="")? ("Acurácia: "+(Number(acuracia)*100).toFixed(2))+" %"  : "" }</label>
                                                    <div className='btnVer'>
                                                          <button 
                                                              id='btnLindo2' 
                                                              value={idprocesso}
                                                              onClick={status===true? (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => () => {} : 
                                                                    (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>{
                                                                      /* this.setState({idEnvio:idprocesso}); */
                                                                      const id = idprocesso;
                                                                      analisaImagem(event, id);
                                                              }}
                                                              > 
                                                              {status? `Analisada ` : `Analisar `} 
                                                              {status?  <FaCheckCircle/> : <FaSearch/> } 
                                                            </button>

                                                            <button 
                                                            id='btnLindo3' 
                                                            value={idprocesso}
                                                            onClick={(event) => {
                                                                    const id = idprocesso;
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
                          }     
                  
                </div>                      

              </div>
          </div>
        }
    </Styles>
  
  );
}

export default Home;
