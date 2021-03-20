import React from 'react'
import Alert from '@material-ui/lab/Alert'
import { Button } from '@material-ui/core'
import { Link } from 'react-router-dom'
import Carousel from '../carousel/Carousel'

const NoProductMessage = () => {
    return (
        <>
            <div style={{ marginBottom: '300px' }}>
                <Alert severity="warning">
                    <div style={{ marginBottom: '20px' }}>
                        ¡No se tiene productos seleccionados!
                    </div>
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <Button variant="contained" color="primary">
                            Ver productos
                        </Button>
                    </Link>
                </Alert>
            </div>
            <div>
                <Carousel />
            </div>
        </>
    )
}

export default NoProductMessage
