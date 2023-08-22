import React from 'react'

export const ControlPresupuesto = ({presupuesto}) => {


const formatearCantidad  = (cantidad) => {
    return cantidad.toLocaleString("es-CL", {style:"currency", currency:"CLP"});
}


  return (
    <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
        <div>
            <p>Grafica Aqui</p>
        </div>


        <div className='contenido-presupuesto'>
            <p>
                <span>Presupuesto: </span> {formatearCantidad(presupuesto)}
            </p>

            <p>
                <span>Disponible: </span> {formatearCantidad(0)}
            </p>


            <p>
                <span>Gastado: </span> {formatearCantidad(0)}
            </p>


        </div>


    </div>
  )
}
