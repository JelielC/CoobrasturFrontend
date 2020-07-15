import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiLogOut, FiUser } from 'react-icons/fi';

import api from '../../services/api';

import logoImg from '../../assets/logo_coob_web_prata 1.svg';
import './styles.css';
import clientImg from '../../assets/image 4.png';

export default function Clients(){

    /* 
    Requisições de atualização de listagem não foram possiveis,
    pois o REQRES não fornecia uma listagem com as infos que
    foram cadastradas. Consequentemente não havia como exibir
    novos clientes cadastrados nem editar um cliente listado.
    */
    /*useEffect(() => {
        api.get('');
    }, []);*/

    return (
        <div className="clients-container">
            <header color="#0843F">
                <img src={logoImg} alt="Coobrastur"/>

                <Link className="button" to="/clients/new">+ NOVO CLIENTE</Link>
                <Link className="buttonLogOut" to="/">
                    <FiLogOut size={18} color="#FFF"/>Sair
                </Link>
            </header>

            <h1>
                <FiUser size={22} color="#534C4C" />Painel de clientes
            </h1>
            <ul>
                <li>
                    <img src={clientImg} alt="perfil"/>
                    <p>michael.lawson@reqres.in</p>
                    <p>Desenvolvedor</p>
                    <button className="buttonEdit" type="button">Editar</button>
                </li>

                <li>
                    <img src={clientImg} alt="perfil"/>
                    <p>michael.lawson@reqres.in</p>
                    <p>Desenvolvedor</p>
                    <button className="buttonEdit" type="button">Editar</button>
                </li>

                <li>
                    <img src={clientImg} alt="perfil"/>
                    <p>michael.lawson@reqres.in</p>
                    <p>Desenvolvedor</p>
                    <button className="buttonEdit" type="button">Editar</button>
                </li>
            </ul>
        </div>
    );
}