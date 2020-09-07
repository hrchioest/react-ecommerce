import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import CartContext from '../../CartContext';



const Cart = ({anchorEl, setAnchorEl}) =>{
       
        const { cartItem } = React.useContext(CartContext);
        const handleClose = () => {
                setAnchorEl(null);
        };
        
    return(
        <Menu
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}>
                {  cartItem.map((item,key) => (<MenuItem onClick={handleClose} key={key}> producto:{item.name} cantidad:{item.count} und.</MenuItem>))
                
                }
        </Menu>
        

    )

}

export default Cart;