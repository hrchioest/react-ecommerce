import React, {useState, useEffect} from 'react';
import ItemList from '../itemList/ItemList';
import products from "../../listProducts";

const listProducts = new Promise ((result) => setTimeout(() => result(products), 2000)
);

const ItemListContainer = () =>{
    
    const [list, setList] = useState([]);
   
    useEffect(() => {
        listProducts.then(setList)
    }, [])
    return(
       
        <ItemList list={list} />
    )
}

export default ItemListContainer;