import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import {CartContext} from './context/CartContext'

const Cart = () =>  {
  const {cart, removeItem, clear, sumaTotal, cartTotal} = useContext(CartContext);

  if (cartTotal() === 0) {
    return (
      <div className="container py-5">
        <div className="row">
          <div className="col-md-12">
            <div className="alert alert-danger text-center" role="alert">
              <div><b>No has añadido ningún producto al carrito.</b></div>
              <div><Link to={"/"} className="text-secondary">Volver a la página principal.</Link></div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return(
    <div className='container'>
      <div className='row'>
        <div className='col-md-12'>
          <table className="table">
            <thead>
              <tr>
                <th scope="col" >&nbsp;</th>
                <th scope="col">Producto</th>
                <th scope="col" className='text-center'>Cantidad</th>
                <th scope="col" className='text-center'>Precio</th>
                <th scope="col">&nbsp;</th>
              </tr>
            </thead>
            <tbody>
              {cart.map(item => (
                <tr key={item.id}>
                  <td className='align-middle'><img src={item.img} alt={item.nombre} width={120}/></td>
                  <td className='align-middle'><b>{item.nombre}</b></td>
                  <td className='text-center align-middle'><b>{item.quantity}</b></td>
                  <td className='text-center align-middle'><b>${item.quantity * item.precio}</b></td>
                  <td className='text-end align-middle'><Link onClick={() => {removeItem(item.id)}} title="Eliminar producto"><img src={"images/trash.svg"} alt={"Eliminar producto"} width={24} /></Link></td>
                </tr>
              ))}
              <tr>
                <td colSpan={2}>&nbsp;</td>
                <td className="text-center">Suma total:</td>
                <td className='text-center'><b>${sumaTotal()}</b></td>
                <td className='text-center'>
                  <Link onClick={clear} className="btn btn-danger" title="Vaciar carrito">Vaciar carrito</Link> <Link to={"/checkout"} className="btn btn-success" title="Vaciar carrito">Finalizar compra</Link> 
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )

}

export default Cart;