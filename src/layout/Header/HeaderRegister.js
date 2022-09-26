import "./Header.css";
import LogoCorto from "../../assets/WB_Logo.png";
import burgerImg from "../../assets/menu.svg";
import Button from "../../components/Button/Button";
import MenuRegister from "./MenuRegister";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const HeaderRegister = () => {
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
      <div className="header-button-container">
        <Button
          variant="secondary"
          onClick={() => {
            navigate("/login");
          }}
        >
          Iniciar Sesión
        </Button>
      </div>
      <div className="header-button-container mobile">
        <Link label="menu" to="" onClick={() => setMenuOpen(true)}>
          <img src={burgerImg} alt="menu" />
        </Link>
      </div>
      {/* se incluye render condicional para que muestre o no el menú según su estado */}
      {menuOpen ? <MenuRegister close={() => setMenuOpen(false)} /> : null}
    </header>
  );
};

export default HeaderRegister;
