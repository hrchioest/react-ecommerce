import React, { useState } from 'react'
import CartContext from './CartContext'
import { convertToMoney } from '../utils'

export const CartProvider = ({ children }) => {
    const [cartItem, setCartItem] = useState([])

    const productsAdd = (itemCount) => {
        if (cartItem.find((item) => item.id === itemCount.id)) {
            const newCartItem = cartItem.map((item) => {
                if (item.id === itemCount.id) {
                    return { ...item, count: itemCount.count + item.count }
                }
                return item
            })
            setCartItem(newCartItem)
        } else {
            setCartItem((state) => {
                return [...state, itemCount]
            })
        }
    }
    const deleteProduct = (itemCount) => {
        const newItems = cartItem.filter((item) => item.id !== itemCount.id)
        setCartItem(newItems)
    }

    const costoTotal = () => {
        const cost = cartItem.reduce(
            (acumulador, item) => acumulador + item.price * item.count,
            0
        )
        return convertToMoney(cost)
    }
    const cantTotal = () => {
        return cartItem.reduce((acumulador, item) => acumulador + item.count, 0)
    }
    const resetCantCart = () => {
        setCartItem([])
    }

    return (
        <CartContext.Provider
            value={{
                cartItem,
                productsAdd,
                deleteProduct,
                costoTotal,
                cantTotal,
                resetCantCart,
            }}
        >
            {children}
        </CartContext.Provider>
    )
}
