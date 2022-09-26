import "./Header.css";
import LogoCorto from "../../assets/WB_Logo.png";
import burgerImg from "../../assets/menu.svg";
import Menu from "./Menu";
import Button from "../../components/Button/Button";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import HeaderUser from "./HeaderUser";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();

  const credenciales = window.sessionStorage.getItem("email");
  const nombre = window.sessionStorage.getItem("nombre");
  const apellido = window.sessionStorage.getItem("apellido");

  return (
    <>
      {credenciales === null ? (
        <header>
          <div className="header-logo-container">
            <Link label="home" to="/">
              <img src={LogoCorto} alt="logo" />
            </Link>
            <p>Sentite como en tu hogar</p>
          </div>
          <div className="header-button-container">
            <Button
              variant="secondary"
              onClick={() => {
                navigate("/registro");
              }}
            >
              Crear cuenta
            </Button>
            <Button
              variant="secondary"
              onClick={() => {
                navigate("/login");
              }}
            >
              Iniciar sesión
            </Button>
          </div>
          <div className="header-button-container mobile">
            <Link label="menu" to="" onClick={() => setMenuOpen(true)}>
              <img src={burgerImg} alt="menu" />
            </Link>
          </div>
          {/* se incluye render condicional para que muestre o no el menú según su estado */}
          {menuOpen ? <Menu close={() => setMenuOpen(false)} /> : null}
        </header>
      ) : (
        <HeaderUser nombre={nombre} apellido={apellido} />
      )}
    </>
  );
};

export default Header;
