import React from 'react';
import CheckAnimado from '../img/checkproducto.webp';
import './checkCompra.css';
const CheckCarrito = ({setRepetido}) => {

  const cerrarCheck = () => {
    setRepetido(false)
  }
  return (
    <div className="contenedorCheck">
      <div className="imgGif">
        <img src={CheckAnimado} alt="Gif animado check" />
      </div>
      <p className="parrafo">Producto ya Ingresado</p>
      <button className="btnContinuar" onClick={cerrarCheck}>Continuar</button>
    </div> 
  )
};
export default CheckCarrito;