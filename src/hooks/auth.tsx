import axios from 'axios';
import React, { createContext, useCallback, useState, useContext } from 'react';
import api from '../services/api';

interface AuthData {
  token: string;
  user: object;
}

interface SignInCredentials {
  username: string;
  password: string;
}

interface ForgotCredentials {
  email: string;
}

interface AuthContextData {
  user: object;
  signIn(credentials: SignInCredentials): Promise<void>;
  Forgot(credentials: ForgotCredentials): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [authData, setAuthData] = useState<AuthData>(() => {
    const token = localStorage.getItem('@LDTI:token_user');
    const user = localStorage.getItem('@LDTI:user');

    if (token && user) {
      return { token, user: JSON.parse(user) };
    }

    return {} as AuthData;
  });

  const signIn = useCallback(async ({ username, password }) => {
    const response = await api.post('login/', {
      username,
      password,
    },{
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Token "+localStorage.getItem('@LDTI:key')
      }
    }); 

    const { token, id_usuario} = response.data;
    const user = username;
    
    localStorage.setItem('@LDTI:token_user', token);
    localStorage.setItem('@LDTI:user', JSON.stringify(user));
    localStorage.setItem("@LDTI:id_user", id_usuario); 

    setAuthData({ token, user });
  }, []);

  const Forgot = useCallback(async ({ email}) => {
    await axios.post('https://identoolfier-api.herokuapp.com/rest-auth/password/reset/', {
      email,
    },{
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Token "+localStorage.getItem('@LDTI:key')
      }
    }); 
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@LDTI:token_user');
    localStorage.removeItem('@LDTI:user');
    localStorage.removeItem('@LDTI:id_user');

    setAuthData({} as AuthData);
  }, []);

  return (
    <AuthContext.Provider value={{ user: authData.user, signIn, signOut, Forgot }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export { AuthProvider, useAuth };
