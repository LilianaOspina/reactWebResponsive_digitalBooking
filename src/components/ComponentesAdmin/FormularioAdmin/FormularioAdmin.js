import { useEffect, useState } from "react";
import { crearProducto } from "../../../server/server";
import Button from "../../Button/Button";
import MensajeError from "../../MensajeError/MensajeError";
import CargaAtributos from "../CargaAtributos/CargaAtributos";
import CargaImagenes from "../CargaImagenes/CargaImagenes";
import Datos from "../Datos/Datos";
import Politicas from "../Politicas/Politicas";
import { useNavigate } from "react-router-dom";
import "./FormularioAdmin.css";

const FormularioAdmin = () => {
  const navigate = useNavigate()
  const [formulario, setFormulario] = useState({
    nombre: "",
    titulo: "",
    descripcion: "",
    idCiudad: 0,
    idCategoria: 0,
    ubicacion: "",
    caracteristicas: [],
    imagenes: [],
    politicas: [],
  });
  const [showError, setShowError] = useState("");

  useEffect(() => setShowError(""), [formulario])

  const validarCamposObligatorios = () =>
    formulario.nombre !== "" &&
    formulario.descripcion !== "" &&
    formulario.idCategoria !== 0 &&
    formulario.idCiudad !== 0 &&
    formulario.ubicacion !== "" &&
    formulario.caracteristicas.length !== 0 &&
    formulario.imagenes.length !== 0 &&
    formulario.politicas.length === 3;

  const submitProducto = async () => {
    const obligatoriosOk = validarCamposObligatorios();
    if (obligatoriosOk) {
      try {
        const res = await crearProducto(formulario)
        console.log(res)
        navigate('/producto/confirmacionProp')
      } catch(e) {
        setShowError("Lamentablemente el producto no ha podido crearse. Por favor intente más tarde")
      }
    } else {
      setShowError("Todos los campos son obligatorios");
    }
  };
  return (
    <>
      <div className="formularioAdmin">
        <div className="formularioRow">
          <Datos
            onChange={(datosObj) => {
              setFormulario({ ...formulario, ...datosObj });
            }}
          />
        </div>
        <div className="formularioRow">
          <h2 className="Heading-2">Agregar atributos</h2>
          <CargaAtributos onChange={(caracteristicasObj) => {
              setFormulario({ ...formulario, caracteristicas: [...caracteristicasObj] });
            }}/>
        </div>
        <div className="formularioRow">
          <h2 className="Heading-2">Políticas del producto</h2>
          <Politicas
            onChange={(politicasObj) => {
              setFormulario({ ...formulario, ...politicasObj });
            }}
          />
        </div>
        <div className="formularioRow">
          <h2 className="Heading-2">Cargar imágenes</h2>
          <CargaImagenes
            onChange={(imagenesObj) => {
              setFormulario({ ...formulario, ...imagenesObj });
            }}
          />
        </div>
        <div className="crearButton">
          <Button onClick={submitProducto}>Crear</Button>
        </div>
        <MensajeError show={showError !== ""}>
          {showError}
        </MensajeError>
      </div>
    </>
  );
};
export default FormularioAdmin;
