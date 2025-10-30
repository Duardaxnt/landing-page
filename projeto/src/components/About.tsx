import React from 'react';

export default function About() {
    return (
        <section className="sobre" id="sobre">
            <div className="container">
                <div className="descricao">
                    <h1>Sobre <span>mim</span></h1>
                    <h2>Meu nome é Nathali Eduarda de Andrade</h2>
                    <h3>desenvolvedora Full-Stack</h3>
                    <p>
                        Tenho experiência com desenvolvimento Front-End e estou em constante evolução na área de tecnologia.
                        Tenho conhecimentos em React, Node.js, HTML, CSS e JavaScript, e atualmente curso Análise e Desenvolvimento de Sistemas.
                        Sou apaixonada por criar interfaces modernas e funcionais, e busco sempre aprender novas ferramentas para melhorar minhas entregas.
                        Também tenho interesse pela área de Recursos Humanos, o que me ajuda a entender melhor o trabalho em equipe e a comunicação dentro dos projetos.
                    </p>
                    <p><strong>E-mail:</strong> eduardacadem99@gmail.com</p>
                    <p><strong>Local:</strong> João Pessoa, Paraíba, Brazil</p>
                    <a href="/curriculo-nathali.pdf" download className="btn-curriculo">Meu Currículo</a>
                </div>
            </div>
        </section>
    );
}