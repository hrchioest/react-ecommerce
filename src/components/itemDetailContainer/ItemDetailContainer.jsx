import React, {useState, useEffect} from 'react';
import {useParams} from "react-router-dom";
import listProducts from '../../listProducts';
import CircularProgress from '@material-ui/core/CircularProgress';
import ItemDetail from '../itemDetail/ItemDetail' ;


const itemDetails = (productId) => {
    return new Promise(result =>  setTimeout(() => 
        { result(listProducts.find(product =>
            product.id===parseInt(productId)))  
        },3000)) 
} 

const ItemDetailContainer = () =>{

    const [loading, setLoading] = useState(false);
   
    const [item, setItem] = useState([]);
    const {productId} = useParams();
    
    useEffect(() =>{
        setLoading(true);
        console.log('loading')
        itemDetails(productId).then((product) => {
            setItem(product);
            setLoading(false)    
        });
       
    }, [itemDetails])

    console.log('loading',loading)

    return(
        <>
            {loading ? <CircularProgress color="secondary" />
            : <ItemDetail item={item} />

            }
        </>
    )   
}

export default ItemDetailContainer;