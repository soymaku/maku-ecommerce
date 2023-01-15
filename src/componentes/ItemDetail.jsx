import React, { useContext }  from 'react';
import { CartContext } from './context/CartContext';
import ItemCount from './ItemCount';

const ItemDetail = ({item}) => {
  const {addItem} = useContext(CartContext);

  const onAdd = ((quantity) => {
    addItem(item, quantity);
  })

  return (
    <div className="row d-flex justify-content-center align-items-center">
      <div className="col-md-7 ">
        <img src={item.img} className="img-fluid" alt={item.nombre} />
      </div>
      <div className="col-md-5">
        <h1>{item.nombre}</h1>
        <p>{item.desc}</p>
        <h3>${item.precio}</h3>
        <ItemCount stock={item.stock} onAdd={onAdd} />
      </div>
    </div>
  )
}

export default ItemDetail;