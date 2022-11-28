import React from 'react';
import Footer from './componentes/Footer';
import Navbar from './componentes/Navbar';
import BannerSubrosa from './componentes/BannerSubrosa';
import ItemListContainer from './componentes/ItemListContainer';

function App() {
  return (
    <div className="fst-normal">
      <Navbar />
      <BannerSubrosa /> 
      <ItemListContainer greeting={"Aún no hay productos disponibles."}/>
      <Footer />
    </div>
  );
}

export default App;