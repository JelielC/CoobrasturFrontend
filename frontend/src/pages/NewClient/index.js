import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogOut, FiUser } from 'react-icons/fi';

import logoImg from '../../assets/logo_coob_web_prata 1.svg';
import './styles.css';

import api from '../../services/api';

export default function NewClient(){
    const [name, setName] = useState('');
    const [job, setJob] = useState('');
    const history = useHistory();

    async function handleNewClient(e){
        e.preventDefault();

        const data = {
            name,
            job,
        };

        try{
            await api.post('/users', data);
            history.push('/clients');
        }catch(err){
            alert('Erro ao cadastrar novo cliente');
        }

    }

    return (
        <div className="new-client-container">
            <header color="#0843F">
                <img src={logoImg} alt="Coobrastur"/>

                <Link className="buttonLogOut" to="/">
                    <FiLogOut size={18} color="#FFF"/>Sair
                </Link>
            </header>
            <section className="form">
                <h1>
                    <FiUser size={22} color="#534C4C" />Painel de clientes
                </h1>
                <h2>
                    Novo cliente
                </h2>
                <p>Informe os campos a seguir para cadastrar um novo cliente.</p>

                <form onSubmit={handleNewClient}>
                        <h1>Nome</h1>
                        <input 
                            value={name}
                            onChange={e=>setName(e.target.value)}
                        />
                        <h1>Profissão</h1>
                        <input
                            value={job}
                            onChange={e=>setJob(e.target.value)}
                        />
                        <button className="buttonCad" type="submit">
                            Cadastrar
                        </button>
                        <button className="buttonBack" type="submit">
                            Voltar
                        </button>
                </form>
            </section>
        </div>
    );
}