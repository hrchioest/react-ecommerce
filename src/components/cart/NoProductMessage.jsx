import React from 'react'
import Alert from '../alert/Alert'
import Carousel from '../carousel/Carousel'
import Box from '@material-ui/core/Box'

const NoProductMessage = () => {
    return (
        <Box minHeight="77vh">
            <Alert text="🙁 Ups, no product has been selected!" />
            <div>
                <Carousel />
            </div>
        </Box>
    )
}

export default NoProductMessage
