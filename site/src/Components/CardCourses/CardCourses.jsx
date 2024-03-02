import "./card-courses.css";
import Logica from "../../assets/codigo.png"

function CardCourses() {
  return (
    <div className="card-courses">
      <container>
        <div className="logo-course">
            <img src={Logica} alt="Icon Logic" />
        </div>
        <div className="infos">
          <div className="title">
            <h3>Lógica de programação em pseudo código</h3>
            <p>Inídio imediato!</p>
          </div>
          <div className="summary"></div>
        </div>
        <div className="see-details">
            <button>{`VER DETALHES`}</button>
        </div>
      </container>
    </div>
  );
}

export default CardCourses;
