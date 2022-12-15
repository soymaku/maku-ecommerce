import React, { useState, useEffect }  from 'react';
import ItemCount from './ItemCount';
import arrayProductos from './json/arrayProductos.json';
import ItemList from './ItemList';
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [items, setItems] = useState ([]);
  const {id} = useParams();
  
  useEffect(() => {
  const promesa = new Promise((resolve) => {
    setTimeout(() => {
      resolve(id ? arrayProductos.filter(item => item.categoria === id) : arrayProductos);
    }, 2000)
  })  
  promesa.then((data) => {
    //console.log(data);
    setItems(data);
  })
  }, [id])
  return (
    <div className="container py-5">
      <div className="row">
        <ItemList items={items} />
        <ItemCount stockItems={10}/>
      </div>
    </div>
  );
}

export default ItemListContainer;