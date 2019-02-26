import React,{Component} from 'react';
import Playlist from './playlist';
import './category.css'
function Category(props){
    
    return(
        <div className="Category">
            <h1 className="Category-description">{props.description}</h1>
            <h2 className="Category-title">{props.tittle}</h2>
            
                
                    <Playlist 
                    handleOpenModal={props.handleOpenModal}
                    playlist={props.playlist}/>
                
            
        </div>
    )
}
export default Category;