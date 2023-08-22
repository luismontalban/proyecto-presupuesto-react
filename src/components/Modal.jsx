import { useState } from 'react'
import cerrarModal from '../img/cerrar.svg'



export const Modal = ({setModal, animarModal, setAnimarModal}) => {

const [nombre, setNombre] = useState('')
const [cantidad, setCantidad] = useState(0)

const [categoria, setCategoria] = useState('')


    const ocultarModal = () => {
        
        setAnimarModal(false)

        setTimeout(() => {
            setModal(false)
        }, 500);
    }

  return (
    <div className="modal">
        <div className="cerrar-modal">
            <img src={cerrarModal} alt='cerrar modal' onClick={ocultarModal} />
        </div>

        <form onSubmit={handleSubmit} className={`formulario ${animarModal ? "animar" : "cerrar"}`}>

            <legend>Nuevo Gasto</legend>

            <div className="campo">
                <label htmlFor="nombre">Nombre Gasto</label>
                <input id="nombre" type='text' placeholder='Añade el nombre del Gasto' value={nombre} onChange={e => setNombre(e.target.value)}/>
            </div>


            <div className="campo">
                <label htmlFor="cantidad">Cantidad</label>
                <input id="cantidad" type='number' placeholder='Añade la cantidad' value={cantidad} onChange={e => setCantidad(Number(e.target.value))} />
            </div>


            <div className="campo">
                <label htmlFor="categoria">Categoria</label>
               <select
               id='categoria'
               value={categoria}
               onChange={e => setCategoria(e.target.value)}
               >

                <option value="">-- Seleccione --</option>
                <option value="ahorro">Ahorro</option>
                <option value="comida">Comida</option>
                <option value="casa">Gastos Varios</option>
                <option value="ocio">Ocio</option>
                <option value="salud">Salud</option>
                <option value="suscripciones">Suscripciones</option>



               </select>
            </div>


            <input type="submit" value="Añadir Gasto" />

        </form>

    </div>
  )
}
