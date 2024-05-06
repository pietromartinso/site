import { useState } from "react";
import IconHamburger from "../../assets/hamburger.png";
import Logo from "../../assets/logo-pietro-2.png";
import UserIcon from "../../assets/user-icon.png";
import Menu from "./Menu/Menu";
import "./header.css";
import { useLocation } from "react-router-dom";

function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const path = useLocation();

  function HandleClickOpenMenu() {
    setOpenMenu(!openMenu);
  }

  return (
    <div className="header" id="home">
      <div className="container">
        <a href="http://localhost:3000/">
          <img src={Logo} alt="Logo" className="logo" />
        </a>
        <div className="menu-hamburg">
          <img
            src={IconHamburger}
            alt="Menu"
            className="hamburger"
            onClick={() => HandleClickOpenMenu()}
          />
          {openMenu && <Menu HandleClickOpenMenu={HandleClickOpenMenu} />}
        </div>
        <div className="navbar">
          {path.pathname === "/" ? (
            <ul>
              <>
                <li>
                  <a href="#inicio">Início</a>
                </li>
                <li>
                  <a href="#sobre">Sobre</a>
                </li>
                <li>
                  <a href="#courses">Cursos</a>
                </li>
                {/* <li>
                      <a href="#servicos">Serviços</a>
                    </li> */}
              </>
            </ul>
          ) : (
            <ul className="other-page">
              <li>
                <a href="/">Página inicial</a>
              </li>
            </ul>
          )}
          <div className="access">
            <div className="login">
              <a
                href="https://profpietrocursos.membertizze.com.br/login"
                target="Blanck_"
              >
                <img src={UserIcon} alt="User Icon" />
                <button>FAZER LOGIN</button>
              </a>
            </div>
            {/* <div className="buy">
            <button>ASSINAR AGORA</button>
          </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
