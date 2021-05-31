import React, { useState } from 'react'
import Formulario from '../formulario/Formulario'
import CartContext from '../../context/CartContext'
import * as firebase from 'firebase/app'
import NoProductMessage from './NoProductMessage'
import MessageOrden from './MessageOrden'
import 'firebase/firestore'
import { getFirestore } from '../../firebase'
import TableCart from './TableCart'
import Carousel from '../carousel/Carousel'

const Cart = () => {
    const { cartItem, costoTotal, resetCantCart } =
        React.useContext(CartContext)

    const [showForm, setShowForm] = useState(false)
    const [orderId, setOrderId] = useState(null)

    if (cartItem.length === 0 && orderId === null) {
        return <NoProductMessage />
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
        return <MessageOrden orderId={orderId} />
    }

    return (
        <>
            {showForm ? (
                <>
                    <Formulario createOrder={createOrder} />
                    <Carousel />
                </>
            ) : (
                <>
                    <TableCart setShowForm={setShowForm} />
                    <Carousel />
                </>
            )}
        </>
    )
}

export default Cart
