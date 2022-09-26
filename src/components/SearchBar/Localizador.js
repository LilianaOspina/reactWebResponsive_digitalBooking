import "./Localizador.css";
import "./SearchBar.css";
import React, { useEffect, useState } from "react";
import localizador from "../../assets/Localizador.svg";
import Select from "react-select";
import { getCiudades } from "../../server/server";

const Localizador = ({onChange}) => {
  const [ubicacion, setUbicacion] = useState([]);

  useEffect(() => {
    getCiudades().then((result) => setUbicacion(result));
  }, []);

  const respuestaMap = ubicacion.map((el) => {
    return {
      value: el.id,
      label: el.nombre + ", " + el.pais,
      country: el.pais,
      city: el.nombre,
    };
  });

  const CustomOption = ({ innerProps, isDisabled, data, ...more }) => {
    return (
      <div {...innerProps} className="localizador__option">
        <div>
          <span>{data.city}</span>
          <span>{data.country}</span>
        </div>
      </div>
    );
  };

  return (
    <div className="localizador-container">
      <img alt="" src={localizador}></img>
      <Select
        className="localizador"
        classNamePrefix="localizador"
        options={respuestaMap}
        placeholder="¿A dónde vamos?"
        components={{ Option: CustomOption }}
        onChange= {(options) => onChange(options.value)}
      />
    </div>
  );
};

export default Localizador;
