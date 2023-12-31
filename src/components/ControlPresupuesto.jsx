import { useEffect, useState } from "react";

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

import "react-circular-progressbar/dist/styles.css"

export const ControlPresupuesto = ({gastos,presupuesto, setGastos, setPresupuesto, setisValidPresupuesto}) => {

    const [porcentaje, setPorcentaje] = useState(0)

    const [disponible, setDisponible] = useState(0)
    const [gastado, setGastado] = useState(0)


    useEffect(() => {
     const totalGastado = gastos.reduce((total, gasto) => gasto.cantidad + total, 0)

    const totalDisponible = presupuesto - totalGastado

    //Calcular el porcentaje gastado

        const nuevoPorcentaje = (((presupuesto - totalDisponible) / presupuesto) * 100).toFixed(2)


        

    setDisponible(totalDisponible)
     setGastado(totalGastado)


        setTimeout(() => {

            setPorcentaje(nuevoPorcentaje)
            
        }, 1000);




    }, [gastos])
    

const formatearCantidad  = (cantidad) => {
    return cantidad.toLocaleString("es-CL", {style:"currency", currency:"CLP"});
}


const handleResetApp = () => {
    const result = confirm('¿Deseas reiniciar presupuesto y gastos?')

    if (result) {
        setGastos([])
        setPresupuesto(0)
        setisValidPresupuesto(false)
        
    }
}



  return (
    <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
        <div>
            <p>
                <CircularProgressbar value={porcentaje} styles={buildStyles({
                    pathColor: porcentaje > 100 ? '#DC2626' : '#3B82F6',
                    trailColor: '#F5F5F5',
                    textColor: porcentaje > 100 ? '#DC2626' : '#3B82F6',
                })}
                
                text={`${porcentaje}%`}
                />
            </p>
        </div>


        <div className='contenido-presupuesto'>

            <button className="reset-app" type="button" onClick={handleResetApp}>
                Resetear App
            </button>

            <p>
                <span>Presupuesto: </span> {formatearCantidad(presupuesto)}
            </p>

            <p className={`${disponible < 0 ? 'negativo' : ''}`}>
                <span>Disponible: </span> {formatearCantidad(disponible)}
            </p>


            <p>
                <span>Gastado: </span> {formatearCantidad(gastado)}
            </p>


        </div>


    </div>
  )
}
