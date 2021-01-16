import React from 'react';

import './styles.css';

const Lojas = () => {
    return (
        <>
            <div className="container-fluid mt-4">
                <p className="nossasLojas mb-5">Nossas Lojas</p>
                <div className="lojas text-center mb-5 row">
                    
                    <div className="col-lg-4 col-sm-12">
                        <h3 className="mb-5"> São Paulo </h3>
                        <p>Avenida Pixiguinha, 3297, São Paulo - SP</p>
                        <p> Brás - Cep: 05198-350 </p>
                        <p> (11) 2558-9875 </p>
                    </div>
                    <div className="col-lg-4 col-sm-12">
                        <h3 className="mb-5"> Rio de Janeiro </h3>
                        <p> Avenida Bossa Nova, 2207, Rio de Janeiro - RJ </p>
                        <p> Tijuca - Cep: 0753-015 </p>
                        <p> (21) 3859-9812 </p>
                    </div>
                    <div className="col-lg-4 col-sm-12">
                        <h3 className="mb-5"> Minas Gerais </h3>
                        <p> Travessa Queijo Fino, 168, Minas Gerais - MG </p>
                        <p> Lagoa - Cep: 0438-066 </p>
                        <p> (31) 4621-6712 </p>
                    </div>

                </div>
                <hr className="mb-5" />
            </div>

        </>
    );
}

export default Lojas;
