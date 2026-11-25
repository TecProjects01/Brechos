import React, { useState } from 'react';
import './Home.css';
import fotoGatuno from './assets/brechos/gatuno/fachada.webp';

function Home({ onAbrirBrecho }) {
    const [cidade, setCidade] = useState('Capivari - SP');
    const [busca, setBusca] = useState('');

    const brechos = [
        {
            id: 'gatuno',
            nome: 'Brechó Gatuno',
            cidade: 'Capivari - SP',
            bairro: 'Centro',
            endereco: 'R. Padre Fabiano, 958',
            nota: '5,0',
            descricao: 'Peças selecionadas, bolsas e acessórios no coração de Capivari.',
            imagem: fotoGatuno
        }
    ];

    const brechosFiltrados = brechos.filter((brecho) => {
        const bateCidade = brecho.cidade === cidade;
        const bateNome = brecho.nome.toLowerCase().includes(busca.toLowerCase());
        return bateCidade && bateNome;
    });

    const handleBuscar = () => {
        const secao = document.getElementById('brechos');
        if (secao) {
            secao.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="home-page">
            {/*Div principal na main page */}
            <section className="hero-section">
                <div className="hero-content">
                    <h1>Descubra os brechós e bazares da sua cidade.</h1>
                    <p>
                        Um portal que reúne brechós e bazares da região. Escolha a cidade,
                        conheça cada lugar, veja onde ele fica e como falar com ele.
                    </p>

                    <div className="search-bar">
                        {/*Div da busca de brechós e cidades*/}
                        <div className="input-group">
                            <label>Cidade</label>
                            <select
                                value={cidade}
                                onChange={(e) => setCidade(e.target.value)}
                            >
                                <option value="Capivari - SP">Capivari - SP</option>
                            </select>
                        </div>
                        <div className="input-group">
                            <label>Nome do brechó</label>
                            <input
                                type="text"
                                placeholder="Buscar pelo nome"
                                value={busca}
                                onChange={(e) => setBusca(e.target.value)}
                            />
                        </div>
                        <button className="btn-search" onClick={handleBuscar}>
                            Buscar
                        </button>
                    </div>
                </div>
                <div className="hero-image">
                </div>
            </section>

            {/* Seção com os cards dos brechós cadastrados */}
            <section id="brechos" className="brechos-section">
                <h2>Brechós em {cidade}</h2>

                {brechosFiltrados.length === 0 ? (
                    <p className="sem-resultados">
                        Nenhum brechó encontrado com "{busca}".
                    </p>
                ) : (
                    <div className="brechos-grid">
                        {brechosFiltrados.map((brecho) => (
                            <article
                                key={brecho.id}
                                className="brecho-card"
                                onClick={() => onAbrirBrecho(brecho.id)}
                            >
                                <div className="brecho-card-img">
                                    <img src={brecho.imagem} alt={brecho.nome} />
                                </div>
                                <div className="brecho-card-body">
                                    <div className="brecho-card-topo">
                                        <span className="brecho-card-bairro">{brecho.bairro}</span>
                                        <span className="brecho-card-nota">★ {brecho.nota}</span>
                                    </div>
                                    <h3>{brecho.nome}</h3>
                                    <p>{brecho.descricao}</p>
                                    <span className="brecho-card-endereco">{brecho.endereco}</span>
                                    <button
                                        type="button"
                                        className="btn-ver-brecho"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            onAbrirBrecho(brecho.id);
                                        }}
                                    >
                                        Conhecer brechó →
                                    </button>
                                </div>
                            </article>
                        ))}
                    </div>
                )}
            </section>
        </div>
    );
}

export default Home;