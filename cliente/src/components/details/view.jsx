import React from 'react'

const View = (props) => {
    let foto = require('../../imagenes/detalles/London'+props.match.path+".jpg")
    return (
        <div style={{ height: 300 }}>
            <img src={foto} alt={props.match.path} />
        </div>
    )
}

export default View;