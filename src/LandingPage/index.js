import React from 'react';
import './style.css';
import './mobili.css';
import { useState } from 'react';

function LandingPage()  {
    const paginaClara = 'modo-claro';
    const paginaEscura = 'modo-escuro';

    const [modoPagina, setModoPagina] = useState(true);

    const alteraPagina = () => {
        setModoPagina(!modoPagina);
    };

    return(
    <div className = {modoPagina ? paginaClara : paginaEscura}>
        <header className='container-topo limitar-secao'>

              <img className='logomarca' src='assets/barbearia-logo.png' alt='Logo da Página' />
              
    
                <button  onClick={alteraPagina}
                className={modoPagina ? 'modo-escuro' : 'modo-claro'}>
                  <img src={modoPagina ? 'assets/sun.png' : 'assets/moon.png'}
                  alt='Imagem noite' />Dark
                </button>
              
        </header>
        <main className='container-secao-banner'>
            <section className='secao-banner'></section>
            <section className='secao-texto'>
                <h1>Bem-vindo a Barber Shop</h1>
                <p className='secao-texto primeiro-p'>Nossa barbearia sempre oferece profissionais de qualidade 
                   e estamos prontos para lidar com suas maiores expectativas.
                   
                </p>
                <p className='secao-texto segundo-p'>Nossos serviços são dedicados ao seu sucesso pessoal. 
                    Aqui temos uma equipe premiada que demonstrou o 
                    talento de mestres barbeiros em vários concursos de estilo. 
                    Deixe nosso barbeiro ser seu estilista pessoal 
                    e você nunca ficará desapontado.
                </p>   
                <p className='secao-texto terceiro-p'>S. Kelly</p>

            </section>
        </main>

    </div>
)};

export default LandingPage;