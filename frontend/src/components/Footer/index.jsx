import React from 'react';
import pagamentoImage from '../../assets/images/pagamento.png'

import './styles.css';

const Footer = () => {
    return (
            <footer id="rodape">
                <h3 id="forma_pagamento">Formas de pagamento</h3>
                <img className="mb-5" id="imgPag" src= { pagamentoImage } alt="Formas de pagamento"
                    title="Mastercard, Visa, American Express, Diners Club, Hipercard, Elo" />
                <p className="direitos_autorais mt-5">&copy; {new Date().getFullYear()} - Elnatan Souza</p>
            </footer>
    );
}

export default Footer;