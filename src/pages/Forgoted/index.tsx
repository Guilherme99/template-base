import React, { useRef, useCallback, useEffect } from 'react';
import { FiLogIn, FiHome } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import { Link } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';
import { useToast } from '../../hooks/toast';

import { Container, Content, Background } from './styles';
import getValidationErrors from '../../utils/getValidationErrors';

import Input from '../../components/Input';
import Button from '../../components/Button';
import logoImg from './../../assets/ICONEZINHO.png';
import axios from 'axios';
import { FaEnvelope } from 'react-icons/fa';
import { Adsense } from '@ctrl/react-adsense';

interface ForgotFormData {
  email: string;
}

const Signin: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { Forgot } = useAuth();
  const { addToast } = useToast();

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
    async (data: ForgotFormData) => {
      try {
        formRef.current?.setErrors({});
        const schema = Yup.object().shape({
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Insira um e-mail válido'),
        });

        await schema.validate(data, {
          abortEarly: false, // force return all errors
        });

        await Forgot({
          email: data.email
        });

        addToast({
          type: 'success',
          title: 'Recuperação de senha',
          description: 'Acesse seu e-mail para mais informações.',
        });
        
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);
          return;
        }

        addToast({
          type: 'info',
          title: 'Erro na recuperação.',
          description: 'Ocorreu um erro ao recuperar sua senha. Tente novamente.',
        });
      }
    },
    [Forgot, addToast],
  );

  return (
    <Container>
      <Content>
        <img src={logoImg} alt="Identoolfier" />
        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Recuperar senha</h1>
          <Input name="email" icon={FaEnvelope} type="text" placeholder="Email" />
          <Button type="submit">Restaurar</Button>
          <Link id="Create-Account" to="/">
            <FiHome /> Tela de Início
          </Link>
        </Form>
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
