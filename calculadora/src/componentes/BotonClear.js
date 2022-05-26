import React from 'react';
import '../boton-hojas-de-estilo/BotonClear.css'
const BotonClear = (props) => (
    <div className="boton-clear" onClick={props.handlerClear}>
        {props.children}
    </div>
);

export default BotonClear;