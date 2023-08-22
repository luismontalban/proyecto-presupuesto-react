import { useState } from "react";
import { Mensaje } from "./Mensaje";


export const NuevoPresupuesto = ({presupuesto, setPresupuesto, setisValidPresupuesto}) => {

  const [mensaje, setMensaje] = useState('')


  const handlePresupuesto = (e) => {
      e.preventDefault();

      if (!presupuesto || presupuesto < 0) {
        setMensaje('No es un presupuesto valido')  

        return
      }

      setMensaje('')
      setisValidPresupuesto(true)



  }


  return (
    <div className="contenedor-presupuesto contenedor sombra">



      <form onSubmit={handlePresupuesto} className="formulario">

        <div className="campo">
          <label htmlFor="presupuesto">Definir Presupuesto</label>
            <input 
              className="nuevo-presupuesto"
              type="number"
              placeholder="Añade tu Presupuesto"
              value={presupuesto}
              onChange={ e => setPresupuesto(Number(e.target.value))}
            
            />

        </div>

        <input type="submit" value="Añadir" />


        {mensaje && <Mensaje tipo='error'>{mensaje}</Mensaje>}
      </form>
    </div>
  )
}
