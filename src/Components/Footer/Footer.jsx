import { Link } from "react-router-dom";
import Facebook from "../../assets/facebook.png";
import Instagram from "../../assets/instagram.png";
import Linkedin from "../../assets/linkedin.png";
import YouTube from "../../assets/youtube.png";
import "./footer.css";

function Footer() {
  return (
    <div className="footer" id="contato">
      <div className="top">
        <div className="contact">
          <p>contato@profpietro.com</p>
          <p>Maringá - Paraná Brasil</p>
        </div>
        <div className="icons">
          <div className="youtube">
            <a
              href="https://www.youtube.com/@profpietromartins"
              target="blank_"
            >
              <img src={YouTube} alt="YouTube" />
            </a>
          </div>
          <div className="linkedin">
            <a
              href="https://www.linkedin.com/in/profpietromartins/"
              target="blank_"
            >
              <img src={Linkedin} alt="Linkedin" />
            </a>
          </div>
          <div className="instagram">
            <a
              href="https://www.instagram.com/profpietromartins?igsh=OTFwZWV0bTVpNGVj"
              target="blank_"
            >
              <img src={Instagram} alt="Instagram" />
            </a>
          </div>
          <div className="facebook">
            <a
              href="https://pt-br.facebook.com/profpietromartins"
              target="blank_"
            >
              <img src={Facebook} alt="Facebook" />
            </a>
          </div>
        </div>
      </div>
      <div className="bottom">
        <Link to="/policies">Política de privacidade</Link>
        <p>Copyright © 2024 Prof. Pietro Martins</p>
        <a href="#inicio">Voltar ao topo ▲</a>
      </div>
    </div>
  );
}

export default Footer;
