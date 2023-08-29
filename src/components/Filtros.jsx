import {useState, useEffect} from 'react'

export const Filtros = ({filtro, setFiltro}) => {
  return (
    <div className='filtros sombra contenedor'>

    <form>
        <div className='campo'>

            <label>Todas las categorias</label>
            <select
            value={filtro}
            onChange={e => setFiltro(e.target.value)}
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
    </form>

    </div>
  )
}
