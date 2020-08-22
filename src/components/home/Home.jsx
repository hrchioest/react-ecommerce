import React from 'react';
import ItemCount from '../itemCount/ItemCount';
import ItemList from '../itemList/ItemList';

const Home = ({handleAdd}) => {
    return(
        <>
            <ItemCount 
            onAdd ={handleAdd}
            initial ={1}
            min={1}
            max={30}/>
            <ItemList />
        </>
    );  
}
export default Home;