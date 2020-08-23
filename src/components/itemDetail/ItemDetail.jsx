import React from 'react';
import ItemCount from '../itemCount/ItemCount';
import Item from '../item/Item';
import { Button } from '@material-ui/core';
import Box from '@material-ui/core/Box';


const ItemDetail = ({detail, handleAdd}) => {

    return(
        <Box display="flex" justifyContent="center" margin="auto" flexWrap="wrap" bgcolor="grey.300" m={2}>
            <Item detail={detail} />
            <Box margin={10}>
                <div> 
                    <ItemCount 
                    onAdd ={handleAdd}
                    initial ={1}   
                    min={1}
                    max={30}/>
                </div>
                <div>
                    <Button variant="contained" color="primary" fullWidth="100%">Comprar</Button>
                </div>
            </Box>
        </Box>
    );  
}

export default ItemDetail;
