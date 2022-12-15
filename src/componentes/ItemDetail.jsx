import React from 'react';
import ItemCount from './ItemCount';

const ItemDetail = ({item}) => {
  return (
    <div className="row d-flex justify-content-center align-items-center">
      <div className="col-md-7 ">
        <img src={item.img} className="img-fluid" alt={item.nombre} />
      </div>
      <div className="col-md-5">
        <h1>{item.nombre}</h1>
        <p>{item.desc}</p>
        <h3>${item.precio}</h3>
        <ItemCount stockItems={item.stock} />
      </div>
    </div>
  )
}

export default ItemDetail;