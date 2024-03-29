import React from 'react';
import '../boton-hojas-de-estilo/Boton.css';

function Boton(props){

    const esOperador = valor => {
        return isNaN(valor) && (valor !== '.') && (valor !== '=')
    };

    return(
        <div className={`boton-container ${esOperador(props.children) ? 'operador' : ""}`.trimEnd()}
            onClick={() => props.handlerClick(props.children)}
        >
            {props.children}
        </div>
    );
}

export default Boton;