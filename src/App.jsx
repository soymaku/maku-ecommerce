import React from 'react';
import Footer from './componentes/Footer';
import Navbar from './componentes/Navbar';
import BannerSubrosa from './componentes/BannerSubrosa';
import ItemListContainer from './componentes/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Error404 from './componentes/Error404';
import CartContextProvider from './componentes/context/CartContext';
import Cart from './componentes/Cart';
import Checkout from './componentes/Checkout';
import FinDeCompra from './componentes/FinDeCompra';

function App() {
  return (
    <div className="fst-normal">
      <CartContextProvider>
        <BrowserRouter>
          <Navbar />
          <BannerSubrosa /> 
          <Routes>
            <Route path={"/"} element={<ItemListContainer />}/>
            <Route path={"/category/:id"} element={<ItemListContainer />}/>
            <Route path={"/item/:id"} element={<ItemDetailContainer />}/>
            <Route path={"/cart"} element={<Cart />}/>
            <Route path={"/checkout"} element={<Checkout />}/>
            <Route path={"/findecompra/:id"} element={<FinDeCompra />}/>
            <Route path={"*"} element={<Error404 />}/>
          </Routes>
          <Footer />
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;