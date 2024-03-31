import CardCourses from "../../Components/CardCourses/CardCourses";
import "./home.css";
import CardExclusive from "../../Components/CardExclusives/CardsExclusive";
import infosCourses from "../../Data/infos-courses";
import infosCardExclusive from "../../Data/infos-cardExclusive";
import CardTestimony from "../../Components/CardTestimony/CardTestimony";
import FotoPietro from "../../assets/foto-pietro.png";
import infosCardTestimony from "../../Data/infos-cardTestimony";
import InfosFaq from "../../Data/faq";

function Home() {
  return (
    <div className="home" id="inicio">
      <div className="title">
        <h1>Conheça meus cursos</h1>
        <h2 id="sobre">Aulas de programação que você entende de verdade.</h2>
      </div>
      <div className="video">
        <div className="top"></div>
        <div className="bot">
          <div className="content">
            <iframe
              src="https://www.youtube.com/embed/Wh6ZZf707TQ?si=yERkgBT-m1n5pu54"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
      <div className="social-number">
        <div className="content">
          <div className="left">
            <div>
              <h2>40K+ alunos(as).</h2>
              <h2>Professor on-line no ensino superior</h2>
            </div>
            <div>
              <h2>+1.5 MM visualizações</h2>
              <h2>Aulas gratuitas no YouTube</h2>
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
      <section className="courses" id="courses">
        <h1>Cursos</h1>
        <div className="home-courses">
          {infosCourses.map((course, index) => (
            <CardCourses
              key={index}
              index={index}
              logo={course.logo}
              textTitle={course.textTitle}
              textSubTitle={course.textSubTitle}
              link={course.link}
            />
          ))}
        </div>
      </section>
      {/* <section className="section-exclusive" id="servicos">
        <h1>Serviços e conteúdos especiais</h1>
        <p>
          Entre em contato para eu entender como posso lhe ajudar da melhor
          forma!
        </p>
        <div className="content">
          {infosCardExclusive.map((cardExclusive, index) => (
            <CardExclusive
              key={index}
              title={cardExclusive.title}
              img={cardExclusive.img}
            />
          ))}
        </div>
      </section> */}
      <div className="about">
        <div className="top">
          <h1>Prof. Pietro Martins de Oliveira</h1>
        </div>
        <div className="content">
          <div className="left">
            <div>
              <h2>Profissional de TI desde 2007</h2>
              <h3>
                Pietro possui vasta experiência no mercado de Tecnologia da Informação, tendo atuado em diversos projetos e áreas.
              </h3>
            </div>
            <div>
              <h2>Desenvolvedor de Software Sênior</h2>
              <h3>
                Programador full stack, já atuou com linguagens como C, C++, C#, Java, Python, HTML, CSS, JavaScript/TypeScript, Go, Solidity.
              </h3>
            </div>
            <div>
              <h2>Professor no Ensino Superior</h2>
              <h3>
                Dá aulas de programação a nível técnico e superior. Coordenador de cursos de graduação e pós graduação.
              </h3>
            </div>
          </div>
          <div className="right">
            <img src={FotoPietro} alt="Imagem" />
          </div>
        </div>
        {/* <div className="bottom">
          <h3>Mais informações de algo</h3>
        </div> */}
      </div>
      <div className="testimony" id="depoimentos">
        <h1>Depoimentos de alunos e alunas.</h1>
        <div className="content">
          {infosCardTestimony.map((testimony, index) => (
            <CardTestimony
              key={index}
              title={testimony.title}
              text={testimony.text}
            />
          ))}
        </div>
      </div>
      <div className="faq" id="faq">
        <div className="left">
          <h1>Perguntas mais frequentes.</h1>
        </div>
        <div className="right">
          <ol>
            {InfosFaq.map((faq, index) => (
              <li key={index}>{faq.text}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Home;
