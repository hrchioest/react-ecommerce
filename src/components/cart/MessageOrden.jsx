import React from 'react'
import Carousel from '../carousel/Carousel'
import Alert from '../alert/Alert'

const MessageOrden = ({ orderId }) => {
    return (
        <>
            <Alert text={`Your purchase order is: ${orderId}`} />

            <div style={{ paddingTop: '400px' }}>
                <Carousel />
            </div>
        </>
    )
}

export default MessageOrden
