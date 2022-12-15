import React, { useEffect } from 'react';
import { useState } from 'react';

const ItemCount = ({stockItems}) => {
  const [counter, setCounter] = useState(1);
  const [stock, setStock] = useState(10);
  const incrementarStock = () => {
    if (counter < stock){
      setCounter(counter + 1)
    }
  }
  const decrementarStock = () => {
    if (counter > 1){
      setCounter(counter - 1)
    }
  }
  const onAdd = () => {
    if (stock > 0 && counter <= stock){
      console.log("Agregaste: " + counter + " productos al carrito");
      setStock(stock - counter);
      setCounter(0);
    }
  }

  return (
    <div className='container text-center'>
      <div className='row mb-3'>
        <div className="col-md-12">
          <div className="btn-group" role="group" aria-label="Basic mixed styles example">
            <button type="button" className="btn btn-danger" onClick={decrementarStock}>-</button>
            <button type="button" className="btn ">{counter}</button> 
            <button type="button" className="btn btn-success" onClick={incrementarStock}>+</button>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <button className='btn' onClick={onAdd}>Agregar al carrito</button>
        </div>
      </div>
    </div>
  )
}

export default ItemCount;