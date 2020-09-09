import React from 'react';
import ItemCount from '../itemCount/ItemCount';
import Item from '../item/Item';
import { Button } from '@material-ui/core';
import Box from '@material-ui/core/Box';

import CartContext from '../../CartContext';

const ItemDetail = ({item}) => {
    const [count, setCount] = React.useState(1);
    const { productsAdd } = React.useContext(CartContext);

    const handleClickComprar = () => {
        if(count > 0  ){
            productsAdd(
                {id: item.id, name: item.name, img:item.img, count, price:item.price })
        }
    }


    return(
    
        <Box display="flex" justifyContent="center" margin="auto" flexWrap="wrap" bgcolor="grey.300" m={2}>
            <Item item={item} />
            <Box margin={10}>
                    <ItemCount 
                    setCount ={setCount}
                    count={count}
                    min={1}
                    max={30}/>
                    <Button variant="contained" color="secondary" fullWidth onClick={handleClickComprar}>Comprar</Button>
            </Box>
        </Box>

    );  
}

export default ItemDetail;
