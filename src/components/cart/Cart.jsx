import React, { useState } from 'react'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import DeleteIcon from '@material-ui/icons/Delete'
import Formulario from '../formulario/Formulario'
import CartContext from '../../CartContext'
import Typography from '@material-ui/core/Typography'
import { Box } from '@material-ui/core'

import * as firebase from 'firebase/app'
import 'firebase/firestore'
import { getFirestore } from '../../firebase'

const Cart = () => {
    const { cartItem, costoTotal, cantTotal } = React.useContext(CartContext)

    const [showForm, setShowForm] = useState(false)
    const [orderId, setOrderId] = useState(null)

    if (cartItem.length === 0) {
        return <div>¡No se tiene productos seleccionados!</div>
    }

    const handleCheckout = () => {
        setShowForm(true)
    }

    async function createOrder(buyer) {
        const db = getFirestore()

        const orders = db.collection('orders')
        const newOrder = {
            buyer,
            cartItem,
            date: firebase.firestore.FieldValue.serverTimestamp(),
            total: costoTotal(),
        }
        try {
            const { id } = await orders.add(newOrder)
            setOrderId(id)
        } catch (err) {
            console.log('Error')
        }

        const itemsToUpdate = db.collection('items').where(
            firebase.firestore.FieldPath.documentId(),
            'in',
            cartItem.map((i) => i.id)
        )
        const query = await itemsToUpdate.get()
        const batch = db.batch()

        const outOfStock = []
        query.docs.forEach((docSnapshot, idx) => {
            if (docSnapshot.data().stock >= cartItem[idx].count) {
                batch.update(docSnapshot.ref, {
                    stock: docSnapshot.data().stock - cartItem[idx].count,
                })
            } else {
                outOfStock.push({ ...docSnapshot.data(), id: docSnapshot.id })
            }
        })
        if (outOfStock.length === 0) {
            await batch.commit()
        }
    }

    if (orderId) {
        return (
            <Box>
                <Typography variant="p">
                    Tu orden de compra es: {orderId}
                </Typography>
            </Box>
        )
    }

    return (
        <>
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Producto</TableCell>
                            <TableCell>Nombre</TableCell>
                            <TableCell align="right">Cantidad</TableCell>
                            <TableCell align="right">precio</TableCell>
                            <TableCell align="right">Opción</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {cartItem.map((item) => (
                            <TableRow key={item.id}>
                                <TableCell component="th" scope="row">
                                    <img
                                        src={item.img}
                                        alt="img"
                                        style={{ width: '120px' }}
                                    />
                                </TableCell>
                                <TableCell>{item.name}</TableCell>
                                <TableCell align="right">
                                    {item.count}
                                </TableCell>
                                <TableCell align="right">
                                    $ {item.price}
                                </TableCell>
                                <TableCell align="right">
                                    <Button
                                        variant="contained"
                                        color="secondary"
                                        startIcon={<DeleteIcon />}
                                    >
                                        {' '}
                                        Eliminar
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <Box display="flex" justifyContent="flex-end" p={1}>
                    Costo total: $ {costoTotal()}
                </Box>
            </TableContainer>

            <Box display="flex" justifyContent=" flex-end" p={1}>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleCheckout}
                >
                    checkout
                </Button>
            </Box>

            {showForm ? <Formulario createOrder={createOrder} /> : null}
        </>
    )
}

export default Cart
