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
        <h2 id="sobre">Lorem ipsum dolor sit amet.</h2>
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
      <section className="section-exclusive" id="servicos">
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
      </section>
      <div className="about">
        <div className="top">
          <h1>Sobre</h1>
        </div>
        <div className="content">
          <div className="left">
            <div>
              <h2>Texto Aqui</h2>
              <h3>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
                totam commodi ab sapiente laudantium accusantium.
              </h3>
            </div>
            <div>
              <h2>Texto Aqui</h2>
              <h3>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
                totam commodi ab sapiente laudantium accusantium.
              </h3>
            </div>
            <div>
              <h2>Texto Aqui</h2>
              <h3>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
                totam commodi ab sapiente laudantium accusantium.
              </h3>
            </div>
          </div>
          <div className="right">
            <img src={FotoPietro} alt="Imagem" />
          </div>
        </div>
        <div className="bottom">
          <h3>Mais informações de algo</h3>
        </div>
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
