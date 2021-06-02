import React from 'react'
import CartContext from '../../context/CartContext'
import { Table, TableBody, TableCell } from '@material-ui/core'
import { TableContainer, TableHead, TableRow } from '@material-ui/core'
import { Paper, Box } from '@material-ui/core'
import { convertToMoney } from '../../utils'
import { makeStyles } from '@material-ui/core/styles'
import Buttons from '../buttons/Buttons'

const useStyles = makeStyles({
    root: {
        width: '80%',
        margin: 'auto',
        marginTop: '20px',
        minHeight: '77vh',
    },
})

const TableCart = ({ setShowForm }) => {
    const { cartItem, deleteProduct, costoTotal } =
        React.useContext(CartContext)

    const deleteItem = (id) => {
        deleteProduct(id)
    }
    const classes = useStyles()
    return (
        <>
            <Paper className={classes.root}>
                <TableContainer>
                    <Table
                        className={classes.table}
                        stickyHeader
                        aria-label="sticky table"
                    >
                        <TableHead>
                            <TableRow>
                                <TableCell style={{ minWidth: 170 }}>
                                    Product
                                </TableCell>
                                <TableCell style={{ minWidth: 170 }}>
                                    Title
                                </TableCell>
                                <TableCell
                                    align="right"
                                    style={{ minWidth: 100 }}
                                >
                                    Count
                                </TableCell>
                                <TableCell
                                    align="right"
                                    style={{ minWidth: 170 }}
                                >
                                    Price
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
                        Total cost: {costoTotal()}
                    </Box>
                </TableContainer>

                <Buttons setShowForm={setShowForm} />
            </Paper>
        </>
    )
}

export default TableCart
