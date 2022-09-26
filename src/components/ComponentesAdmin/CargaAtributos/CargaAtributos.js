import { useEffect, useState } from "react";
import { getAtributos } from "../../../server/server";
import "./CargaAtributos.css";

const CargaAtributos = ({ onChange }) => {
  const [atributos, setAtributos] = useState([]);
  const [seleccion, setSeleccion] = useState([]);

  const agregarSeleccion = (atr) => {
    setSeleccion((sel) => {
      const nuevaSeleccion = [...sel, atr];
      return nuevaSeleccion;
    });
  };

  const eliminarSeleccion = (atr) => {
    setSeleccion((sel) => {
      const nuevaSeleccion = [...sel];
      const idx = nuevaSeleccion.findIndex((el) => el.nombre === atr.nombre);
      nuevaSeleccion.splice(idx, 1);
      return nuevaSeleccion;
    });
  };

  useEffect(() => {
    onChange(seleccion);
  }, [seleccion]);

  useEffect(() => {
    getAtributos().then((respuesta) => setAtributos(respuesta));
  }, []);

  return (
    <div className="atributos__admin">
      {atributos.map((atr, idx) => (
        <div key={atr.nombre}>
          <label className="Text-label">
            <input
              type="checkbox"
              value={atr.nombre}
              className="atributos__input-admin"
              // checked={seleccion.find(s => s.nombre === atr.nombre)}

              onChange={(event) => {
                if (event.target.checked) {
                  agregarSeleccion(atr);
                } else {
                  eliminarSeleccion(atr);
                }
              }}
            />{" "}
            {/* <img src={atr.icono} alt="icono" /> */} {atr.nombre}
          </label>
        </div>
      ))}
    </div>
  );
};
export default CargaAtributos;
