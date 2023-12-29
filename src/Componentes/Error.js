import React from 'react';
import './error.css';

const Error = ({msj}) => {
    console.log(msj)
    return (
        <div classNAme="contenedor">
            <h2 className="tituloError">Error: {msj.status}</h2>
            <p className="parrafoError">{msj.statusText}</p>
        </div>    
    )
};

export default Error;