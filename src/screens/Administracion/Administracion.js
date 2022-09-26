import Button from "../../components/Button/Button";
import "./Administracion.css";
import { useNavigate } from "react-router-dom";
import Header from "../../layout/Header/Header";
import Footer from "../../layout/Footer/Footer";
import Body from "../../layout/Body/Body";
import Titulo from "../../components/ComponentesAdmin/Titulo/Titulo";
import FormularioAdmin from "../../components/ComponentesAdmin/FormularioAdmin/FormularioAdmin";

const Administracion = () => {
  return (
    <>
      <Header />
      <Body>
        <Titulo />
        <div className="formulario-container">
          <h1 className="Heading-1">Crear Propiedad</h1>
          <div className="formularioAdmin-container">
            <FormularioAdmin />
          </div>
        </div>
      </Body>
      <Footer />
    </>
  );
};
export default Administracion;
