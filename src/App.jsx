import React from 'react';
import Footer from './componentes/Footer';
import Navbar from './componentes/Navbar';
import BannerSubrosa from './componentes/BannerSubrosa';
import ItemListContainer from './componentes/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Error404 from './componentes/Error404';

function App() {
  return (
    <div className="fst-normal">
      <BrowserRouter>
      <Navbar />
      <BannerSubrosa /> 
      <Routes>
        <Route path={"/"} element={<ItemListContainer />}/>
        <Route path={"/category/:id"} element={<ItemListContainer />}/>
        <Route path={"/item/:id"} element={<ItemDetailContainer />}/>
        <Route path={"*"} element={<Error404 />}/>
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;