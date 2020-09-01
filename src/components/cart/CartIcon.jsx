import React, {useState} from 'react';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Cart from '../cart/Cart';
import CartContext from '../../CartContext';


const CartIcon = () =>{

    const [anchorEl, setAnchorEl] = useState(false);
    const { cartItem } = React.useContext(CartContext);
    
    const handleClick = (event) =>{
        setAnchorEl(event.currentTarget) 
    }

    const cantTotal = () =>{
        return cartItem.reduce((acumulador, item) => acumulador + item.count, 0);        
    }
   
    return(
        <>
            <div aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                <IconButton >
                    <Badge badgeContent={cantTotal()}  color="secondary" showZero>
                        <ShoppingCartIcon />
                    </Badge>
                </IconButton>
            </div>
            <Cart anchorEl={anchorEl} setAnchorEl={setAnchorEl}/>
        </>

        
    );  
}

export default CartIcon;
