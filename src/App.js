import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';
import ContextCart from './cartContext';


function App() {
  const [cartCount, setCartCount] = useState(0);
  const [cartItem, setCartItem] = useState([]);
  const handleAdd = (count) =>{
    console.log('123');
    setCartCount(count)
  }
  const productsAdd = (itemCount) =>{

    setCartItem(state => {
      return [...state, itemCount]
    })
    
  }

  console.log('state cartime: ',cartItem);


  return (
    <ContextCart.Provider value={{cartCount, handleAdd, productsAdd}}>
      <BrowserRouter>
          <Navbar />
        <Switch>  
          <Route exact path = "/">
            <Home />
          </Route>
          <Route exact path = "/item/:productId">
          <ItemDetailContainer />
          </Route>
        </Switch>
      </BrowserRouter>
    </ContextCart.Provider>
  );
}

export default App;
