import React from 'react';
import './Navbar.css'; // Importa il CSS per la navbar

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li><a href="#about">Chi Sono</a></li>
        <li><a href="#skills">Competenze</a></li>
        <li><a href="#contact">Contatti</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
