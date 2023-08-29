import { ControlPresupuesto } from "./ControlPresupuesto"
import { NuevoPresupuesto } from "./NuevoPresupuesto"




export const Header = ({gastos, presupuesto, setPresupuesto, isValidPresupuesto, setisValidPresupuesto, setGastos}) => {
  
  
  
  return (
    <header>
      
      <h1>Planificador de Gastos</h1>

      {isValidPresupuesto ? (
        <ControlPresupuesto gastos={gastos} presupuesto = {presupuesto} setGastos={setGastos} setPresupuesto={setPresupuesto} setisValidPresupuesto = {setisValidPresupuesto} />


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
