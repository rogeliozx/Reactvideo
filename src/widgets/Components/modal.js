import React from 'react';
import './modal.css'
function Modal(props){
    return(
        <div className="Modal">
            <h2>esto es un modal</h2>
           
            {props.children}
            <button onClick={props.handleClick}>cerrar</button>
        </div>
    )
}
export default Modal;