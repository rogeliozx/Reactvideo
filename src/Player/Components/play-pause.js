import React from 'react';
import Figure from '../../media/icons/play';
import './figure.css';
function PlayPause(props){
    return(
        <div className="PlayPause">
        {
            props.pause ?
            <button 
            onClick={props.handleClick}
            >
            <Figure.Play size={25} color="white"/>
            </button>
            :
            <button
            onClick={props.handleClick}
            >
    <Figure.Pause size={25} color="white"/>
            </button>
        }
            
            
        </div>
    )
}

export default PlayPause;