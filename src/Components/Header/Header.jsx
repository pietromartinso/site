import "./header.css";
import Logo from "../../assets/logo-pietro.png";
import UserIcon from "../../assets/user-icon.png";

function Header() {
  return (
    <div className="header">
      <img src={Logo} alt="Logo" />
      <div className="navbar">
        <ul>
          <li>
            <a href="#">Início</a>
          </li>
          <li>
            <a href="#">Apresentação</a>
          </li>
          <li>
            <a href="#">Dados</a>
          </li>
          <li>
            <a href="#">Sobre</a>
          </li>
          <li>
            <a href="#">Depoimentos</a>
          </li>
          <li>
            <a href="#">FAQ</a>
          </li>
          <li>
            <a href="#">Contato</a>
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
