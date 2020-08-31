import React, {useState} from 'react';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Cart from '../cart/Cart';
import CartContext from '../../CartContext';


const CartIcon = () =>{

    const [show, setShow] = useState(false);

    const { cartItem } = React.useContext(CartContext);
    
    const handleIco = () =>{
        setShow(true) 
    }
    return(
        <div onClick={handleIco} position="relative">
            <IconButton >
                <Badge badgeContent={cartItem.length}  color="secondary" showZero>
                    <ShoppingCartIcon />
                </Badge>
            </IconButton>
            {show && <Cart />}
        </div>
    );  
}

export default CartIcon;
