import React from 'react';
import './Home.css';

function Home() {
    return (
        <div className="home-page">
            {/*Div principal na main page */}
            <section className="hero-section">
                <div className="hero-content">
                    <h1>Descubra os brechós e bazares da sua cidade.</h1>
                    <p>Um portal que reúne brechós e bazares da região. Escolha a cidade, conheça cada lugar, veja onde ele fica e como falar com ele.</p>

                    <div className="search-bar">
                        {/*Div da busca de brechós e cidades*/}
                        <div className="input-group">
                            <label>Cidade</label>
                            <select><option>Capivari - SP</option></select>
                        </div>
                        <div className="input-group">
                            <label>Nome do brechó</label>
                            <input type="text" placeholder="Buscar pelo nome" />
                        </div>
                        <button className="btn-search">Buscar</button>
                    </div>
                </div>
                <div className="hero-image">
                </div>
            </section>

        </div>
    );
}

export default Home;