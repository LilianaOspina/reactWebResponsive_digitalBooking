import "./Header.css";
import facebook from "../Footer/assets/facebookLogin.svg";
import linkedin from "../Footer/assets/linkedinLogin.svg";
import twitter from "../Footer/assets/tweetLogin.svg";
import ig from "../Footer/assets/igLogin.svg";
import { Link } from "react-router-dom";

const Menu = (props) => {
  return (
    <>
      <div className="menu-container">
        <div className="menu-top">
          <div className="menu-close">
            {/* menú recibe como prop el método close. Si se hace clic en la X se cierra menú */}
            <Link to="" onClick={() => props.close()}>
              <span>X</span>
            </Link>
          </div>
          <div className="menu-title">
            <span>Menú</span>
          </div>
        </div>
        <div className="menu-center">
          <ul>
            <li>
              <Link label="crear cuenta" to="/registro" className="Heading-3">
                Crear cuenta
              </Link>
            </li>
            <li>
              <Link label="crear cuenta" to="/login" className="Heading-3">
                Iniciar sesión
              </Link>
            </li>
          </ul>
        </div>
        <div className="menu-bottom">
          <img src={facebook} alt="facebook" />
          <img src={linkedin} alt="linkedin" />
          <img src={twitter} alt="twitter" />
          <img src={ig} alt="instagram" />
        </div>
      </div>
    </>
  );
};

export default Menu;
