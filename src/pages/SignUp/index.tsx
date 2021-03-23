import React, { useRef, useCallback, useEffect, useState } from 'react';
import { FiUser, FiLock, FiHome, FiPhone, FiCalendar } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import { Link, useHistory } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';
import { useToast } from '../../hooks/toast';

import { Container, Content, Background } from './styles';
import getValidationErrors from '../../utils/getValidationErrors';

import Input from '../../components/Input';
import Button from '../../components/Button';
import logoImg from './../../assets/ICONEZINHO.png';
import axios from 'axios';
import ReactInputMask from 'react-input-mask';
import { Segment } from 'semantic-ui-react';
import { FaPlusCircle, FaRegIdCard } from 'react-icons/fa';
import { AiFillRedEnvelope } from 'react-icons/ai';

interface SignUpFormData {
  username: string,
  password: string,
  is_active: boolean,
  first_name: string,
  last_name: string,
  email: string,
  fone: string,
  birthdate: string
}

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { signIn } = useAuth();
  const { addToast } = useToast();
  const history = useHistory();
  const [checked, setChecked] = React.useState(false);


  useEffect( () => {
    (async () => {
        await axios({
          method: 'POST',
          url: 'https://identoolfier-api.herokuapp.com/rest-auth/login/',
          data:  {
            "username": 'webserver' ,//
            "password": '35ak15qo40cl' //   
          },
          headers: {
            "Content-Type": "application/json",
          }
        })
          .then((response) => {
            localStorage.setItem('@LDTI:key', response.data.key);      
        })
        .catch((err) => {
          //handle error
          console.log(err);
        });
    })();
    
    return () => {
     // localStorage.clear();
    }
  }, [])

 
  const handleSubmit = useCallback(
    async (data: SignUpFormData) => {
  
      try {

        if(checked!==true){
          return addToast({
            type: 'error',
            title: 'Checkbox',
            description: 'É necessário marcar o checkbox.',
          }); 
        }

        formRef.current?.setErrors({});
        const schema = Yup.object().shape({
          username: Yup.string()
            .required('Usuário obrigatório'),
          first_name: Yup.string()
          .required('Nome obrigatório'),
          last_name: Yup.string()
          .required('Sobrenome obrigatório'),
          password: Yup.string()
            .required('Senha obrigatória')
            .min(8, 'Mínimo de 8 caracteres'),
          email: Yup.string()
          .required('Email obrigatórios')
          .email('Digite um e-mail válido.'),
          fone: Yup.string()
          .required('Telefone obrigatório'),
          birthdate: Yup.string()
          .required('Telefone obrigatório')
          
        });

         
        await schema.validate(data, {
          abortEarly: false, // force return all errors
        });
        
        let values = {
          username: data.username,
          password: data.password,
          is_active:  "true",
          first_name: data.first_name,
          last_name: data.last_name,
          email: data.email,
          fone: (data.fone.replace(/[^\d]+/g,'')),
          birthdate: (data.birthdate.split('/').reverse().join('-'))
        }
        
        console.log(values);
        await axios({
          method: 'POST',
          url: 'https://identoolfier-api.herokuapp.com/api/criar/',
          data: values,
          headers: {
            "Content-Type": "application/json",
            "Authorization": "Token "+localStorage.getItem('@LDTI:key')
          }
        })
          .then(async(response) => {
            addToast({
              type: 'success',
              title: 'Cadastro',
              description: 'Cadastro realizado com sucesso.',
            });
            
            await signIn({
              username: data.username,
              password: data.password,
            });

            addToast({
              type: 'success',
              title: 'Login',
              description: 'Login realizado com sucesso.',
            });

            setTimeout(() => {
                history.push('/Home');  
            }, 5000);
           
  
          })
          .catch((err) => {
            addToast({
              type: 'error',
              title: 'Cadastro',
              description: 'Erro ao Cadastrar.',
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
          title: 'Erro na autenticação',
          description: 'Ocorreu um erro ao fazer login, cheque as credênciais.',
        }); 
      }
    },
    [signIn, addToast, history, checked],
  ); 

  return (
    <Container>
      <Content>
        <img src={logoImg} alt="Identoolfier" />
        <h1>Olá, vamos criar seu perfil</h1>
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
              <Input
                name="password"
                icon={FiLock}
                type="password"
                placeholder="Senha"
                autoComplete="on"
                
              />
              
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
            
          <span>
              <input type="checkbox"
                checked={checked}
                onChange={() => setChecked(!checked)}
              />
              <span>Concordo com os <a href="./terms.html" target={'blanck'}> termos de serviço</a> e <a href="./privacy.html" target={'blanck'}> política de privacidade</a></span>
          </span>
          <Segment className="columns" id="buttonConfirm"> 
            <Button type="submit">Cadastrar</Button>
          </Segment>
        </Form>
        <div className="separator">
            <hr></hr>
              Ou  
            <hr></hr>
          </div>
        <Link id="Create-Account" to="/">
            <FiHome /> Tela de Início
          </Link>
      </Content>
      <Background/>
    </Container>
  );
};

export default SignUp;
