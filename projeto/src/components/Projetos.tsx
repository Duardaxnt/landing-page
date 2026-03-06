const Projetos = () => {
  const projetos = [
    {
      id: 1,
      titulo: "Landing Page",
      desc: "Você está visitando agora a minha Landing Page! Desenvolvida em React, criada com foco em simplicidade, visual moderno e navegação rápida.",
      img: "/imagens/landing-page.png",
      link: "https://github.com/Duardaxnt/landing-page"
    },
    {
      id: 2,
      titulo: "Furniro E-commerce",
      desc: "E-commerce full stack completo, desenvolvido com frontend moderno e backend estruturado para apresentar produtos, categorias e detalhes de forma clara, oferecendo uma navegação simples e eficiente.",
      img: "/imagens/ecommerce-furniro.png",
      link: "https://github.com/Duardaxnt/projeto-furniro"
    },
    {
      id: 3,
      titulo: "Paws n' Play",
      desc: "Um petshop fictício desenvolvido em HTML, CSS e JavaScript",
      img: "/imagens/petshop.png",
      link: "https://github.com/Duardaxnt/petshop-compass"
    },
    {
      id: 4,
      titulo: "Mr. Zeus",
      desc: "Em desenvolvimento, este espaço está sendo criado para apresentar o universo do criador e conectar você às melhores lojas parceiras, facilitando o acesso aos produtos recomendados e garantindo uma experiência prática e confiável.",
      img: "/imagens/mrzeus.jpg",
      link: "https://github.com/Duardaxnt/mrzeus"
    },
      {
      id: 5,
      titulo: "iBico",
      desc: "Em desenvolvimento, o iBico será uma plataforma digital brasileira lançada em 2026 que atuará como um marketplace de serviços, conectando profissionais de diversas áreas a clientes que precisam de soluções rápidas e confiáveis.",
      img: "/imagens/ibico.png",
      link: "https://ibicobrasil.com.br/"
    },
  ];

  return (
    <section className="portfolio-section" id="projetos">
      <h2 className="portfolio-title">Projetos</h2>

      <div className="portfolio-cards-wrapper">
        {projetos.map((p) => (
          <div key={p.id} className="portfolio-card">
            <img src={p.img} alt={p.titulo} className="portfolio-card-image" />

            <div className="portfolio-card-hover">
              <h3>{p.titulo}</h3>
              <p>{p.desc}</p>

              <a href={p.link} target="_blank" rel="noopener noreferrer">
                <button className="portfolio-btn"> Ver Projeto</button>
              </a>
            </div>

            <div className="portfolio-card-footer">
              <span>{p.titulo}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projetos;
