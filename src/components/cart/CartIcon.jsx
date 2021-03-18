import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import Badge from '@material-ui/core/Badge'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import CartContext from '../../context/CartContext'

const CartIcon = () => {
    const { cantTotal } = React.useContext(CartContext)

    return (
        <div>
            <IconButton>
                <Badge badgeContent={cantTotal()} color="secondary" showZero>
                    <ShoppingCartIcon style={{ color: 'white' }} />
                </Badge>
            </IconButton>
        </div>
    )
}

export default CartIcon
