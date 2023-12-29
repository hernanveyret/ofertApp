import React from 'react';
import CheckAnimado from '../img/check.gif';
import './checkCompra.css';
const CheckCompra = ({setCheckproducto}) => {

  const cerrarCheck = () => {
    setCheckproducto(false)
  }
  return (
    <div className="contenedorCheck">
      <div className="imgGif">
        <img src={CheckAnimado} alt="Gif animado check" />
      </div>
      <p className="parrafo">Producto Agregado</p>
      <button className="btnContinuar" onClick={cerrarCheck}>Continuar</button>
    </div> 
  )
};
export default CheckCompra;
