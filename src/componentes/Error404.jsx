import React from 'react';
import { Link } from 'react-router-dom';

const Error404 = () => {
  return(
    <div className="container">
      <div className="row my-5">
        <div className="col text-center">
          <h1>Error 404</h1>
          <h3>La página que estas buscando no existe. <Link to={"/"}>Volver a la pagina principal</Link></h3>

        </div>
      </div>
    </div>
  )
}

export default Error404;