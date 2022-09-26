import "./Header.css";
import LogoCorto from "../../assets/WB_Logo.png";
import burgerImg from "../../assets/menu.svg";
import MenuUser from "./MenuUser";
import { useState } from "react";
import { isAdmin } from "../../helpers/helpers";

import { Link, useNavigate } from "react-router-dom";

const HeaderUser = ({ nombre, apellido }) => {
  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header>
      <div className="header-logo-container">
        <Link label="home" to="/">
          <img src={LogoCorto} alt="logo" />
        </Link>
        <p>Sentite como en tu hogar</p>
      </div>
      <div className="header-user-container">
        <div className="header-user-info">
          {isAdmin() ? (
            <Link
              label="administracion"
              to="/administracion"
              className="admin-link"
            >
              Administración
            </Link>
          ) : <Link
          label="usuario"
          to="/misreservas"
          className="usuario-link"
        >
          Mis reservas
        </Link>}
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
        <Link
          label="home"
          to="/login"
          onClick={() => {
            sessionStorage.removeItem("nombre");
            sessionStorage.removeItem("apellido");
            sessionStorage.removeItem("email");
            sessionStorage.removeItem("token");
            navigate("/login");
          }}
          className="Heading-4"
          style={{ cursor: "pointer" }}
        >
          Cerrar sesión
        </Link>
      </div>
      <div className="header-user-container mobile">
        <Link label="menu" to="" onClick={() => setMenuOpen(true)}>
          <img src={burgerImg} alt="menu" />
        </Link>
      </div>
      {/* se incluye render condicional para que muestre o no el menú según su estado */}
      {menuOpen ? (
        <MenuUser
          nombre={nombre}
          apellido={apellido}
          close={() => setMenuOpen(false)}
        />
      ) : null}
    </header>
  );
};

export default HeaderUser;
