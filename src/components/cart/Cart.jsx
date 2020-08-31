import React from 'react';
import CartContext from '../../CartContext';


const Cart = () =>{
    const { cartItem } = React.useContext(CartContext);

    return(
        
            <div style={{position:"absolute", color:"blue", right:"0px", backgroundColor:"white", padding:"8px"}}>
                    { cartItem.map(item =>
                    (<div>producto:{item.name} cantidad:{item.count} und.</div>))}
            </div>
    
    )

}

export default Cart;