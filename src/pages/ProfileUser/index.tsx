import React, { useEffect, useState } from 'react';
import NavBar from '../../components/Navbar';
import {Styles} from './styles';
import axio from 'axios'
import Logo from './../../assets/ICONEZINHO.png';
import Loading from '../../components/Loading';
import {
  Form,
  Grid,
  Header,
  Segment,
  Button,
  Icon
} from "semantic-ui-react";
import { useToast } from '../../hooks/toast';
import { Adsense } from '@ctrl/react-adsense';

interface DataUsers {
  id:number,
  username: string, 
  first_name:string, 
  last_name:string, 
  email:string, 
  fone:string, 
  birthdate:string
}

const Atualizar:React.FC = () => {

  /* const history = useHistory(); */
  const  [dataUser, setDataUser] = useState<DataUsers>();
  const  [loading, setLoading] = useState<boolean>(false);
  const { addToast } = useToast();

  useEffect(() => {
    setLoading(true);
    
    (async () => {
      await axio({
        method: 'GET', 
        url: 'https://identoolfier-api.herokuapp.com/api/dados/', 
        headers: {"Authorization": "Token "+localStorage.getItem("@LDTI:token_user") }
        }).then((response) => {
          const {data } = response;
          setDataUser(data);            
          console.log(data)    
        })
        .catch((err) => {
        //handle error
          console.log(err);
        });
        
        setTimeout(() => {
          setLoading(false);
        },1000)
      
    })();
    return () => {
      
    }
  }, [])


  const nascimento = (ob:any) => ob?.split('-').reverse().join('/');
  const telefone = (ob:any) => ob?.replace(/(\d{2})(\d{4})(\d{4})/, "($1) $2-$3") ;
  
  return (
    <Styles>
      
    <NavBar />

    {loading? <Loading />
        
      : 
      dataUser? 
        (

        <div id='form2'>
          <div id="sub-form3">
            <Grid textAlign="center" verticalAlign="middle" className="grid_principal">
              <Grid.Column >
                <Header as="h2" color="teal" textAlign="center">
                  <img src={Logo} alt="logo" className="image" />{" "}
                  Dados do Usuário:
                </Header>

                  <Segment className="grids">
                          
                            <Form.Input
                              fluid
                              icon="key"
                              iconPosition="left"
                              value={`ID: ${dataUser.id}`}
                              
                            />
                          <Form.Input
                              fluid
                              icon="vcard"
                              iconPosition="left"
                              value={`Nome: ${dataUser.first_name}`}
                            />
                            <Form.Input
                              fluid
                              icon="vcard"
                              iconPosition="left"
                              value={`Sobrenome: ${dataUser.last_name}`}
                            />
                            <Form.Input
                              fluid
                              icon="user"
                              iconPosition="left"
                              value={`Usuário: ${dataUser.username}`}
                            />

                  </Segment>
                  <Segment className="grids">
                            <Form.Input
                              fluid
                              icon="phone"
                              iconPosition="left"
                              value={`${dataUser.fone? telefone(dataUser.fone) : 'Não Fornecido.'}`}
                            /> 
                          <Form.Input
                              fluid
                              icon="envelope"
                              iconPosition="left"
                              value={`${dataUser.email}`}
                            />
                            <Form.Input
                              fluid
                              icon="vcard"
                              iconPosition="left"
                              value={`${dataUser.birthdate? nascimento(dataUser.birthdate): 'Não Fornecido.'}`} 
                            />

                  </Segment>
                  
                  
              </Grid.Column>
              
            </Grid>
      
                      
        </div>
        <Button animated primary onClick={() => {
          addToast({
          type: 'error',
          title: 'Erro no redirecionamento',
          description: 'Ainda vamos verificar esta página.',
          });} /* history.push('/update') */} >
          <Button.Content visible>Alterar Informações</Button.Content>
          <Button.Content hidden>
            <Icon name='arrow right' />
          </Button.Content>
      </Button>
      </div>
        ) : ''}
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
export default Atualizar


