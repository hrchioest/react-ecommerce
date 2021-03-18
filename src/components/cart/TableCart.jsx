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
    },
    container: {
        maxHeight: 440,
    },
    table: {
        marginTop: '80px',
    },
})

const TableCart = () => {
    const { cartItem, costoTotal } = React.useContext(CartContext)
    const [page, setPage] = React.useState(0)
    const [rowsPerPage, setRowsPerPage] = React.useState(10)

    const handleChangePage = (event, newPage) => {
        setPage(newPage)
    }

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value)
        setPage(0)
    }
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
                            {cartItem
                                .slice(
                                    page * rowsPerPage,
                                    page * rowsPerPage + rowsPerPage
                                )
                                .map((item) => {
                                    return (
                                        <TableRow key={item.id}>
                                            <TableCell
                                                component="th"
                                                scope="row"
                                            >
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
