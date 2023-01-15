import { doc, addDoc, getFirestore, collection,  updateDoc } from 'firebase/firestore';
import React, { useContext, useState } from 'react';
import { CartContext } from './context/CartContext';

const Checkout = () => {
  const {cart, cartTotal, clear, sumaTotal} = useContext(CartContext);
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [orderId, setOrderId] = useState("");

  const confirmarCompra = () => {
    const fecha = new Date();
    const order = {
      buyer: {name:nombre, email:email, phone:telefono},
      items: cart.map(item => ({id:item.id, title: item.nombre, price:item.precio, quantity:item.quantity, total_price:item.precio *item.quantity})),
      date: `${fecha.getDate()}-${fecha.getMonth()+1}-${fecha.getFullYear()} ${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`,
      total: sumaTotal(),
      quantity:cartTotal()
    }
    const db = getFirestore();
    const ordersCollection = collection(db, "orders")
    addDoc(ordersCollection, order).then((snapShot) => {
      setOrderId(snapShot.id);
      const orderDoc = doc(db, "orders", snapShot.id)
      updateDoc(orderDoc, {total: order.total * 0.9, quantity:order.quantity*2})
      clear();
    })
  }
  
  return (
    <div className="container">
      <div className="row">
        <div className="col my-5">
          <form>
            <div className="mb-3">
              <label for="nombre" className="form-label">Nombre</label>
              <input type="text" className="form-control" id="nombre" placeholder='Ingrese su nombre' onInput={(e) => {setNombre(e.target.value)}}/> 
            </div>
            <div className="mb-3">
              <label for="email" className="form-label">Email</label>
              <input type="text" className="form-control" id="email" placeholder='Ingrese su email' onInput={(e) => {setEmail(e.target.value)}}/> 
            </div>
            <div className="mb-3">
              <label for="telefono" className="form-label">Telefono</label>
              <input type="text" className="form-control" placeholder='Ingrese su número de telefono' onInput={(e) => {setTelefono(e.target.value)}}/> 
            </div>
            <button type="button" className="btn btn-primary" onClick={confirmarCompra}>Confirmar compra</button>
          </form>
        </div>
        <div className="col">
        <table className="table">
            <tbody>
              {cart.map(item => (
                <tr key={item.id}>
                  <td><img src={item.img} alt={item.nombre} width={60}/></td>
                  <td className='align-middle'>{item.nombre}</td>
                  <td className='text-center align-middle'>{item.quantity}</td>
                  <td className='text-center align-middle'>${item.quantity * item.precio}</td>
                </tr>
              ))}
                <tr>
                  <td colSpan={3} className="text-center"><b>Total a pagar</b></td>
                  <td className="text-center"><b>${sumaTotal()}</b></td>
                </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="row my-5">
        <div className='col'>
          {orderId ? <div className="alert alert-success text-center" role="alert">
            <h3>¡Hecho!</h3>
            <p>Has realizado una compra. Tu número de orden es: {orderId}</p>
          </div> : ""}
        </div>
      </div>
    </div>
  )
}

export default Checkout;