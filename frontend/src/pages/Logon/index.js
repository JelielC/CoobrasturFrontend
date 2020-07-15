import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import api from '../../services/api';

import './styles.css';
import logoImg from '../../assets/logo.svg';

export default function Logon(){
    const [email, setEmail] = useState('');
    const [password, setPassword] =useState('');
    const history = useHistory();

    async function handleLogin(e){
        e.preventDefault();

        const data = {
            email,
            password,
        };
        try{
            const response = await api.post('/login', data);

            history.push('/clients');
        }catch(err){
            alert('Erro de login');
        }

    }

    return(
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="logo"/>

                <form onSubmit={handleLogin}>
                    <h1>E-mail</h1>
                    <input 
                        value={email}
                        onChange={e=>setEmail(e.target.value)}
                    />
                    <h1>Senha</h1>
                    <input  
                        type="password"
                        value={password}
                        onChange={e=>setPassword(e.target.value)}
                    />
                    <button className="buttonLogin" type="submit">
                        Acessar o Sistema
                    </button>
                </form>
            </section>
        </div>
    );
}