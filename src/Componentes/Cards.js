import React from 'react';
import FavOffNav from "../img/fav.webp";
import FavOn from "../img/favOn.webp";
import Compras from "../img/carritoCompras.webp";
import "./cards.css";
import Lupa from "../img/lupa.webp"
const Cards = ({ openModal,data,idFavorito,ingresarProductos,setProductoVendido}) => {
  
 
  return (
    <div className="tarjeta" key={data.id *  5}>
      <h4 className="titulo">{data.titulo}</h4>
        <img src={data.vendido ? data.imagenStock : data.imagen} alt="imagen" />
          <p>Talle {data.talle}</p>
          <div className="Descripcion">
            <p>{data.descripcion}</p>
          </div>
          <p>{data.color}</p>
          <p style={{fontSize:"1.5rem"}}>${data.precio}</p>
          <div className="navCard">
            <button className="btnCard" onClick={idFavorito}>{data.favorito ? <span title="Quitar producto de favoritos"><img src={FavOn} data-id={data.id} alt="Ico Home" /></span> : <span title="Ingresar producto a favoritos"><img src={FavOffNav} data-id={data.id} alt="Ico Home" /></span>}</button>
            <button className="btnCard" onClick={openModal}><span title="Agrandar imagen"><img src={Lupa} alt="Ico lupa" data-id={data.id} /></span></button>
            <button className="btnCard" onClick={ data.vendido ? () => {setProductoVendido(true)}: ingresarProductos }><span title="Agregar producto al carrito"><img src={Compras} alt="Ico Carrito de compras" data-id={data.id} /></span></button>
          </div>
    </div>
  )
}
export default Cards;