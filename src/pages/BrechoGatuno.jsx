import React, { useState } from 'react';
import './BrechoGatuno.css';

import fotoFachada from '../assets/brechos/gatuno/fachada.webp';
import fotoInterior from '../assets/brechos/gatuno/interior.webp';

function BrechoGatuno({ onVoltar }) {
    const [fotoAtiva, setFotoAtiva] = useState(0);

    const fotos = [
        {
            src: fotoFachada,
            alt: 'Fachada do Brechó Gatuno na Rua Padre Fabiano, Centro de Capivari',
            legenda: 'Fachada na R. Padre Fabiano, 958 — Centro'
        },
        {
            src: fotoInterior,
            alt: 'Interior do Brechó Gatuno com araras, bolsas e peças selecionadas',
            legenda: 'Espaço interno organizado com roupas e acessórios'
        }
    ];

    const whatsappNumero = '5519992588081';
    const mensagemWhats = encodeURIComponent(
        'Olá! Vi o Brechó Gatuno no portal de brechós de Capivari e gostaria de saber mais informações.'
    );
    const linkWhatsApp = `https://wa.me/${whatsappNumero}?text=${mensagemWhats}`;

    const linkMaps =
        'https://www.google.com/maps/search/?api=1&query=R.+Padre+Fabiano,+958+-+Centro,+Capivari+-+SP,+13360-000';

    return (
        <div className="brecho-page">
            {/* Barra superior / Navegação de retorno */}
            <div className="brecho-topbar">
                <button className="btn-voltar" onClick={onVoltar}>
                    ← Voltar para a busca
                </button>
                <span className="breadcrumb">Capivari - SP / Centro / Brechó Gatuno</span>
            </div>

            {/* Cabeçalho principal do estabelecimento */}
            <header className="brecho-hero">
                <div className="brecho-hero-info">
                    <div className="brecho-badges">
                        <span className="badge-destaque">Brechó Local</span>
                        <span className="badge-nota">★ 5,0 (3 avaliações no Google)</span>
                    </div>

                    <h1>Brechó Gatuno</h1>
                    <p className="brecho-subtitulo">
                        Moda circular e garimpo no coração de Capivari — peças selecionadas em um
                        ambiente acolhedor no Centro da cidade.
                    </p>

                    <div className="brecho-cta-group">
                        <a
                            href={linkWhatsApp}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primario"
                        >
                            Falar no WhatsApp
                        </a>
                        <a
                            href={linkMaps}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-secundario"
                        >
                            Ver rota no mapa
                        </a>
                    </div>
                </div>

                {/* Galeria interativa de fotos */}
                <div className="brecho-galeria">
                    <div className="galeria-principal">
                        <img src={fotos[fotoAtiva].src} alt={fotos[fotoAtiva].alt} />
                        <span className="galeria-legenda">{fotos[fotoAtiva].legenda}</span>
                    </div>
                    <div className="galeria-miniaturas">
                        {fotos.map((foto, index) => (
                            <button
                                key={index}
                                type="button"
                                className={`miniatura-btn ${fotoAtiva === index ? 'ativa' : ''}`}
                                onClick={() => setFotoAtiva(index)}
                            >
                                <img src={foto.src} alt={foto.alt} />
                            </button>
                        ))}
                    </div>
                </div>
            </header>

            {/* Conteúdo principal + Painel lateral de informações */}
            <main className="brecho-conteudo">
                <div className="brecho-coluna-principal">
                    {/* História e propósito (o diferencial do projeto de extensão) */}
                    <section className="card-secao">
                        <h2>Nossa História</h2>
                        <p>
                            {/* Substitua pelo texto real após conversar com quem administra a loja */}
                            Localizado na Rua Padre Fabiano, bem no Centro de Capivari, o{' '}
                            <strong>Brechó Gatuno</strong> nasceu com a proposta de aproximar a
                            moda consciente da rotina da cidade. [PREENCHER: conte aqui como o
                            brechó começou, quem fundou, de onde veio o nome "Gatuno" e o que
                            inspira a curadoria das peças.]
                        </p>
                        <p>
                            Mais do que um ponto de compra, o espaço busca incentivar o consumo
                            sustentável, dar uma segunda vida a peças de qualidade e fortalecer o
                            comércio local capivariano.
                        </p>
                    </section>

                    {/* O que o brechó oferece */}
                    <section className="card-secao">
                        <h2>O que você encontra por lá</h2>
                        <div className="categorias-grid">
                            <div className="categoria-item">
                                <h3>Vestuário variado</h3>
                                <p>
                                    Peças femininas e masculinas selecionadas — blusas, calças,
                                    saias, bermudas e looks casuais.
                                </p>
                            </div>
                            <div className="categoria-item">
                                <h3>Bolsas e Acessórios</h3>
                                <p>
                                    Bolsas, bonés e itens para completar o visual com personalidade.
                                </p>
                            </div>
                            <div className="categoria-item">
                                <h3>Curadoria caprichada</h3>
                                <p>
                                    Roupas organizadas, higienizadas e expostas para você garimpar
                                    com calma.
                                </p>
                            </div>
                            <div className="categoria-item">
                                <h3>[PREENCHER: Diferencial]</h3>
                                <p>
                                    Ex.: Se compra/consigna peças, se tem novidades toda semana ou
                                    faixa de preço média.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Curiosidades / Informações que pouca gente conhece */}
                    <section className="card-secao">
                        <h2>Você sabia?</h2>
                        <ul className="lista-curiosidades">
                            <li>
                                <strong>Garimpo presencial:</strong> você pode provar e conferir o
                                caimento das peças diretamente na loja.
                            </li>
                            <li>
                                <strong>Avaliação máxima:</strong> o brechó conta com nota 5,0 nas
                                avaliações do Google na região.
                            </li>
                            <li>
                                <strong>[PREENCHER]:</strong> adicione uma curiosidade da história
                                da loja ou do prédio no Centro.
                            </li>
                        </ul>
                    </section>
                </div>

                {/* Sidebar com dados práticos */}
                <aside className="brecho-sidebar">
                    <div className="card-info">
                        <h2>Informações e Contato</h2>

                        <div className="info-bloco">
                            <span className="info-label">Endereço</span>
                            <p>R. Padre Fabiano, 958 - Centro</p>
                            <p>Capivari - SP, CEP 13360-000</p>
                        </div>

                        <div className="info-bloco">
                            <span className="info-label">Telefone / WhatsApp</span>
                            <a href={linkWhatsApp} target="_blank" rel="noopener noreferrer">
                                (19) 99258-8081
                            </a>
                        </div>

                        <div className="info-bloco">
                            <span className="info-label">Horário de funcionamento</span>
                            <p className="placeholder-texto">
                                [PREENCHER: ex. Seg a Sex, 09h às 18h | Sáb, 09h às 13h]
                            </p>
                        </div>

                        <div className="info-bloco">
                            <span className="info-label">Formas de pagamento</span>
                            <p className="placeholder-texto">
                                [PREENCHER: ex. Pix, Dinheiro, Cartão]
                            </p>
                        </div>

                        <div className="info-bloco">
                            <span className="info-label">Instagram</span>
                            <p className="placeholder-texto">@brechogatuno__</p>
                        </div>
                    </div>

                    {/* Mapa incorporado */}
                    <div className="card-mapa">
                        <iframe
                            title="Localização do Brechó Gatuno"
                            src="https://www.google.com/maps?q=R.+Padre+Fabiano,+958+-+Centro,+Capivari+-+SP,+13360-000&output=embed"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                </aside>
            </main>
        </div>
    );
}

export default BrechoGatuno;