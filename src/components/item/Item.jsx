import React from 'react'
import { Box, Button } from '@material-ui/core'
import { Link } from 'react-router-dom'

const Item = ({ item: { id, name, description, img } }) => (
    <Box flexDirection="colum" marginTop="60px">
        <h2>{name}</h2>
        <Link to={`/item/${id}`}>
            <img src={img} alt="img" width="350" />
        </Link>
        <Box>
            <Link to={`/item/${id}`}>
                <Button
                    variant="contained"
                    style={{ backgroundColor: '#f7d04b' }}
                >
                    Details
                </Button>
            </Link>
        </Box>
    </Box>
)

export default Item
