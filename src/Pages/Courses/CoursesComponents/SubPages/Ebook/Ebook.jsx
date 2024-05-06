import "./ebook.css";
import infosPagesCourses from "../../../../../Data/infos-courses-pages";

function Ebook() {
  const type = localStorage.getItem("page");
  return (
    <div className="container">
      <div className="ebook">
        <p>{infosPagesCourses[type].description}</p>
        <ul>
          {infosPagesCourses[type].topics.map((topic, index) => (
            <li key={index}>{topic}</li>
          ))}
        </ul>
        <p>
          Você não precisa informar seus dados de e-mail, nem pagar nada para
          começar. Caso queira acessar o conteúdo gratuito, basta clicar aqui.
        </p>
        <p>
          Todavia… você pode ir além. Que tal receber um e-Book com o conteúdo
          resumido, bem como uma lista de exercícios resolvidos, para você
          praticar? Ou, quem sabe, emitir um certificado de conclusão do curso?
          Ainda: você pode ingressar em nossa comunidade no WhatsApp para tirar
          dúvidas em tempo real!
        </p>
      </div>
    </div>
  );
}

export default Ebook;
