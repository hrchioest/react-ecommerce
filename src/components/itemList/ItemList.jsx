import React from "react";
import Box from '@material-ui/core/Box';
import Item from "../item/Item";

const ItemList =({list}) => {

    
    return(
    <Box display="flex" justifyContent="space-around" flexWrap="wrap">
        {list.map(product => 
            <Item key={product.id} detail={product} 
            />
        )}
    </Box>
)}

export default ItemList;