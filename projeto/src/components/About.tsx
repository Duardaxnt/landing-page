import React from 'react';

export default function About() {
    return (
        <section className="sobre" id="sobre">
            <div className="container">
                <div className="descricao">
                    <h1>Sobre <span>mim</span></h1>
                    <h2>Meu nome é Nathali Eduarda de Andrade</h2>
                    <h3>desenvolvedora Full-Stack</h3>
                    <p>Tenho experiência com desenvolvimento Front-End ...</p>
                    <p><strong>E-mail:</strong> eduardacadem99@gmail.com</p>
                    <p><strong>Local:</strong> João Pessoa, Paraíba, Brazil</p>
                    <a href="/curriculo-nathali.pdf" download className="btn-curriculo">Meu Currículo</a>
                </div>
            </div>
        </section>
    );
}