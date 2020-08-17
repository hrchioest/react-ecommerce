import React, { useState, useEffect } from "react";
import Box from '@material-ui/core/Box';

import Item from "../item/Item";

const products = [
    {
        id:1,
        name:"Laptop",
        description:"MacBook Pro 13'",
        stock:28,
        img:"https://d26lpennugtm8s.cloudfront.net/stores/001/063/033/products/prod-141-17d52c3880823e17f615718526349866-480-0.jpg"

    },
    {
        id:2,
        name:"Watch",
        description:"White Smartwatch",
        stock:30,
        img:"https://d26lpennugtm8s.cloudfront.net/stores/001/063/033/products/prod-11-29d75e057330bb437c15706249551096-480-0.jpg"

    },
    {
        id:3,
        name:"Airpods",
        description:"Wireless headphones",
        stock:25,
        img:"https://d26lpennugtm8s.cloudfront.net/stores/001/063/033/products/prod-91-99d1fa9eb7125e47b915718462204871-480-0.jpg"

    }
]

const listProducts = new Promise ((result, reject) => {
    setTimeout(() => result(products), 2000)
});

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