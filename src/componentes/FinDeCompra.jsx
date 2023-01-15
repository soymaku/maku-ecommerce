import React from 'react';
import { Link, useParams } from 'react-router-dom';

const FinDeCompra = () => {
  const {id} = useParams();
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-md-12 text-center">
          <div className="alert alert-success" role="alert">
            <h1>¡Muchas gracias!</h1>
            <p>Tu numero de pedido es: <b>{id}</b></p>
          </div>
          <Link to={"/"} className='text-decoration-underline text-muted text-reset'>Volver a la página principal</Link>
        </div>
      </div>
    </div>
  )
}

export default FinDeCompra;