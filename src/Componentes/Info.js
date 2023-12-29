import React from 'react';
import './info.css';

const Info = ({setInfo}) => {
  return (
    <div className="contenedorInfo">
      <div className="placaInfo">
        <h1>info</h1>
        <p>Hola, mi nombre es Hernán.</p>
        <p>Los articulos que publique son saldos que quedaron.</p>
        <p>Todo nuevo, hay algunos que tienen detalles por estar en vidriera</p>
        <p>esos articulos en el detalle se especifica.</p>
        <p>Podes poner en el carrito lo que quieras, apretas el boton de enviar</p>
        <p>y me llega un mensage directo al WhatsApp, arreglamo si lo pasas</p>
        <p>a buscar o te lo llevo, una vez que vez la mercaderia y estas conforme</p>
        <p>abonas, podes hacerlo en efectivo, transferencia por Mercado Pago o</p>
        <p>transferecia por Cuenta DNI</p>
        <p>Cualquier otra consulta, abajo a la derecha tenes el icono de WhatsApp para consultar.</p>
        <p>Gracias...</p>

        <button onClick={() => {setInfo(false)}} className="btn-Continuar">CERRAR</button>
      </div>
    </div>
  )
};
export default Info;