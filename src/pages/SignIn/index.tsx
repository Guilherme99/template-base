import React, { useRef, useCallback, useEffect } from 'react';
import { FiLogIn, FiUser, FiLock } from 'react-icons/fi';
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
import { Adsense } from '@ctrl/react-adsense';

interface SignInFormData {
  user: string;
  password: string;
}

const Signin: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { signIn } = useAuth();
  const { addToast } = useToast();
  const history = useHistory();

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
    async (data: SignInFormData) => {
      try {
        formRef.current?.setErrors({});
        const schema = Yup.object().shape({
          user: Yup.string()
            .required('Usuário obrigatório'),
          password: Yup.string()
            .required('Senha obrigatória')
            .min(8, 'Mínimo de 8 caracteres'),
            
        });

        await schema.validate(data, {
          abortEarly: false, // force return all errors
        });

        await signIn({
          username: data.user,
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
    [signIn, addToast, history],
  );

  return (
    <Container>
          <Content>
            <img src={logoImg} alt="Identoolfier" />
            <Form ref={formRef} onSubmit={handleSubmit}>
              <h1>Olá, Faça seu login</h1>
              <Input name="user" icon={FiUser} type="text" placeholder="Usuário" />
              <Input
                name="password"
                icon={FiLock}
                type="password"
                placeholder="Senha"
                autoComplete="on"
              />
              <Button type="submit">Entrar</Button>
              <Link id="Create-Account" to="/forgot">
                <FiLock />
                Esqueci minha senha
              </Link>          
            </Form>
            <div className="separator">
            <hr></hr>
              Ou  
            <hr></hr>
          </div>
            <Link id="Create-Account" to="/signup">
              <FiLogIn />
              Criar minha conta
            </Link>
         
          <Adsense
            client="ca-pub-2562382365369923"
            slot="5870779718"
            style={{ display: 'block' }}
            layout="in-article"
            format="fluid"
          />
          </Content>
          <Background />
    </Container>
    
  );
};

export default Signin;
