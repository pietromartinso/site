import CardCourses from "../../Components/CardCourses/CardCourses";
import "./home.css";
import LogicaPseudo from "../../assets/codigo.png";
import LogicaC from "../../assets/c.png";
import Git from "../../assets/git.png";
import BlockChain from "../../assets/blockchain.png";
import Ethereum from "../../assets/ethereum.png";
import Solidity from "../../assets/solidity.png";
import Python from "../../assets/python.png";
import DataStructure from "../../assets/estrutura-dados.png";
import CPlusPlus from "../../assets/c++.png";
import CardExclusive from "../../Components/CardExclusives/CardsExclusive";
import AulasExclusivas from "../../assets/aulas-exclusivas.png";
import AulasParticulares from "../../assets/aulas-particulares.png";
import Consultoria from "../../assets/consultoria.png";
import Mentoria from "../../assets/carreira.png";

function Home() {
  return (
    <div className="home">
      <section>
        <h1>Conheça meus cursos</h1>
        <div className="home-courses">
          <CardCourses
            logo={LogicaPseudo}
            textTitle={"Lógica de Programação em Pseudocódigo"}
            textSubTitle={"Início imediato!"}
          />
          <CardCourses
            logo={LogicaC}
            textTitle={"Lógica de programação em C"}
            textSubTitle={"Início imediato!"}
          />
          <CardCourses
            logo={Git}
            textTitle={"Controle de versão com Git & Github"}
            textSubTitle={"Início imediato!"}
          />
          <CardCourses
            logo={BlockChain}
            textTitle={"Introdução à Tecnologia BLockchain"}
            textSubTitle={"Em breve..."}
          />
          <CardCourses
            logo={Ethereum}
            textTitle={"Introdução ao Ethereum (Conceitual)"}
            textSubTitle={"Início imediato!"}
          />
          <CardCourses
            logo={Solidity}
            textTitle={"Solidity: Smart Contracts Básico"}
            textSubTitle={"Início imediato!"}
          />
          <CardCourses
            logo={Python}
            textTitle={"Lógica de Programação em Python"}
            textSubTitle={"Início imediato!"}
          />
          <CardCourses
            logo={DataStructure}
            textTitle={"Estrutura de Dados para programadores"}
            textSubTitle={"Em breve..."}
          />
          <CardCourses
            logo={CPlusPlus}
            textTitle={"Programação Orientada a Objetos em C++"}
            textSubTitle={"Em breve..."}
          />
        </div>
      </section>
      <section className="section-exclusive">
        <h1>Serviços e conteúdos especiais</h1>
        <p>
          Entre em contato para eu entender como posso lhe ajudar da melhor
          forma!
        </p>
        <div className="content">
          <div>
            <CardExclusive
              title="Consultoria em Web3 / Blockchain"
              img={Consultoria}
            />
          </div>
          <div>
            <CardExclusive
              title="Mentoria de Carreira"
              img={Mentoria}
            />
          </div>
          <div>
            <CardExclusive
              title="Aulas Exclusivas"
              img={AulasExclusivas}
            />
          </div>
          <div>
            <CardExclusive
              title="Aulas Particulares"
              img={AulasParticulares}
            />
          </div>
        </div>
      </section>
      <div className="video">
        <div className="top"></div>
        <div className="bot">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/Wh6ZZf707TQ?si=yERkgBT-m1n5pu54"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <div className="social-number">
        <div className="content">
          <div className="left">
            <div>
              <h2>Mais de X alunos pelo mundo.</h2>
              <h2>Xh de conteúdo.</h2>
            </div>
            <div>
              <h2>X certificados emitidos.</h2>
              <h2>Xh de conteúdo.</h2>
            </div>
          </div>
          <div className="right">
            <div className="content">
              <h1>Comece agora de graça!</h1>
              <button>Começar!</button>
            </div>
          </div>
        </div>
      </div>
      <div className="sobre">
        <div className="top">
          <h1>O título entra aqui</h1>
        </div>
        <div className="content">
          <div className="left">
            <div>
              <h1>Texto Aqui</h1>
              <h3>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
                totam commodi ab sapiente laudantium accusantium.
              </h3>
            </div>
            <div>
              <h1>Texto Aqui</h1>
              <h3>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
                totam commodi ab sapiente laudantium accusantium.
              </h3>
            </div>
            <div>
              <h1>Texto Aqui</h1>
              <h3>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
                totam commodi ab sapiente laudantium accusantium.
              </h3>
            </div>
          </div>
          <div className="right"></div>
        </div>
        <div className="bottom"></div>
      </div>
    </div>
  );
}

export default Home;
