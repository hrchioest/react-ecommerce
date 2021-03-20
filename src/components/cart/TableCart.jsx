import React from 'react'
import CartContext from '../../context/CartContext'
import { Table, TableBody, TableCell } from '@material-ui/core'
import { TableContainer, TableHead, TableRow } from '@material-ui/core'
import { Paper, Box } from '@material-ui/core'
import { convertToMoney } from '../../utils'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    root: {
        width: '80%',
        margin: 'auto',
        marginTop: '20px',
    },
    container: {
        maxHeight: 440,
    },
})

const TableCart = () => {
    const { cartItem, costoTotal } = React.useContext(CartContext)

    const classes = useStyles()
    return (
        <>
            <Paper className={classes.root}>
                <TableContainer className={classes.container}>
                    <Table
                        className={classes.table}
                        stickyHeader
                        aria-label="sticky table"
                    >
                        <TableHead>
                            <TableRow>
                                <TableCell style={{ minWidth: 170 }}>
                                    Producto
                                </TableCell>
                                <TableCell style={{ minWidth: 170 }}>
                                    Nombre
                                </TableCell>
                                <TableCell
                                    align="right"
                                    style={{ minWidth: 100 }}
                                >
                                    Cantidad
                                </TableCell>
                                <TableCell
                                    align="right"
                                    style={{ minWidth: 170 }}
                                >
                                    precio
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {cartItem.map((item) => {
                                return (
                                    <TableRow key={item.id}>
                                        <TableCell component="th" scope="row">
                                            <img
                                                src={item.img}
                                                alt="img"
                                                style={{ width: '82px' }}
                                            />
                                        </TableCell>
                                        <TableCell>{item.name}</TableCell>
                                        <TableCell align="right">
                                            {item.count}
                                        </TableCell>
                                        <TableCell align="right">
                                            {convertToMoney(item.price)}
                                        </TableCell>
                                    </TableRow>
                                )
                            })}
                        </TableBody>
                    </Table>
                    <Box display="flex" justifyContent="flex-end" p={1}>
                        Costo total: {costoTotal()}
                    </Box>
                </TableContainer>
            </Paper>
        </>
    )
}

export default TableCart
