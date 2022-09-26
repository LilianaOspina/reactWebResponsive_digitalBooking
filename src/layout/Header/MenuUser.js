import "./Header.css";
import facebook from "../Footer/assets/facebookLogin.svg";
import linkedin from "../Footer/assets/linkedinLogin.svg";
import twitter from "../Footer/assets/tweetLogin.svg";
import ig from "../Footer/assets/igLogin.svg";
import { Link } from "react-router-dom";
import { isAdmin } from "../../helpers/helpers";

const MenuUser = ({ nombre, apellido, close }) => {
  return (
    <>
      <div className="menu-container">
        <div className="menu-top">
          <div className="menu-close">
            {/* menú recibe como prop el método close. Si se hace clic en la X se cierra menú */}
            <Link to="" onClick={() => close()}>
              <span>X</span>
            </Link>
          </div>
          <div className="menu-title title-user">
            <div className="header-user-img">
              <div className="header-user-avatar Heading-2">
                {nombre[0]}
                {apellido[0]}
              </div>
            </div>
            <div className="header-user-text Heading-3">
              <span>Hola,</span>
              <span>
                {nombre} {apellido}
              </span>
            </div>
          </div>
        </div>
        <div className="menu-center">
          <div className="menu-sign-out">
            {isAdmin() ? (
              <Link
                label="administracion"
                to="/administracion"
                className="menu-admin-link"
              >
                Administración
              </Link>
            ) : <Link
            label="usuario"
            to="/misreservas"
            className="menu-usuario-link"
          >
            Mis reservas
          </Link>}
            <p className="Text-2">
              ¿Deseas{" "}
              <Link
                to="/login"
                onClick={() => {
                  sessionStorage.removeItem("nombre");
                  sessionStorage.removeItem("apellido");
                  sessionStorage.removeItem("email");
                  sessionStorage.removeItem("token");
                }}
              >
                <span>cerrar sesión</span>
              </Link>
              ?
            </p>
          </div>
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

export default MenuUser;
