import React, {useState, useEffect} from 'react';
import detailProduct from '../detailProduct';
import CircularProgress from '@material-ui/core/CircularProgress';


import ItemDetail from '../itemDetail/ItemDetail' ;

const itemDetails = new Promise(
    (result, reject) => setTimeout(() => result(detailProduct), 3000)
)
const ItemDetailContainer = ({handleAdd}) =>{
    const [loading, setLoading] = useState(false);
    const [detail, setDetail] = useState([]);

    useEffect(() =>{
        setLoading(true);
        itemDetails.then((product) => {
            setDetail(product);
            setLoading(false)    
        });
       
    }, [itemDetails])
    return(
        <>
            {loading 
                ?  <CircularProgress color="secondary" />
                : <ItemDetail detail={detail} handleAdd={handleAdd} />
            }
        </>
    )   
}

export default ItemDetailContainer;