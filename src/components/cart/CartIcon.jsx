import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import Badge from '@material-ui/core/Badge'
import LocalMallIcon from '@material-ui/icons/LocalMall'
import CartContext from '../../context/CartContext'

const CartIcon = () => {
    const { cantTotal } = React.useContext(CartContext)

    return (
        <div>
            <IconButton>
                <Badge
                    badgeContent={cantTotal()}
                    style={{ color: '#f7d04b' }}
                    showZero
                >
                    <LocalMallIcon style={{ color: 'white' }} />
                </Badge>
            </IconButton>
        </div>
    )
}

export default CartIcon
