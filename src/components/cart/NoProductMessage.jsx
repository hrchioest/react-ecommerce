import React from 'react'
import Alert from '@material-ui/lab/Alert'
import { Button } from '@material-ui/core'
import { Link } from 'react-router-dom'

const NoProductMessage = () => {
    return (
        <div style={{ paddingTop: '70px' }}>
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
    )
}

export default NoProductMessage
