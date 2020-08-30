import React, {useState} from 'react';
import ItemCount from '../itemCount/ItemCount';
import Item from '../item/Item';
import { Button } from '@material-ui/core';
import Box from '@material-ui/core/Box';


const ItemDetail = ({item, handleAdd}) => {

    const [count, setCount] = useState(1);

    const handleClick = () =>{
        handleAdd(count)
    }
    return(
    
        <Box display="flex" justifyContent="center" margin="auto" flexWrap="wrap" bgcolor="grey.300" m={2}>
            <Item item={item} />
            <Box margin={10}>
                    <ItemCount 
                        setCount={setCount}
                        count={count} 
                        min={1}
                        max={30}/>
                    <Button variant="contained"
                        color="primary"
                        onClick ={handleClick} 
                        fullWidth >Comprar
                    </Button>
            </Box>
        </Box>

    );  
}

export default ItemDetail;
