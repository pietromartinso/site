import { useLocation } from "react-router-dom";
import "./menu.css";

function Menu({ HandleClickOpenMenu }) {
  const path = useLocation();
  return (
    <div className="menu" onMouseLeave={HandleClickOpenMenu}>
      {path.pathname === "/" ? (
        <ul>
          <a href="#inicio">
            <li>Início</li>
          </a>
          <a href="#sobre">
            <li>Sobre</li>
          </a>
          <a href="#courses">
            <li>Cursos</li>
          </a>
          {/* <a href="#servicos"><li>Serviços</li></a> */}
        </ul>
      ) : (
        <ul className="other-page">
          <li>
            <a href="/">Página inicial</a>
          </li>
        </ul>
      )}
    </div>
  );
}

export default Menu;
