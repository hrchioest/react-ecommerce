import React, { useState, useEffect } from "react";
import Box from '@material-ui/core/Box';
import Item from "../item/Item";
import products from "../../listProducts";



const listProducts = new Promise ((result, reject) => setTimeout(() => result(products), 2000))
    

const ItemList =() => {

    const [list, setList] = useState([]);
   
    useEffect(() => listProducts.then(setList), []);

    return(
    <Box display="flex" justifyContent="space-around" flexWrap="wrap">
        {list.map(products => 
            <Item key={products.id} 
                img={products.img} 
                name={products.name}
                description={products.description}
                stock={products.stock}
            />
        )}
    </Box>
)}

export default ItemList;