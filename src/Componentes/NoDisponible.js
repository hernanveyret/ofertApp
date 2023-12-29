import React from "react";
import Sinstock from '../img/sinstock.webp'
const NoDisponible = ({cerrarVendido}) => {

  return (
    <div className="contenedorCheck">
      <div className="imgGif">
        <img src={Sinstock} alt="Gif animado check" />
      </div>
      <p className="parrafo">Producto No Disponible</p>
      <button className="btnContinuar" onClick={cerrarVendido}>Continuar</button>
    </div>
  )
}

export default NoDisponible;