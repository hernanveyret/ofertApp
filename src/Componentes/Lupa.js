import React from 'react';
import './lupa.css';

const Lupa = ({closeModal,imgLupa}) => {
  return (
    <div className="contenedorLupa">
      <div className="contenedor">
       <button className="btnCerrar" onClick={closeModal}>❌</button>
       <div className="contenedorImg">
            <img src={imgLupa}    alt="Imagen del producto" />
            </div>
      </div>
   </div>
 )
};

export default Lupa;