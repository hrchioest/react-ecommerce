import React from 'react'
import { Box, Button } from '@material-ui/core'
import { Link } from 'react-router-dom'

const Buttons = ({ setShowForm }) => {
    return (
        <>
            <Box display="flex" justifyContent=" flex-end" p={1}>
                <Button
                    variant="contained"
                    style={{ backgroundColor: '#000', color: '#fff' }}
                    onClick={() => setShowForm(true)}
                >
                    Checkout
                </Button>
            </Box>
            <Box display="flex" justifyContent=" flex-end" p={1} mb={10}>
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <Button
                        variant="contained"
                        style={{ backgroundColor: '#f7d04b' }}
                    >
                        Continue buying
                    </Button>
                </Link>
            </Box>
        </>
    )
}

export default Buttons
