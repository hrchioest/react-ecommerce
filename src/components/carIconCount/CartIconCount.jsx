import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';


const CartIconCount = ({cartCount}) =>{
    console.log(cartCount)

    return(
        <>
            <IconButton>
                <Badge badgeContent={cartCount}color="secondary"showZero>
                    <ShoppingCartIcon />
                </Badge>
            </IconButton>
        </>
    );  
}

export default CartIconCount;
