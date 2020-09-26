import React, { useState } from 'react'

import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Button,
    Box,
} from '@material-ui/core'

import Formulario from '../formulario/Formulario'
import CartContext from '../../CartContext'
import Alert from '@material-ui/lab/Alert'
import * as firebase from 'firebase/app'
import 'firebase/firestore'
import { getFirestore } from '../../firebase'
import { convertToMoney } from '../../utils'

const Cart = () => {
    const { cartItem, costoTotal, resetCantCart } = React.useContext(
        CartContext
    )

    const [showForm, setShowForm] = useState(false)
    const [orderId, setOrderId] = useState(null)

    if (cartItem.length === 0 && orderId === null) {
        return (
            <Alert severity="warning">
                ¡No se tiene productos seleccionados!
            </Alert>
        )
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
        resetCantCart()
    }

    if (orderId) {
        return (
            <Alert severity="success">Tu orden de compra es: {orderId}</Alert>
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
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {cartItem.map((item) => (
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
                        ))}
                    </TableBody>
                </Table>
                <Box display="flex" justifyContent="flex-end" p={1}>
                    Costo total: {costoTotal()}
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
