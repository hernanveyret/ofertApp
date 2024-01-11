import React from "react";
import Cards from "./Cards";
import "./cards.css";
import "./favoritos.css"

const Favoritos = ({favoritos, idFavorito, openModal, ingresarProductos,setProductoVendido}) => {
  
  return (
    <div>
      <div className="">
        {favoritos.length > 0 ? <h2 className="tituloPedidos">Tus Favoritos</h2> : <h2 className="tituloCarrito">No Tienes Favoritos</h2> }
      </div>
      <div className="contenedorFavoritos">
      { favoritos.map(e => (<Cards data={e} key={e.id} idFavorito={idFavorito} openModal={openModal} ingresarProductos={ingresarProductos} setProductoVendido={setProductoVendido}/>))}
      </div>
    </div>
  )
}
export default Favoritos;