import React, { useState } from 'react';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import ItemList from './components/itemList/ItemList';

function App() {
  const [cartCount, setCartCount] = useState(0);

  const handleAdd = (count) =>{
    setCartCount(count)
  }
  return (
    <div>
        <Navbar counter={cartCount}/>
        <Home handleAdd={handleAdd}/>
        <ItemList />
        
    </div>
    
  );
}

export default App;
