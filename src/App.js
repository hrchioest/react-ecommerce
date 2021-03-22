import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Home from './components/home/Home'
import Cart from './components/cart/Cart'
import ItemListContainer from './containers/itemListContainer/ItemListContainer'
import ItemDetailContainer from './containers/itemDetailContainer/ItemDetailContainer'
import Footer from './components/footer/Footer'
import { CartProvider } from './context/CartProvider'

function App() {
    return (
        <CartProvider>
            <BrowserRouter>
                <Navbar />
                <Switch>
                    <Redirect from="/react-ecommerce" to="/" />
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/categories/:categoryId">
                        <ItemListContainer />
                    </Route>
                    <Route exact path="/cart">
                        <Cart />
                    </Route>
                    <Route exact path="/item/:productId">
                        <ItemDetailContainer />
                    </Route>
                </Switch>

                <Footer />
            </BrowserRouter>
        </CartProvider>
    )
}

export default App
