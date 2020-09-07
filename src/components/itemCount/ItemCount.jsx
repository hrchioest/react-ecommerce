import React from 'react';
import Icon from '@material-ui/core/Icon';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import Box from '@material-ui/core/Box';



const ItemCount = ({ min, max, count, setCount}) =>{    

    const add = () =>{
        if(count < max)
            setCount(count +1)
    };

    const subtract = () =>{
        if(count > min)
            setCount(count -1)
    };
    
    
    return(
        <Box flexDirection="colum"  width="185px" height="100px">   
            <Box display="flex" justifyContent="space-between" border="solid 1px black" borderRadius="8px">
                <RemoveCircleIcon style={{ fontSize: 30 }} onClick={subtract}></RemoveCircleIcon>
                <span>{count}</span>
                <Icon style={{ fontSize: 30 }} disabled = {count ===max} onClick={add}>add_circle</Icon> 
            </Box>
            
        </Box> 
        
    );
}

export default ItemCount;