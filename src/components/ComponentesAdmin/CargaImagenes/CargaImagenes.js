import Button from "../../Button/Button";
import "./CargaImagenes.css";
import React, { useEffect, useState } from "react";

const CargaImagenes = ({ onChange }) => {
  const [imgUrls, setImgUrls] = useState([""]);

  useEffect(() => {
    onChange({ imagenes: imgUrls.filter(Boolean).map(url => ({ titulo: "", url })) });
  }, [imgUrls]);

  return (
    <>
      {imgUrls.map((el, idx) => {
        const isLast = idx === imgUrls.length - 1;
        return (
          <div className="imagenes__admin" key={idx}>
            <div className="imagenes-div">
              <input
                type="text" 
                className="imagenes__input-admin"
                name="nombre"
                placeholder="Insertar https://"
                value={el}
                readOnly={!isLast}
                onChange={(event) => {
                  const newValue = [...imgUrls];
                  newValue[idx] = event.target.value;
                  setImgUrls(newValue);
                }}
              />
            </div>
            <div
              className={`imagenes-button ${!isLast ? "borrable" : ""} ${
                el === "" ? "btn-disable" : ""
              }`}
            >
              <Button
                onClick={() => {
                  if (el !== "") {
                    if (isLast) {
                      setImgUrls([...imgUrls, ""]);
                    } else {
                      const newValue = [...imgUrls];
                      newValue.splice(idx, 1);
                      setImgUrls(newValue);
                    }
                  }
                }}
              >
                {isLast ? "+" : "x"}
              </Button>
            </div>
          </div>
        );
      })}
    </>
  );
};
export default CargaImagenes;
