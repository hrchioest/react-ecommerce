import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from '../../components/itemList/ItemList'
import { getFirestore } from '../../firebase'
import MainImgCategories from './MainImgCategories'

const ItemListContainer = () => {
    const [list, setList] = useState([])
    const { categoryId } = useParams()
    console.log('cat1', categoryId)
    useEffect(() => {
        const db = getFirestore()

        let docRef

        if (categoryId) {
            docRef = db
                .collection('items')
                .where('categoryId', '==', categoryId)
        } else {
            docRef = db.collection('items')
        }

        docRef.get().then((querySnapshot) => {
            if (querySnapshot.size === 0) {
                console.log('No existen resultados')
            }
            setList(
                querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
            )
        })
    }, [categoryId])
    console.log('cat2', categoryId)
    return (
        <>
            <MainImgCategories imgCategory={categoryId} />
            <ItemList list={list} />
        </>
    )
}

export default ItemListContainer
