import React from 'react'
import Alert from '../alert/Alert'
import Carousel from '../carousel/Carousel'

const NoProductMessage = () => {
    return (
        <>
            <Alert text="🙁 Ups, no product has been selected!" />
            <div>
                <Carousel />
            </div>
        </>
    )
}

export default NoProductMessage
