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
            <button style={{fontSize:18}}
            disabled = {count <min} 
            onClick={handleClick}>Agregar al carrito
            </button>
            <span style={{fontSize:14, color:"red"}}>**La compra mínina es de 2 und</span>
        </div>
        
    );
}

export default ItemCount;