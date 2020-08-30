import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import CartContext from '../../CartContext';


const CartIconCount = ({count}) =>{

    return(
        <>
            <IconButton>
                <Badge badgeContent={count}color="secondary"showZero>
                    <ShoppingCartIcon />
                </Badge>
            </IconButton>
        </>
    );  
}

export default CartIconCount;
