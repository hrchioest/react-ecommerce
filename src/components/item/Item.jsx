import React from 'react'
import { Box, Button } from '@material-ui/core'
import { Link } from 'react-router-dom'

const Item = ({ item: { id, name, description, price, img } }) => (
    <Box flexDirection="colum" marginTop="60px">
        <h2>{name}</h2>
        <span>Price :{price}</span>

        <div>
            <Link to={`/item/${id}`}>
                {' '}
                <img src={img} alt="img" width="350" />
            </Link>
        </div>

        <Button variant="contained" style={{ backgroundColor: '#f7d04b' }}>
            <Link
                to={`/item/${id}`}
                style={{ textDecoration: 'none', color: 'black' }}
            >
                {' '}
                Details{' '}
            </Link>
        </Button>
    </Box>
)

export default Item
