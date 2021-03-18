import React from 'react'
import Box from '@material-ui/core/Box'
import Item from '../item/Item'

const ItemList = ({ list }) => {
    return (
        <Box
            display="flex"
            justifyContent="space-around"
            flexWrap="wrap"
            marginBottom="100px"
        >
            {list.map((product) => (
                <Item key={product.id} item={product} />
            ))}
        </Box>
    )
}

export default ItemList
