import "./header.css";
import Logo from "../../assets/logo-pietro-2.png";
import UserIcon from "../../assets/user-icon.png";
import IconHamburger from "../../assets/hamburger.png";
import { useState } from "react";
import Menu from "../Menu/Menu";

function Header() {
  const [openMenu, setOpenMenu] = useState(false);

  function HandleClickOpenMenu() {
    setOpenMenu(!openMenu);
  }

  return (
    <div className="header" id="home">
      <img src={Logo} alt="Logo" className="logo" />
      <div>
        <img
          src={IconHamburger}
          alt="Menu"
          className="hamburger"
          onClick={() => HandleClickOpenMenu()}
        />
        {openMenu && <Menu HandleClickOpenMenu={HandleClickOpenMenu} />}
      </div>
      <div className="navbar">
        <ul>
          <li>
            <a href="#inicio">Início</a>
          </li>
          <li>
            <a href="#sobre">Sobre</a>
          </li>
          <li>
            <a href="#courses">Cursos</a>
          </li>
          <li>
            <a href="#servicos">Serviços</a>
          </li>
        </ul>
        <div className="access">
          <div className="login">
            <img src={UserIcon} alt="User Icon" />
            <button>FAZER LOGIN</button>
          </div>
          <div className="buy">
            <button>ASSINAR AGORA</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
