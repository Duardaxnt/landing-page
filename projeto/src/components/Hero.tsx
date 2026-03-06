import React from 'react';

export default function Hero() {
    return (
        <header className="hero" id="home">
            <div className="content">
                <h1>Olá!</h1>
                <h1>Meu nome é <span className="destaque">Eduarda</span></h1>
                <p>Atuo como desenvolvedora full stack em formação 🚀</p>
                <a href="#sobre" className="btn">Sobre mim ⬇</a>

                <div className="redes">
                    <a href="https://www.linkedin.com/in/deveduardadeandrade/" target="_blank" rel="noreferrer">
                        <img 
                            src="/icones/linkedin.png" 
                            alt="LinkedIn" 
                            className="icone"
                        />
                    </a>
                    <a href="https://github.com/Duardaxnt" target="_blank" rel="noreferrer">
                        <img 
                            src="/icones/github.png" 
                            alt="GitHub" 
                            className="icone"
                        />
                    </a>
                </div>
            </div>

            <div className="avatar">
                <img src="/imagens/fotoeu.jpg" alt="Nathali" />
            </div>
        </header>
    );
}