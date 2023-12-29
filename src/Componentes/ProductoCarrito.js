import React from 'react';
const ProductoCarrito = ({data,borraProducto}) => {

  return (
    <div className="cadaProducto" key={data.id}>
      <div className="imgProducto"><img src={data.imagen} alt="Imagen producto" /></div>
      <div className="descriptcionProducto">
        {data.titulo} / talle: {data.talle} / {data.color} / ${data.precio}
      </div>
      <div className="accion">
        <button className="btnBorrar" onClick={borraProducto} data-id={data.id}></button>
      </div>
    </div>
    )
}
export default ProductoCarrito;