import React from "react";
import Cards from "./Cards";
import "./cards.css";

const Favoritos = ({favoritos, idFavorito, openModal, ingresarProductos,setProductoVendido}) => {
  console.log(favoritos)
  return (
    <>
      <div className="">
        {favoritos > 0 ? <h2 className="tituloPedidos">Tus Favoritos</h2> : <h2 className="tituloCarrito">No Tienes Favoritos</h2> }
      </div>
      { favoritos.map(e => (<Cards data={favoritos} key={e.id} idFavorito={idFavorito} openModal={openModal} ingresarProductos={ingresarProductos} setProductoVendido={setProductoVendido}/>))}
    </>
  )
}
export default Favoritos;