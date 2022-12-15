import React from 'react';

const ItemDetail = ({item}) => {
  return (
    <div className="row">
      <div className="col-md-4 offset-md-4 text-center">
        <img src={item.img} className="img-fluid" alt={item.nombre} />
        <h1>{item.nombre}</h1>
        <p>{item.desc}</p>
        <p><b>${item.precio}</b></p>
      </div>
    </div>
  )
}

export default ItemDetail;