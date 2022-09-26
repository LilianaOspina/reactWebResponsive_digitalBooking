import "./Datos.css";
import "./SelectorCiudad.css";
import "./SelectorCategoria.css"
import Select from "react-select";
import { useEffect, useState } from "react";
import { getCategories, getCiudades } from "../../../server/server";

const Datos = ({ onChange }) => {
  const [ubicacion, setUbicacion] = useState([]);
  const [categoria, setCategoria] = useState([]);
  const [datos, setDatos] = useState({
    nombre: "",
    descripcion: "",
    idCiudad: 0,
    idCategoria: 0,
    ubicacion: "",
  })

  useEffect(() => {
    onChange(datos)
  }, [datos])

  useEffect(() => {
    getCiudades().then((result) => setUbicacion(result));
  }, []);

  useEffect(() => {
    getCategories().then((result) => setCategoria(result));
  }, []);

  const ciudadOptions = ubicacion.map((el) => {
    return {
      value: el.id,
      label: el.nombre + ", " + el.pais,
      country: el.pais,
      city: el.nombre,
    };
  });

  const categoriaOptions = categoria.map((el) => {
    return {
      value: el.id,
      label: el.titulo
      
    };
  });

  const CiudadCustomOption = ({ innerProps, isDisabled, data, ...more }) => {
    return (
      <div {...innerProps} className="ciudad__option">
        <div>
          <span>
            {data.city}, {data.country}
          </span>
        </div>
      </div>
    );
  };

  const CategoriaCustomOption = ({ innerProps, isDisabled, data, ...more }) => {
    return (
      <div {...innerProps} className="categoria__option">
        <div>
          <span>
            {data.label}
          </span>
        </div>
      </div>
    );
  };


  return (
    <>
      <div className="form__admin">
        <div>
          <label htmlFor="nombre" className="Text-2">
            Nombre de la propiedad
          </label>
          <input
            type="text"
            className="form__input-admin"
            name="nombre"
            id="nombre"
            placeholder="Ej. Hotel Hermitage"
            onChange={event => setDatos({...datos, nombre: event.target.value })}
          />
        </div>
        <div>
          <label htmlFor="categoria" className="Text-2">
            Categoría
          </label>
          <Select
            className="selectorCategoria"
            classNamePrefix="selectorCategoria"
            options={categoriaOptions}
            placeholder="Categoría"
            components={{ Option: CategoriaCustomOption }}
            onChange={option => setDatos({...datos, idCategoria: option.value })}
          />
        
        </div>
        <div>
          <label htmlFor="direccion" className="Text-2">
            Dirección
          </label>
          <input
            type="text"
            id="direccion"
            name="direccion"
            placeholder="Ej. Av. Colón 164"
            className="form__input-admin"
            onChange={event => setDatos({...datos, ubicacion: event.target.value })}
          />
        </div>
        <div>
          <label className="Text-2">Ciudad</label>
          <Select
            className="selectorCiudad"
            classNamePrefix="selectorCiudad"
            options={ciudadOptions}
            placeholder="Ciudad"
            components={{ Option: CiudadCustomOption }}
            onChange={option => setDatos({...datos, idCiudad: option.value })}
          />
        </div>
        <div className="textArea">
          <label htmlFor="textArea" className="Text-2">
            Descripción
          </label>
          <textarea
            name="textArea"
            rows="10"
            cols="50"
            placeholder="Escribir aquí"
            onChange={event => setDatos({...datos, descripcion: event.target.value })}
          >
          </textarea>
        </div>
      </div>
    </>
  );
};
export default Datos;
