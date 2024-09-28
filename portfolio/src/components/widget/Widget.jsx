import { useState } from "react";
import "./widget.css";

const menuHeight = getComputedStyle(document.documentElement).getPropertyValue(
  "--menu-height"
);

const buttons = ["Forum CPS", "WayToGame", "Artist Page", "Cinematch"];

export const Widget = () => {
  const [activeBlock, setActiveBlock] = useState(0);

  const toggleMenuBlock = (index) => {
    setActiveBlock(index);
  };

  return (
    <article className="widget-card row">
      <div className="buttons col-lg-6 col-md-4 col-sm-6 col-xs-2 col-2">
        {buttons.map((button, index) => (
          <button
            key={index}
            className={index === activeBlock ? "active" : ""}
            onClick={() => toggleMenuBlock(index)}
          >
            {button}
          </button>
        ))}
      </div>
      <div className="wrapper col-lg-6 col-md-4 col-sm-6 col-xs-8 col-8">
        <div
          className="content"
          style={{ translate: `0 calc(0px - ${menuHeight} * ${activeBlock})` }}
        >
          <div className="block row">
            <div className="col">
              <h2 className="">Forum CPS</h2>
              <p>
                Projeto de TCC desenvolvido para melhorar a comunicação e o aprendizado entre os alunos do Centro Paula Souza, por meio da criação de um fórum interativo. Este espaço digital permite que os estudantes compartilhem experiências, atualizações, notícias e conselhos de forma colaborativa. Além disso, o Fórum CPS facilita uma comunicação mais eficiente entre diretores, professores e alunos, promovendo um acesso mais ágil e direto às informações institucionais.
              </p>
            </div>
            <div className="col d-flex justify-content-center align-items-center flex-column">
            <a href="github.com/terrykrom/cinematch" className="d-flex justify-content-center align-items-center flex-column text-decoration-none">
              <img src="/cps.png" className="mb-5" alt="" />
              <button>Ver Mais</button>
            </a>
            </div>
          </div>
          <div className="block row">
            <div className="col">
              <h2>Way To Game</h2>
              <p>
                Onde o mundo dos games encontra a acessibilidade! Acreditamos que a alegria dos jogos deve estar ao alcance de todos, sem a necessidade de pirataria ou de gastar muito dinheiro. Nossa plataforma é dedicada a apresentar uma vasta coleção de jogos gratuitos que oferecem entretenimento interminável sem custar um centavo. Explore um mundo onde a diversão não conhece limites e o gaming é verdadeiramente para todos!
              </p>
            </div>
            <div className="col d-flex justify-content-center align-items-center flex-column">
            <a href="github.com/terrykrom/cinematch" className="d-flex justify-content-center align-items-center flex-column text-decoration-none">
              <img src="/waytogame.png" className="mb-5" alt="" />
              <button>Ver Mais</button>
            </a>
            </div>
          </div>
          <div className="block row">
            <div className="col">
              <h2>Artist Page</h2>
              <p>
                Este projeto freelance foi desenvolvido como um blog pessoal dedicado ao artista local DKJ RAP. A plataforma oferece uma visão completa da carreira do artista, incluindo uma seleção de suas melhores imagens, vídeos e um reprodutor de música interativo. Além disso, o blog apresenta a história do artista e mantém os visitantes atualizados com as últimas notícias sobre suas atividades.
              </p>
            </div>
            <div className="col d-flex justify-content-center align-items-center flex-column">
            <a href="github.com/terrykrom/cinematch" className="d-flex justify-content-center align-items-center flex-column text-decoration-none">
              <img src="/artist.svg" className="mb-5" alt="" />
              <button>Ver Mais</button>
            </a>
            </div>
          </div>
          <div className="block row">
            <div className="col">
              <h2>Cinematch</h2>
              <p>
                Um website de filmes criado como projeto pessoal. Nesse projeto, é possível pesquisar filmes por titulo, curtir seus filmes favoritos e receber recomendações baseadas nos generos mais curtidos por você!
              </p>
            </div>
            <div className="col d-flex justify-content-center align-items-center flex-column">
            <a href="github.com/terrykrom/cinematch" className="d-flex justify-content-center align-items-center flex-column text-decoration-none">
              <img src="/cinematch.png" className="mb-5" alt="" />
              <button>Ver Mais</button>
            </a>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};
