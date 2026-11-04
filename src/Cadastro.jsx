import React from 'react';
import './Cadastro.css';

function Cadastro() {
    return (
        <div className="cadastro-page">
            {/*Div da esquerda sobre o cadastro*/}
            <div className="cadastro-container dark-bg">

                <div className="cadastro-info">
                    <h2>Você tem um brechó?</h2>
                    <p>
                        Cadastre seu contato e as informações do seu brechó para que possamos ajudar na divulgação.
                        Entraremos em contato para mais detalhes e esclarecimentos.
                    </p>
                </div>

                {/*Seção do formulário de cadastro. Rever se todas as informações são necessárias*/}
                <div className="cadastro-form-box white-bg">
                    <form className="cadastro-form">
                        <div className="form-row">
                            <div className="input-box">
                                <label>Nome do brechó</label>
                                <input type="text" placeholder="Ex.: Brechó exemplo" />
                            </div>
                            <div className="input-box">
                                <label>Cidade</label>
                                <select>
                                    <option>Selecione</option>
                                    <option>Capivari - SP</option>
                                </select>
                            </div>
                        </div>

                        <div className="form-row full-width">
                            <div className="input-box">
                                <label>Endereço</label>
                                <input type="text" placeholder="Rua, número, bairro" />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="input-box">
                                <label>WhatsApp</label>
                                <input type="text" />
                            </div>
                            <div className="input-box">
                                <label>Rede social (Se tiver)</label>
                                <input type="text" placeholder="@seubrecho" />
                            </div>
                        </div>

                        <div className="form-row full-width">
                            <div className="input-box">
                                <label>Categorias</label>
                                <input type="text" placeholder="Roupas, calçados, infantil..." />
                            </div>
                        </div>

                        {/*Mensagem explicando que as informações foram enviadas para um email que criaremos*/}
                        <button type="submit" className="btn-submit">Enviar para aprovação</button>
                    </form>
                </div>

            </div>
        </div>
    );
}

export default Cadastro;