import React,{ useState, useEffect} from 'react';
import Cards from "./Cards";
import Error from './Error';
import Lupa from './Lupa';
import Carrito from './Carrito';
import CheckCompra from './CheckCompra';
import Info from './Info';
import NoDisponible from './NoDisponible';
import Loader from '../Componentes/Loader';
import CheckCarrito from '../Componentes/CheckCarrito';
import Favoritos from "./Favoritos";
import './Main.css';
import './Loader.css';
import HomeFalse from "../img/homeFalse.webp";
import HomeTrue from "../img/homeTrue.webp";
import FavOn from "../img/favOn.webp";
import CarritoOf from '../img/carritoOf.webp';
import CarritoOn from '../img/carritoOn.webp';
import InfoOf from '../img/infoOf.webp';
import InfoOn from '../img/infoOn.webp';

const Main = () => {
  const [home, setHome] = useState(true)
  const [Fav, setFav] = useState(false)
  const [lupa, setLupa] = useState(false)
  const [carrito, setCarrito] = useState(false)

  const [db, setDb] = useState([])
  const [error, setError] = useState("")
  const [localS, setLocalS] = useState(localStorage.getItem("favoritosAppOff")) // ve si hay productos en localStorage 
  const [favoritos,setFavoritos] = useState(localS ? JSON.parse(localS) : []) // si hay los agrega al estado y si no crea un array vacio
  const [imgLupa, setImgLupa] = useState("");
  const [productos, setProductos] = useState([])
  const [total, setTotal] = useState(0)
  const [checkproducto, setCheckproducto] = useState(false)
  const [productoVendido, setProductoVendido] = useState(false)
  const [repetido, setRepetido] = useState(false)
  const [info, setInfo] = useState(false);
  const [loading, setLoading] = useState(false)

  //const url = "http://localhost:5000/ofertas"
  
  
  const url = "https://raw.githubusercontent.com/hernanveyret/ofertApp/main/src/Api/data.json"

 useEffect(() => {
   const dataFetch = async () => {    
    setLoading(true)
    try {
        const res = await fetch(url);        
        if(!res.ok){
          const errorData = {
            status:res.status || "00",
            statusText:res.statusText || "Error, id_Interno: no se pudo comunicar con la base de datos."
          }
          throw errorData;           
        }
        const data = await res.json()
          setDb(data)
          setLoading(false)
    }catch(err){
      setError(err)
      const message = `Error: ${err.status}, ${err.statusText}`
      console.log(message)
      setLoading(false)
    }
  }
  dataFetch()
  
  
 },[url,favoritos])

// Verifica si hay productos en favoritos, cambia el valor por defecto para mostrar la estrella en pantalla
favoritos.forEach(e => {
  db.forEach(a => {
    if(e.id === a.id){
      a.favorito = e.favorito
    }
  })  
})

 //Capturo el id del producto, lo guardo en una variable y se guarda dentro del estado
 const idFavorito = (e) => {
    const id = parseFloat(e.target.dataset.id)
    const filtro = db.filter(elemento => elemento.id === id)
    filtro[0].favorito = !filtro[0].favorito
      /* Si el valor del producto es falso, crea un nuevo array con todos los elementos diferentes al id seleccionado 
      y actualiza el estado con esos productos para eliminar al que quedo como false. */
    if(filtro[0].favorito === false) {
      const deleteFavorito = favoritos.filter(e => e.id !== filtro[0].id)
      setFavoritos(deleteFavorito)
    }else {
      setFavoritos([...favoritos,filtro[0]])
    }   
 }

 // si estas en la pestaña de favoritos y eliminas el ultimo pasa a la pestaña de home
 useEffect(() => {
  localStorage.setItem("favoritosAppOff",JSON.stringify(favoritos))
  if(favoritos.length === 0){
    setFav(false)
    setHome(true)
  }
 },[favoritos])

 // Abre ventana modal con la imagen del producto
 const openModal = (e) => {
  let id = parseFloat(e.target.dataset.id);
  const productoLupa = db.filter(e => e.id === id)
  let img = productoLupa[0].imagen
  setImgLupa(img)
  setLupa(true);
 }

// cierra la venta modal
 const closeModal = () => {
  setLupa(false);
 }
 const cerrarVendido = () => {
  setProductoVendido(false); }

  //Ingresa el producto seleccionado al carrito
 const ingresarProductos = (e) => {
  const id = parseFloat(e.target.dataset.id);  
  const productoCarrito = db.filter(e => e.id === id);
  for ( let i = 0; i < productos.length; i++){
    if(productos[i].id === id){
      setRepetido(true)
      return;
    }
  }
    setProductos([...productos,productoCarrito[0]]);
    setCheckproducto(true);  
 }
  //Borra el producto del carrito de compras
 const borraProducto = (e) => {
  let id = parseFloat(e.target.dataset.id);
  const isDelete = productos.filter(e => e.id !== id)
  setProductos(isDelete)
 }

  // suma el precio de los productos  
 useEffect(() => { 
  const $total = productos.reduce((e,i) => e + i.precio,0)
  setTotal($total)
  
 },[productos])
 
 return (
    <>
      <header>
        <h1 className="tituloApp" id="cabecera">OfertApp</h1>
      </header>
      <nav>
        <button className="btnNav" onClick={() => {setHome(true); setFav(false); setCarrito(false);setInfo(false)}} ><span title="Pagina principal">{home ? <img src={HomeTrue} alt="Ico Home true" />: <img src={HomeFalse} alt="Ico Home False" />}</span></button>
        <button className="btnNav" onClick={() => {setFav(true); setHome(false); setCarrito(false);setInfo(false)}} ><span title="Tus favoritos"><img src={FavOn} alt="Ico Home" />{favoritos.length}</span></button>
        <button style={{color:"red"}} className="btnNav" onClick={() => {setCarrito(true); setHome(false); setFav(false)}}><span title="Tu Pedido">{ carrito ? <img src={CarritoOn} alt="icono del carrito"/> : <img src={CarritoOf} alt="icono del carrito"/>}{productos.length}</span></button>
        <button className="btnNav" onClick={() => {setInfo(true)}} ><span title="Informacion">{info ? <img src={InfoOn} alt="Ico Info" />:<img src={InfoOf} alt="Ico Info" />}</span></button>
      </nav>
      <div className="loading">{ loading && <Loader /> }</div>
      <section id="main">
        
        { carrito && <Carrito productos={productos} setProductos={setProductos} cantPares={productos.length} total={total} borraProducto={borraProducto} setCarrito={setCarrito} setHome={setHome}/>}
        { lupa && <Lupa closeModal={closeModal} imgLupa={imgLupa}/> }
        { home && db.map(e => (<Cards data={e} key={e.id} idFavorito={idFavorito} openModal={openModal} ingresarProductos={ingresarProductos} setProductoVendido={setProductoVendido}/>)) }
        { Fav &&  favoritos.map(e => (<Cards data={e} key={e.id} idFavorito={idFavorito} openModal={openModal} ingresarProductos={ingresarProductos} setProductoVendido={setProductoVendido}/>)) } 
        { error && <Error msj={error} /> }
        { checkproducto && <CheckCompra setCheckproducto={setCheckproducto}/> }
        { info && <Info setInfo={setInfo}/> }
        { productoVendido && <NoDisponible cerrarVendido={cerrarVendido} />}
        { repetido && <CheckCarrito setRepetido={setRepetido}/>}
      </section>
      <a href="#cabecera" className="flecha">Flecha</a>
      <a href="https://wa.me/541134025499" target="_blanck" className="whatsAap"><span title="Envianos tu consulta">WhatAaap</span></a>
      <footer>
        <p>OfertApp - Version 1.2 - Hernán Luis Veyret - 2023</p>
      </footer>
    </>
  )
} // 🏠 ⭐🗑️
export default Main;