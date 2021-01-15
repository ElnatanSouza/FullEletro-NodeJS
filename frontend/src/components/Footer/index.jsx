import React from 'react';

import './styles.css';

const Footer = () => {
    return (
            <footer id="rodape">
                <h3 id="forma_pagamento">Formas de pagamento</h3>
                <img className="mb-5" id="imgPag" src="./img/pagamento.png" alt="Formas de pagamento"
                    title="Mastercard, Visa, American Express, Diners Club, Hipercard, Elo" />
                <p className="direitos_autorais mt-5">2020&copy; Todos os Direitos Reservados</p>
            </footer>
    );
}

export default Footer;