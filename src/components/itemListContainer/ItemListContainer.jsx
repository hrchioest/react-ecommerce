import React, {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";
import ItemList from '../itemList/ItemList';
import { getFirestore } from "../../firebase";


const ItemListContainer = () =>{
    
    const [list, setList] = useState([]);
    const {categoryId} = useParams();

   
    useEffect(() => {

        const db = getFirestore();

        let docRef;
        
        if(categoryId){
            docRef = db.collection('items').where('categoryId', '==', categoryId);
        }else{
            docRef = db.collection('items');
        }

        docRef.get().then((querySnapshot) => { 
            if(querySnapshot.size === 0){
                console.log('No existen resultados');
            }
            setList(querySnapshot.docs.map(doc => ({...doc.data(), id: doc.id}))); 
        });


    }, [categoryId])
    return(
       
        <ItemList list={list} />
    )
}

export default ItemListContainer;