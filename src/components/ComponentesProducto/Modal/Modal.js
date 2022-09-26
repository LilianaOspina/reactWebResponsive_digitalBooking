import React, {useState} from 'react';
import Carousel from "./Carousel";

const Modal = ({ show, onClose, imagenes}) => {

    if(!show){
      return null;
    }

    return (
  
        <div className="Modal">
          <div className="modal-background">
          </div>
          <div className="modal-content">
                <a onClick={onClose} className="BotonModal"> X </a>
                <Carousel>
                  {imagenes.map(imagen => <img src={imagen.url} alt={imagen.titulo}/>)}
                </Carousel>
            </div>
          </div>

  
    );
  }
  
  export default Modal;