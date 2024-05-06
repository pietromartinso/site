import { useState } from "react";
import ArrowDown from "../../../../../assets/seta-baixo.png";
import ArrowUp from "../../../../../assets/seta-cima.png";
import dataFaq from "./data-faq";
import "./faq.css";

function Faq() {
  const [showAnswer, setShowAnswer] = useState(null);
  const [arrow, setArrow] = useState(Array(dataFaq.length).fill(false));

  const toggleShowAnswer = (index) => {
    if (showAnswer === index) {
      setShowAnswer(null);

      setArrow((prevArrows) => {
        const newArrows = [...prevArrows];
        newArrows[index] = false;
        return newArrows;
      });
    } else {
      const newArrows = Array(dataFaq.length).fill(false);
      newArrows[index] = true;
      setArrow(newArrows);
      setShowAnswer(index);
    }
  };

  return (
    <div className="faq">
      <h2>Perguntas e respostas frequentes sobre o curso:</h2>
      <p>
        Tem dúvidas sobre o funcionamento do curso, sobre os materiais,
        certificado, sobre a gratuidade ou se há custos financeiros envolvidos?
        LEIA AS PERGUNTAS E RESPOSTAS ABAIXO, ATENTAMENTE.{" "}
      </p>
      <ul>
        {dataFaq.map((faq, index) => (
          <div key={index}>
            <li onClick={() => toggleShowAnswer(index)}>
              <img src={arrow[index] ? ArrowUp : ArrowDown} alt="arrow up" />
              {faq.title}
            </li>
            {showAnswer === index && <p>{faq.answer}</p>}
          </div>
        ))}
      </ul>
    </div>
  );
}

export default Faq;
