import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';

function App() {
  const [cartCount, setCartCount] = useState(0);

  const handleAdd = (count) =>{
    setCartCount(count)
  }
  return (
    <BrowserRouter>
        <Navbar counter={cartCount}/>
      <Switch>
        <Route exact path = "/">
          <Home />
        </Route>
        <Route exact path = "/item/:productId">
        <ItemDetailContainer handleAdd={handleAdd}/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
