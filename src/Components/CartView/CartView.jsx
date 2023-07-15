import React from 'react'
import './CartView.css'
import { useCartContext } from '../context/CartContex'
import NavBarCat from '../NavBarCat/NavBarCat'
import { Link } from 'react-router-dom'

const CartView = () => {

  const { cartList, vaciarCarrito, precioTotal, eliminarProducto } = useCartContext()

  return (
    <div className=''>
      <NavBarCat />
      {cartList && cartList.length !== 0 ?
        <>
          {cartList.map(producto => (
            <div className="todocart"  key={producto.id}>
            <div className='cartview'>
              <div className="bordesito">
                <img className='cartimg' src={producto.imagen} />
                <div className='cartext'>
                  <h2 className='nombrecart' >{producto.nombre}</h2>
                  <h3>{producto.cantidad}</h3>
                  <h3 className='preciocart' >${producto.precio}</h3>
                </div>
              </div>
              <button className='kitar' onClick={() => eliminarProducto(producto.id)} >X</button>
            </div>
            </div>
          ))}
          <div className='vcyt'>
            <h3>Total: <span className='signopeso'>$</span>{precioTotal()} </h3>
            <button className='btnverde' onClick={vaciarCarrito}>Vaciar Carrito</button>
          </div>
        </>
        :
        <div className='irhome'>
          <h2 className='np'>NO HAY NINGUN PRODUCTO</h2>
          <Link to='/'>
            <button className='btnverde btnlds' >Ir a Comprar</button>
          </Link>
        </div>
      }
    </div>
  )
}

export default CartView