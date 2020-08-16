import React, { useState } from 'react';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';

function App() {
  const [cartCount, setCartCount] = useState(0);

  const handleAdd = (count) =>{
    setCartCount(count)
  }
  return (
    <div>
        <Navbar counter={cartCount}/>
        <Home handleAdd={handleAdd}/>
    </div>
    
  );
}

export default App;
