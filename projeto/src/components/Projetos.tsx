const Projetos = () => {
  const projetos = [
    {
      id: 1,
      titulo: "Landing Page (TypeScript)",
      desc: "Você está visitando agora a minha Landing Page! Desenvolvida em React, criada com foco em simplicidade, visual moderno e navegação rápida.",
      img: "/imagens/landing-page.png",
      link: "https://github.com/Duardaxnt/landing-page"
    },
    {
      id: 2,
      titulo: "Furniro E-commerce",
      desc: "Frontend React TS + backend NestJS/PostgreSQL.",
      img: "/imagens/ecommerce-furniro.png",
      link: "https://github.com/Duardaxnt/projeto-furniro"
    },
    {
      id: 3,
      titulo: "Petshop",
      desc: "Site em HTML, CSS e JavaScript.",
      img: "/imagens/petshop.png",
      link: "https://github.com/Duardaxnt/petshop-compass"
    },
    {
      id: 4,
      titulo: "Mr. Zeus",
      desc: "Landing page desenvolvida em React + TypeScript.",
      img: "/imagens/mrzeus.jpg",
      link: "https://github.com/Duardaxnt/mrzeus"
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
                <button className="portfolio-btn">👁️ Ver Projeto</button>
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
