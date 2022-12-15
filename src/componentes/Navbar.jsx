import React from 'react';
import { Link, NavLink } from "react-router-dom";
import CartWidget from './CartWidget';

const Navbar = () => {
  return(
    <div className="container">
      <div className='row'>
        <div className="col-md-6">
          <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
              <Link className="navbar-brand" to={"/"}><img className="me-3" src={"/images/sparkyLogo.webp"} alt={"logo Subrosa"} width={150}/></Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <NavLink className="nav-link" aria-current="page" to={"/category/cuadros"}>Cuadros</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to={"/category/horquillas"}>Horquillas</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to={'/category/manubrios'}>Manubrios</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to={"/category/stems"}>Stems</NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        <div className='col-md-6 d-flex justify-content-end align-items-center'>
          <CartWidget />
        </div>
      </div>
    </div>
  )
}

export default Navbar;