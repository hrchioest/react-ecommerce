import React, { useState } from 'react';
import Icon from '@material-ui/core/Icon';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';


const ItemCount = ({initial, min, max, onAdd}) =>{
    
    const [count, setCount] = useState(initial);
    

    const add = () =>{
        if(count < max)
            setCount(count +1)
    };

    const subtract = () =>{
        if(count > min)
            setCount(count -1)
    };
    
    const handleClick =() =>onAdd(count);
    
    

    return(
        <Box flexDirection="colum"  width="185px" height="100px">   
            <Box display="flex" justifyContent="space-between" border="solid 1px black" borderRadius="8px">
                <RemoveCircleIcon style={{ fontSize: 30 }} onClick={subtract}></RemoveCircleIcon>
                <span>{count}</span>
                <Icon style={{ fontSize: 30 }} disabled = {count ===max} onClick={add}>add_circle</Icon> 
            </Box>
            <Button variant="contained" color="secondary" 
            disabled = {count <min} 
            onClick={handleClick}>Agregar al carrito
            </Button>
        </Box> 
        
    );
}

export default ItemCount;