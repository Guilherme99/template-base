import React, { useCallback, useRef } from 'react';
/* import { serialize } from 'object-to-formdata'; */

import Header2 from '../../components/Navbar';
import {Style} from './styles';

import axios from 'axios'
import Logo from './../../assets/ICONEZINHO.png';

import  ReactInputMask from "react-input-mask";

import * as Yup from 'yup';
import { Form } from '@unform/web';

import { FiCalendar, FiPhone, FiUser } from 'react-icons/fi';
import { AiFillRedEnvelope } from 'react-icons/ai';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { FaPlusCircle, FaRegIdCard } from 'react-icons/fa';
import { useToast } from '../../hooks/toast';
import { FormHandles } from '@unform/core';
import { useHistory } from 'react-router-dom';
import getValidationErrors from '../../utils/getValidationErrors';
import {
  Grid,
  Header,
  Segment
} from "semantic-ui-react";
import { useAuth } from '../../hooks/auth';


interface UpdateFormData {
  username: string,
  password: string,
  is_active: boolean,
  first_name: string,
  last_name: string,
  email: string,
  fone: string,
  birthdate: string
}

const Update:React.FC = () => {

const formRef = useRef<FormHandles | any>(null);

const { addToast } = useToast();
const { signIn } = useAuth();

const history = useHistory();

const handleSubmit = useCallback(
    async (data: UpdateFormData) => {
      try {
        formRef.current?.setErrors({});
        const schema = Yup.object().shape({
          username: Yup.string(),
          first_name: Yup.string(),
          last_name: Yup.string(),
          /* password: Yup.string()
            .min(8, 'Mínimo de 8 caracteres'), */
          email: Yup.string()
            .email('Digite um e-mail válido.'),
          fone: Yup.string(),
          birthdate: Yup.string()
          
        });

        let values = {}
        
        if(data.username!==''){
          values = {...values,
            username: data.username
          }
        }
        if(data.first_name!=='' ){
          values = {...values,
            first_name: data.first_name
          }
         
        }
        if(data.last_name!==''){
          values = {...values,
            last_name: data.last_name
          }
         
        }
        if(data.email!==''){
          values = {...values,
            email: data.email
          }
        }
        if(data.fone!==''){
          values = {...values,
            fone: (data.fone.replace(/[^\d]+/g,''))
          }
        }
        if(data.birthdate!==''){
          values = {...values,
            birthdate: (data.birthdate.split('/').reverse().join('-'))
          }
        }

        if (Object.keys(values).length === 0) {
          return addToast({
            type: 'info',
            title: 'Nenhum valor!',
            description: 'Erro ao atualizar!',
          });

        }
        await schema.validate(values, {
          abortEarly: false, // force return all errors
        });

        console.log(JSON.stringify(values))

        await axios({
          method: 'PATCH',
          url: 'https://identoolfier-api.herokuapp.com/api/atualizar/'+localStorage.getItem("@LDTI:id_user")+'/',
          data: JSON.stringify(values),
          headers: {
            "Content-Type": "application/json",
            "Authorization": "Token "+localStorage.getItem('@LDTI:key')
          }
        })
          .then(async(response) => {
            addToast({
              type: 'success',
              title: 'Dados atualizados!',
              description: 'Dados atualizados com sucesso!',
            });


            localStorage.setItem("@LDTI:user", data.username);
            setTimeout(() => {
                history.push('/home');  
            }, 5000);
           
          })
          .catch((err) => {
            addToast({
              type: 'error',
              title: 'Cadastro',
              description: 'Erro ao Atualizar.',
            });
          });    
     } catch (err) {
          if (err instanceof Yup.ValidationError) {
            const errors = getValidationErrors(err);
            formRef.current?.setErrors(errors);
            return;
          }
  
          addToast({
            type: 'error',
            title: 'Erro na alteração',
            description: 'Ocorreu um erro ao atualizar.',
          }); 
        } 

      
    },[ addToast, history],
  ); 

  return (
    <Style>
        
     <Header2 />

     <div id='form2'>
        <div id="sub-form2" >

        <Grid textAlign="center" verticalAlign="middle" className="grid_principal" style={{color: 'teal'}}>
          <Grid.Column >
            <Header as="h2" color="teal" textAlign="center"> 
              <img src={Logo} alt="logo" className="image" />{" "}
              Atualize seus dados. 
            </Header>
            Obs: Preencha somente os campos que necessita atualizar.
            <Form ref={formRef} onSubmit={handleSubmit} className="form_cad">
              <Segment className="columns"> 
                <Segment className="grids">
                  <h4><FaRegIdCard/> Informações do Usuário</h4>
                  <Input
                    icon={FaRegIdCard}
                    type="text"
                    placeholder="* Nome"
                    name="first_name"
                    id="first_name"
                  />
                  <Input
                    icon={FaRegIdCard}
                    type="text"
                    placeholder="* Sobrenome"
                    name="last_name"
                    id="last_name"
                  />
                  <Input
                    icon={FiUser}
                    type="text"
                    placeholder="* Nome de Usuário"
                    name="username"
                    id="username"
                  />
                </Segment>

                <Segment className="grids">
                  <h4><FaPlusCircle/> Informações adicionais</h4>
                  {/* <Input
                    name="password"
                    icon={FiLock}
                    type="password"
                    placeholder="Senha"
                    autoComplete="on"
                    
                  /> */}
                  
                  <Input              
                      icon={AiFillRedEnvelope}              
                      placeholder="* E-mail "
                      name="email"
                      id="email"
                    />
                  <ReactInputMask mask="99/99/9999">
                    {(_: JSX.IntrinsicAttributes) =>  
                      <Input                
                      icon={FiCalendar}                
                      placeholder="dd/mm/yyyy"
                      name="birthdate"
                      id="birthdate"
                    />}
                </ReactInputMask>
                <ReactInputMask mask="(99) 99999-9999">
                    {(_: JSX.IntrinsicAttributes) =>  
                      <Input                
                      icon={FiPhone}                
                      placeholder="(00) 0000-0000"
                      name="fone"
                      id="fone"
                    />}
                </ReactInputMask>
                  
                </Segment>          
              </Segment>
              <Segment className="columns" id="buttonConfirm"> 
                <Button type="submit">Atualizar</Button>
              </Segment>
            </Form>
          </Grid.Column>
        </Grid>

          </div>  
        </div>
      </Style>
    );
  }
export default Update;
