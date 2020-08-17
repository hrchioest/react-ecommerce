import React from 'react';
import ItemCount from '../itemCount/ItemCount';

const Home = ({handleAdd}) => {
    return(
        <>
            <ItemCount 
            onAdd ={handleAdd}
            initial ={0}
            min={1}
            max={30}/>
        </>
    );  
}
export default Home;