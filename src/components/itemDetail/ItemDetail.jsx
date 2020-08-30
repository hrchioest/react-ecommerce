import React from 'react';
import ItemCount from '../itemCount/ItemCount';
import Item from '../item/Item';
import { Button } from '@material-ui/core';
import Box from '@material-ui/core/Box';


const ItemDetail = ({item, handleAdd}) => {

    return(
    
        <Box display="flex" justifyContent="center" margin="auto" flexWrap="wrap" bgcolor="grey.300" m={2}>
            <Item item={item} />
            <Box margin={10}>
                    <ItemCount 
                    onAdd ={handleAdd}
                    initial ={1}   
                    min={1}
                    max={30}/>
                    <Button variant="contained" color="primary" fullWidth >Comprar</Button>
            </Box>
        </Box>

    );  
}

export default ItemDetail;
