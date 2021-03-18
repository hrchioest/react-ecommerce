import React from 'react'
import Alert from '@material-ui/lab/Alert'

const MessageOrden = ({ orderId }) => {
    return (
        <div style={{ paddingTop: '70px' }}>
            <Alert severity="success">Tu orden de compra es: {orderId}</Alert>
        </div>
    )
}

export default MessageOrden
