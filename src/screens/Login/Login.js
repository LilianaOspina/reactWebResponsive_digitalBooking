import "../Registro/Registro.css";
// import '../../../App.css' // CSS General a toda la app
import Button from "../../components/Button/Button";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import HeaderLogin from "../../layout/Header/HeaderLogin";
import Footer from "../../layout/Footer/Footer";
import { login } from "../../server/server";
import { guardarCredenciales } from "../../helpers/helpers";
import Swal from "sweetalert2";

function Login() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const respuesta = await login(data.email, data.password);
      guardarCredenciales(respuesta);
      navigate(`/`);
    } catch (error) {
      Swal.fire(
        "Los datos ingresados no son correctos"
      );
    }
  };

  return (
    // eslint-disable-next-line react/self-closing-comp
    <>
      <HeaderLogin />
      <div className="Login">
        <h2 className="Heading-1">Iniciar Sesión</h2>
        <form onSubmit={handleSubmit}>
          <div className="ContainerMail">
            <label className="Text-2">
              {" "}
              Correo Electrónico
              <input
                type="email"
                name="email"
                id="inputEmail"
                className="InputMail"
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <div className="ContainerMail">
            <label className="Text-2">
              {" "}
              Contraseña
              <input
                type="password"
                name="password"
                id="inputPassword"
                className="InputMail"
                onChange={handleChange}
                required
              />
            </label>
          </div>

          <div className="ContainerMail">
            <Button> Ingresar </Button>
          </div>
          <p className="Text-2">
            ¿Aún no tenés cuenta? <Link to="/registro">Registrate</Link>
          </p>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default Login;
