import React from 'react'
import Alert from '@material-ui/lab/Alert'
import Carousel from '../carousel/Carousel'

const MessageOrden = ({ orderId }) => {
    return (
        <>
            <div>
                <Alert severity="success">
                    Tu orden de compra es: {orderId}
                </Alert>
            </div>
            <div style={{ paddingTop: '400px' }}>
                <Carousel />
            </div>
        </>
    )
}

export default MessageOrden
