import React from 'react'

function ButtonCarga({cargando}) {
  return (
    <div>
        {cargando ? <h1>Cargando</h1> : <h1>Listo</h1>}
    </div>
  )
}

export default ButtonCarga
