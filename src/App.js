import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Cart from './components/cart/Cart';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';
import CartContext from './CartContext';

function App() {
  
  const [cartItem, setCartItem] = useState([]);
 
  const productsAdd = (itemCount) =>{
    if(cartItem.find(item=>item.id ===itemCount.id)) {
      const newCartItem = cartItem.map(item=>{
        if(item.id ===itemCount.id){
          return {...item, count:itemCount.count + item.count}
        }
        return item;
      });
      setCartItem(newCartItem)
    }else{
      setCartItem(state => {
        return [...state, itemCount]
      })
    }
  }
  return (
    <CartContext.Provider value={{cartItem, productsAdd}}>
      <BrowserRouter>
          <Navbar />
        <Switch> 
          <Route exact path = "/">
            <Home />
          </Route>
          <Route path = "/categories/:categoryId">
            <Home />
          </Route>
          <Route exact path = "/cart"> 
            <Cart />
          </Route>
          <Route exact path = "/item/:productId">
          <ItemDetailContainer />
          </Route>
        </Switch>
      </BrowserRouter>
    </CartContext.Provider>
  );
}

export default App;
