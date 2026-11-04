import React, { useState } from 'react';
import Home from './Home';
import Cadastro from './Cadastro';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div className="app-container">
      {/*Seção do menu Nav*/}
      <header className="navbar">
        <div className="logo" onClick={() => setCurrentPage('home')}>
          <span className="logo-icon"></span> Provisório
        </div>
        {/*Botões ainda não funcionais*/}
        <nav className="nav-links">
          <a href="#brechos">Brechós</a>
          <a href="#cidades">Cidades</a>
          <a href="#sobre">Sobre o projeto</a>
        </nav>
        <button
          className="btn-primary"
          onClick={() => setCurrentPage('cadastro')}
        >
          Cadastrar meu brechó
        </button>
      </header>

      <main>
        {currentPage === 'home' ? <Home /> : <Cadastro />}
      </main>

    </div>
  );
}

export default App;