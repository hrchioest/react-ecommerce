import React from 'react';
import ItemListContainer from '../itemListContainer/ItemListContainer';
import ItemDetailContainer from '../itemDetailContainer/ItemDetailContainer';


const Home = ({handleAdd}) => {

    return(
    <>
        <ItemListContainer />
        
        <ItemDetailContainer handleAdd={handleAdd} />
    </>
    )
   
}
export default Home;