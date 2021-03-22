import React from 'react'
import { Button, Box } from '@material-ui/core'
import { Link } from 'react-router-dom'

const Alert = ({ text }) => {
    return (
        <>
            <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                padding="80px"
                margin="80px 0"
            >
                <div>
                    <h2 style={{ marginBottom: '20px' }}>{text}</h2>
                </div>
                <div>
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <Button
                            variant="contained"
                            style={{ backgroundColor: '#f7d04b' }}
                        >
                            See products
                        </Button>
                    </Link>
                </div>
            </Box>
        </>
    )
}

export default Alert
