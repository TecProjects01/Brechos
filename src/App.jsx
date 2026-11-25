import React, { useState } from 'react';
import Home from './Home';
import Cadastro from './Cadastro';
import BrechoGatuno from './pages/BrechoGatuno';
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
          <a href="#brechos" onClick={() => setCurrentPage('home')}>
            Brechós
          </a>
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
        {currentPage === 'home' && (
          <Home onAbrirBrecho={(id) => setCurrentPage(id)} />
        )}
        {currentPage === 'cadastro' && <Cadastro />}
        {currentPage === 'gatuno' && (
          <BrechoGatuno onVoltar={() => setCurrentPage('home')} />
        )}
      </main>

    </div>
  );
}

export default App;