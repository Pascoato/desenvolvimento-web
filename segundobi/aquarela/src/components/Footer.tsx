import "../styles/footer.css";
import Logo from "../assets/logo.svg";
import IconInstagram from "../assets/insta.svg";
import IconFacebook from "../assets/face.svg";
import IconYoutube from "../assets/ytb.svg";

export default function Footer() {
  return (
    <footer id="footer">
      <div className="container">
        <div className="footer-brand">
          <img src={Logo} alt="Logo" />
          <div className="social-media">
            <a href="#">
              <img src={IconInstagram} alt="Instagram" />
            </a>
            <a href="#">
              <img src={IconFacebook} alt="Facebook" />
            </a>
            <a href="#">
              <img src={IconYoutube} alt="YouTube" />
            </a>
          </div>
        </div>

        <div className="footer-links">
          <nav>
            <p>Aquarela</p>
            <ul>
              <li>
                <a href="#">Nossa História</a>
              </li>
              <li>
                <a href="#">Trabalhe Conosco</a>
              </li>
              <li>
                <a href="#">Blog de Moda</a>
              </li>
            </ul>
          </nav>

          <nav>
            <p>Ajuda</p>
            <ul>
              <li>
                <a href="#">Guia de Medidas</a>
              </li>
              <li>
                <a href="#">Trocas e Devoluções</a>
              </li>
              <li>
                <a href="#">Política de Privacidade</a>
              </li>
            </ul>
          </nav>

          <nav>
            <p>Lojas</p>
            <ul>
              <li>
                <a href="#">Nova Aurora - Paraná</a>
              </li>
              <li>
                <a href="#">Cafelândia - Paraná</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="footer-copy">
        <p>© 2025 Aquarela 4 Estações. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
