import infosPagesCourses from "../../Data/infos-courses-pages";
import "./courses-page.css";

function CoursesPage() {
  const type = localStorage.getItem("page");

  return (
    <div className="courses-page" id="inicio">
      <h1>{infosPagesCourses[type].title1}</h1>
      <section>
        <div className="video">
          <div>
            <iframe
              src={infosPagesCourses[type].video}
              title="video" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="ebook">
            <div className="button">
              <button>QUERO O E-BOOK, EXERCÍCIOS, CERTIFICADO e BÔNUS</button>
            </div>
            <p>{infosPagesCourses[type].description}</p>
            <ul>
              {infosPagesCourses[type].topics.map((topic, index) => (
                <li key={index}>{topic}</li>
              ))}
            </ul>
            <p>
              Você não precisa informar seus dados de e-mail, nem pagar nada
              para começar. Caso queira acessar o conteúdo gratuito, basta
              clicar aqui.
            </p>
            <p>
              Todavia… você pode ir além. Que tal receber um e-Book com o
              conteúdo resumido, bem como uma lista de exercícios resolvidos,
              para você praticar? Ou, quem sabe, emitir um certificado de
              conclusão do curso? Ainda: você pode ingressar em nossa comunidade
              no WhatsApp para tirar dúvidas em tempo real!
            </p>
          </div>
        </div>
      </section>
      <div className="middle-h1">
        <h1>Pratique com exercícios e emita seu certificado!</h1>
      </div>
      <section>
        <div className="content">
          <div className="text">
            <p>
              Algumas pessoas querem ir além de assistir os vídeos, e têm o
              desejo receber um e-Book em PDF, resumido, bem como botar a mão na
              massa através de exercícios práticos. Por isso, se você quiser ter
              acesso aos exercícios resolvidos, basta adquiri-los. Além disso
              você terá condições de emitir seu certificado de conclusão do
              curso. E ainda tem mais um bônus extraordinário: se você quiser
              tirar suas dúvidas em tempo real com os(as) demais participantes
              do curso, poderá ingressar no nosso grupo VIP, no WhatsApp, para
              conversar com outras pessoas de nossa comunidade sobre seus
              estudos. Eu próprio, Prof. Pietro, estou no grupo do WhatsApp para
              mediar as conversas e também para auxiliar na solução de dúvidas.
              Para acessar os exercícios, emitir o seu certificado, e também ter
              acesso ao bônus (grupo VIP no WhatsApp) clique no botão a seguir.
              [Caso o botão não esteja sendo renderizado, logo abaixo, por
              gentileza, clique aqui para adquirir o material]
            </p>
          </div>
          <button>QUERO O E-BOOK, EXERCÍCIOS, CERTIFICADO e BÔNUS</button>
        </div>
      </section>
      <section>
        <div className="faq">
          <h2>Perguntas e respostas frequentes sobre o curso:</h2>
          <p>
            Tem dúvidas sobre o funcionamento do curso, sobre os materiais,
            certificado, sobre a gratuidade ou se há custos financeiros
            envolvidos? LEIA AS PERGUNTAS E RESPOSTAS ABAIXO, ATENTAMENTE.{" "}
          </p>
          <ul>
            <li>Existe algum pré-requisito?</li>
            <p>
              Não existem pré-requisitos técnicos. Todavia, é importante dizer
              que a evolução pessoal do(a) estudante depende exclusivamente
              dele(a).
            </p>
            <li>Qual linguagem de programação vou aprender?</li>
            <p>
              Você receberá conteúdos voltados à criação de algoritmos em
              Pseudocódigo, também conhecido como Portugol, e poderá executar
              seus algoritmos na ferramenta conhecida como VisuAlg.
            </p>
            <li>O curso é de graça, sem custos envolvidos?</li>
            <p>
              As vídeoaulas disponíveis no Youtube são todas gratuitas. Todavia,
              existem custos para receber o e-Book, a lista de exercícios, para
              emitir o certificado e para ter acesso ao bônus (grupo no WhatsApp
              com a comunidade e com o Prof. Pietro).
            </p>
            <li>Como saber se necessito das vídeoaulas?</li>
            <p>
              Se você quer aprender lógica de programação e algoritmos em
              Pseudocódigo / Portugol, esse material é para você.
            </p>
            <li>Há alguma garantia de aprendizagem?</li>
            <p>
              Se o(a) estudante assistir a todas as aulas, resolver todos os
              exercícios, e tirar suas dúvidas no grupo do WhatsApp, é esperado
              que ele(a) se sinta muito mais confiante com relação à sua
              habilidade em desenvolver algoritmos. Todavia, apenas o(a)
              próprio(a) estudante precisa se comprometer e, sendo assim, o
              Prof. Pietro não pode dar garantias nesse sentido – as garantias
              devem ser buscadas pelo(a) estudante.
            </p>
            <li>
              Como saber se necessito dos exercícios resolvidos para praticar?
            </li>
            <p>
              Se você é iniciante, se você está migrando de área, se você tem
              acesso a poucos materiais de estudo ou a materiais ruins, se você
              não tem praticado direito, se você precisa adquirir experiência,
              se você precisa ser aprovado em alguma disciplina ou concurso, se
              você está com dificuldades, enfim, se você quer aprender, a lista
              de exercícios é feita especialmente para você!
            </p>
            <li>
              Os exercícios resolvidos são gratuitos, ou há custos envolvidos?
            </li>
            <p>
              Os exercícios resolvidos são reservados às pessoas que querem
              emitir seu certificado e, por tanto, para treinar suas habilidades
              de programação, nós entregamos a lista de exercícios para que a
              pessoa pratique para receber seu certificado de conclusão do
              curso. As vídeo-aulas são grautitas, a emissão do certificado é
              paga.
            </p>
            <li>
              Como saber se posso emitir meu certificado de conclusão do curso?
            </li>
            <p>
              Caso você tenha adquirido o e-Book com a emissão de certificado,
              você precisará ter um aproveitamento de 95% do curso e, então,
              poderá emitir seu certificado.
            </p>
            <li>
              A emissão do certificado é gratuita, ou há custos envolvidos?
            </li>
            <p>
              As vídeo-aulas são grautitas, porém, a emissão do certificado é
              paga.
            </p>
            <li>Como posso tirar minhas dúvidas?</li>
            <p>
              Você pode tirar suas dúvidas nos comentários de cada videoaula
              disponível no Youtube. Além disso, caso você tenha adquirido o
              e-Book com a emissão do certificado, poderá acessar o bônus, que é
              o grupo VIP no WhatsApp, que por sua vez, também serve para que
              você tire suas dúvidas em tempo real.
            </p>
            <li>Existe um grupo do WhatsApp do qual eu posso participar?</li>
            <p>
              Caso você tenha adquirido o e-Book com a emissão do certificado,
              poderá acessar o bônus, que é o grupo VIP no WhatsApp, que por sua
              vez, serve para que você tire suas dúvidas em tempo real.
            </p>
            <li>
              O acesso ao grupo do WhatsApp é gratuito, ou há custos envolvidos?
            </li>
            <p>
              Caso você tenha adquirido o e-Book com emissão do certificado,
              poderá acessar o bônus, que é o grupo VIP no WhatsApp, que por sua
              vez, serve para que você tire suas dúvidas em tempo real. Ou seja,
              o acesso ao bônus (grupo do WhatsApp) está atrelado à compra da
              emissão do certificado.
            </p>
            <li>Terei acesso a quais materiais, gratuitamente?</li>
            <p>
              Você poderá assistir às videoaulas, pelo Youtube, gratuitamente.
            </p>
            <li>
              Terei acesso a quais materiais, caso eu pague o preço completo?
            </li>
            <p>
              Caso você opte por pagar pela emissão do certificado de conclusão
              do curso, terá o direito de emiti-lo. Você também receberá o
              e-Book com o conteúdo e uma lista de exercícios resolvidos para
              poder praticar antes de emitir seu certificado. Também, como
              bônus, você terá acesso o grupo VIP no WhatsApp.
            </p>
            <li>Em quais ambientes poderei acessar os materiais gratuitos?</li>
            <p>
              As videaulas gratuitas estarão disponíveis através do meu canal do
              Youtube.
            </p>
            <li>
              Em quais ambientes poderei acessar os materiais e serviços pagos?
            </li>
            <p>
              O acesso aos serviços pagos estarão disponíveis através da
              plataforma Membertizze. A Membertizze é o seu ambiente virtual de
              aprendizagem, onde você poderá realizar exercícios, emitir seu
              certificado, baixar os materiais de estudo e também terá acesso ao
              grupo VIP do WhatsApp (bônus).
            </p>
            <li>
              Os conteúdos gratuitos estarão disponíveis durante quanto tempo?
            </li>
            <p>
              A princípio, os conteúdos gratuitos estarão disponíveis no Youtube
              de maneira vitalícia. Todavia, eu, Prof. Pietro, me reservo ao
              direito de remover os conteúdos do ar caso seja necessário.
              Todavia, caso você tenha comprado o curso, terá acesso vitalício
              ao mesmo dentro da plataforma de hospedagem (Membertizze).
            </p>
            <li>
              Os conteúdos pagos estarão disponíveis durante quanto tempo?
            </li>
            <p>
              Os conteúdos pagos estarão disponíveis na Membertizze de maneira
              vitalícia. Todavia, caso a Membertizze deixe de ser parceira do
              Prof. Pietro, o professor poderá hospedar a oferta dos respectivos
              serviços e produtos em outra plataforma similar. Caso isso
              aconteca, as pessoas que pagaram pelo serviço/produto serão
              notificadas via e-mail.
            </p>
            <li>
              Quais as formas de pagamento para adquirir os conteúdos e serviços
              pagos?
            </li>
            <p>
              Você pode pagar à vista, no boleto, à vista no cartão de crédito
              ou de forma parcelada no cartão de crédito. Aceitamos as bandeiras
              VISA, Mastercard, American Express, Elo e Hypercard.
            </p>
            <li>
              Quais os próximos passos, após adquirir os materiais e serviços
              pagos?
            </li>
            <p>
              Após realizar o pagamento, você receberá um e-mail com as
              instruções para acessar sua área de membros na plataforma
              Membertizze e acessar a área do curso de Lógica de Programação em
              Pseudocódigo. Dentro da Membertizze, você poderá baixar as listas
              de exercícios para praticar, acessar o grupo do WhatsApp e também
              para emissão do certificado.
            </p>
            <li>
              Já paguei mas estou com problemas de acesso aos materiais e
              serviços pagos, o que eu faço?
            </li>
            <p>
              Envie, imediatamente, um e-mail com o título [PAGAMENTO] para o
              endereço suporte@profpietro.com. Responderemos assim que possível.
            </p>
            <li>
              Existe alguma garantia de reembolso para os materiais e serviços
              pagos?
            </li>
            <p>
              Caso você adquira o curso e não esteja satisfeito(a), pode pedir
              reembolso dentro de 7 dias a partir da compra.
            </p>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default CoursesPage;
