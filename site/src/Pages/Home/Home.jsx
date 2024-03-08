import CardCourses from "../../Components/CardCourses/CardCourses";
import "./home.css";
import CardExclusive from "../../Components/CardExclusives/CardsExclusive";
import AulasExclusivas from "../../assets/aulas-exclusivas.png";
import AulasParticulares from "../../assets/aulas-particulares.png";
import Consultoria from "../../assets/consultoria.png";
import Mentoria from "../../assets/carreira.png";
import infosCourses from "./infos-courses";
console.log(infosCourses);
function Home() {
  return (
    <div className="home">
      <section>
        <h1>Conheça meus cursos</h1>
        <div className="home-courses">
          {infosCourses.map((course, index) => (
            <CardCourses
              key={index}
              logo={course.logo}
              textTitle={course.textTitle}
              textSubTitle={course.textSubTitle}
            />
          ))}
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
            <CardExclusive title="Mentoria de Carreira" img={Mentoria} />
          </div>
          <div>
            <CardExclusive title="Aulas Exclusivas" img={AulasExclusivas} />
          </div>
          <div>
            <CardExclusive title="Aulas Particulares" img={AulasParticulares} />
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
          <h1>Sobre</h1>
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
          <div className="right">
            <img src="" alt="Uma imagem aqui" />
          </div>
        </div>
        <div className="bottom">
          <h3>Mais informações de algo</h3>
        </div>
      </div>
      <div className="testimony">
        <h1>Depoimentos de alunos e alunas.</h1>
        <div className="content"></div>
      </div>
    </div>
  );
}

export default Home;
