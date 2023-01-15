import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from './context/CartContext';

const CartWidget = () => {
  const {cartTotal} = useContext(CartContext);
  if (cartTotal() === 0) {
    return (
      <Link to={"/cart"}type="button" className="btn position-relative">
        <img src={"/images/cart.svg"} alt="Carrito" width={32} />
      </Link> 
    )
  } else {
    return (
      <Link to={"/cart"}type="button" className="btn position-relative">
        <img src={"/images/cart.svg"} alt="Carrito" width={32} />
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" title="Ir al carrito">{cartTotal()}</span>
      </Link> 
    );
  }
}

export default CartWidget;