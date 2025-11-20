import React from 'react';

export default function Navbar() {
  return (
    <header className="navbar">
    
      <nav>
        <ul className="nav-links">
          <li><a href="#" className="active">Home</a></li>
          <li><a href="#sobre">Sobre</a></li>
          <li><a href="#experiencia">Experiência</a></li>
          <li><a href="projetos">Projetos</a></li>
        </ul>
      </nav>
    </header>
  );
}