import React, { useState } from 'react';
import Icon from '@material-ui/core/Icon';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';

const ItemCount = ({initial, min, max, onAdd}) =>{
    
    const [count, setCount] = useState(initial);
    

    const add = (e) =>{
        if(count < max){
            setCount(count +1)
        } 
    };

    const subtract = (e) =>{
        if(count > min){
            setCount(count -1)
        }
    };
    
    const handleClick =() =>{
        onAdd(count);
    }
    

    return(
        <div style={{background:"pink", width:300, display:"flex", flexDirection:"column", textAlign:"center"}}>  
            <div>
                <Icon disabled = {count ===max} onClick={add}>add_circle</Icon> 
                <span>{count}</span>
                <RemoveCircleIcon onClick={subtract}></RemoveCircleIcon>
            </div>
            <button
            disabled = {count <min} 
            onClick={handleClick}>Agregar al carrito
            </button>
        </div>
        
    );
}

export default ItemCount;