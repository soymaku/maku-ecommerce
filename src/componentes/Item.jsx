import React from 'react';
import { Link } from "react-router-dom";
const Item = ({item}) => {
  return (
    <Link to={"/item/" + item.id} className="text-decoration-none text-dark">
      <div className="card">
        <img src={item.img} className="card-img-top" alt={item.nombre} />
        <div className="card-body">
          <p className="card-text text-center">{item.nombre}</p>
        </div>
      </div>
    </Link>
  )
}

export default Item;