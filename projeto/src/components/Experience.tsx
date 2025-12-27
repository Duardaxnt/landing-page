import React from 'react';

export default function Experience() {
    return (
        <section className="experiencia" id="experiencia">
            <h2>Experiência</h2>

            <div className="timeline">
                <div className="linha"></div>

                {/* Experiência 1 */}
                <div className="item esquerda">
                    <div className="card">
                        <h3>Compass UOL</h3>
                        <p><strong>Estagiária em Desenvolvimento Full-Stack</strong></p>
                        <p>Março 2025 – Agosto 2025</p>
                    </div>
                </div>

                {/* Experiência 2 */}
                <div className="item direita">
                    <div className="card">
                        <h3>iBico Brasil</h3>
                        <p><strong>Desenvolvedora Full-Stack</strong></p>
                        <p>Novembro 2025 – Atual</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
