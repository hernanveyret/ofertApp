import React, { useState} from 'react';
import ProductoCarrito from "./ProductoCarrito";
import "./carrito.css"

const Carrito = ({productos,setProductos,cantPares,total,borraProducto, setCarrito,setHome}) => {
  const [nombre, setNombre] = useState("");

  const handleNombre = (e) => {
    setNombre(e)
  }
  
  const enviarPedido = () => {
    const tel = `541134025499`;
    let msg =`Mi pedido:\n`;
        msg += `Me llamo ${nombre}\n`
    productos.forEach(e => {
       msg += `id:${e.id}/${e.titulo} / Talle: ${e.talle} / ${e.color}\n `       
    })
        msg += `Total: $${total}`

    const urlTel = `https://api.whatsapp.com/send?phone=${tel}&text=${encodeURIComponent(msg)}`;
    window.open(urlTel,'_blank');
    setProductos([])
    setCarrito(false)
    setHome(true)
  }

  return (
    <div className="contenedorCarrito">
      <h1 className="tituloPedidos">Tu pedido</h1>
      { productos && productos.map(e => <ProductoCarrito key={e.id}data={e} borraProducto={borraProducto}/> )}
      <div className="navTotal">
        <div className="cantProductos">
          <p>Cant P.</p>
          <p>{cantPares}</p>
        </div>
        <div className="botonera">
          <button onClick={enviarPedido}>ENVIAR PEDIDO</button>
          <input type="text" name="nombre" placeholder="Nombre" required className="inputName" onChange={(e) => {handleNombre(e.target.value)}}/>
        </div>
        <div className="importe">
          <p>TOTAL</p>
          <p>$ {total}</p>
        </div>
      </div>
    </div>
  )
}
export default Carrito;