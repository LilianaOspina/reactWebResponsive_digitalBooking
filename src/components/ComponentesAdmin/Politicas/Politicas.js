import { useEffect, useState } from "react";
import "./Politicas.css";

const Politicas = ({ onChange }) => {
  const [datos, setDatos] = useState([null, null, null]);

  useEffect(() => {
    onChange({ politicas: datos.filter(Boolean) });
  }, [datos]);

  return (
    <>
      <div className="politicas__admin">
        <div className="textArea-container">
          <h3 className="Heading-3">Normas de la casa</h3>
          <label htmlFor="textArea" className="Text-2">
            Descripción
          </label>
          <textarea
            name="textArea"
            rows="10"
            cols="50"
            placeholder="Escribir aquí"
            onChange={(event) => {
              const newDatos = [...datos];
              newDatos[0] = {
                nombre: "Normas de la casa",
                descripcion: event.target.value,
              };
              setDatos(newDatos);
            }}
          ></textarea>
        </div>
        <div className="textArea-container textArea-container2">
          <h3 className="Heading-3">Salud y seguridad</h3>
          <label htmlFor="textArea" className="Text-2">
            Descripción
          </label>
          <textarea
            name="textArea"
            rows="10"
            cols="50"
            placeholder="Escribir aquí"
            onChange={(event) => {
              const newDatos = [...datos];
              newDatos[1] = {
                nombre: "Salud y Seguridad",
                descripcion: event.target.value,
              };
              setDatos(newDatos);
            }}
          ></textarea>
        </div>
        <div className="textArea-container textArea-container3">
          <h3 className="Heading-3">Política de cancelación</h3>
          <label htmlFor="textArea" className="Text-2">
            Descripción
          </label>
          <textarea
            name="textArea"
            rows="10"
            cols="50"
            placeholder="Escribir aquí"
            onChange={(event) => {
              const newDatos = [...datos];
              newDatos[2] = {
                nombre: "Política de cancelación",
                descripcion: event.target.value,
              };
              setDatos(newDatos);
            }}
          ></textarea>
        </div>
      </div>
    </>
  );
};
export default Politicas;
