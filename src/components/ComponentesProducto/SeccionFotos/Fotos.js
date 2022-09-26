import { ReactComponent as Share } from "../../../assets/Icons/Share.svg";
import { ReactComponent as Heart } from "../../../assets/Icons/Heart.svg";
import ImgNotFound from "../../../assets/image-not-found.png";
import Modal from "../Modal/Modal.js";
import React, { useState } from "react";
import Carousel from "../CarouselMobile/Carousel";

function Fotos({ data }) {
  const [show, setShow] = useState(false);
  const imgUrlPrincipal = data.imagenes[0].url || ImgNotFound;
  // hasta 4 imágenes secundarias
  const masImagenes = data.imagenes.slice(1, 5);
  return (
    <>
      <Modal show={show} onClose={() => setShow(false)} imagenes={data.imagenes} />
      <div className="Botones">
        <Share />
        <Heart style={{ marginLeft: "15px" }} />
      </div>
      <Carousel>
          
            {data.imagenes.map(imagen => <img src={imagen.url} alt={imagen.titulo}/>)}
      </Carousel>
      <div className="Fotos">
            <div className="FotoPrincipal">
              <img src={imgUrlPrincipal} alt="Imágen principal" />
            </div>
            <div className="FotosSecundarias HideMobile">
              {masImagenes.map((imagen) => (
                <img src={imagen.url} alt={imagen.titulo} />
              ))}
              <a className="VerMas" onClick={() => setShow(true)} id="myBtn">Ver más</a>
            </div>
      </div>
    </>
  );
}

export default Fotos;
