import { ControlPresupuesto } from "./ControlPresupuesto"
import { NuevoPresupuesto } from "./NuevoPresupuesto"




export const Header = ({presupuesto, setPresupuesto, isValidPresupuesto, setisValidPresupuesto}) => {
  
  
  
  return (
    <header>
      
      <h1>Planificador de Gastos</h1>

      {isValidPresupuesto ? (
        <ControlPresupuesto presupuesto = {presupuesto} />


      ) : (
        <NuevoPresupuesto
        presupuesto = {presupuesto}
        setPresupuesto = {setPresupuesto}
        setisValidPresupuesto = {setisValidPresupuesto}
      
      />

      )}

     
      
      
      
      </header>
  )
}
