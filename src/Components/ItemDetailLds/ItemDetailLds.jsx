import React, { useState } from 'react'
import './ItemDetailLds.css'
import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'
import NavBar from '../NavBar/NavBar'
import { useCartContext } from '../context/CartContex'

const ItemDetailLds = ({producto}) => {

  const [isCant, setIsCant] = useState(false)

  const {addToCart, cartList} = useCartContext()

  const onAdd = (cantidad) => {
    addToCart( {...producto, cantidad} )
    setIsCant(true)

  }

  return (
    <div className='todomaindos'>
      <NavBar />
      <div className="detalletodo">
        <div className='tododetail'>
          <div key={producto.id} className=''>
            <img className='imgdetail' src={producto.imagen} alt="foto producto" />
          </div>
          <div className='textDetail'>
            <div className='nomypre'>
              <h4 className='prodname'>{producto.nombre}</h4>
              <h5 className='prodprice'>${producto.precio}</h5>
            </div>
            {
              !isCant ?
                <div className=''>
                  <ItemCount onAdd={onAdd} />
                </div>
                :
                <>
                  <div className='btncomprasdiv'>
                    <Link to={'/lentesdesol'}>
                      <button className='btncompras'>Seguir Comprando</button>
                    </Link>
                    <Link to={'/cart'}>
                      <button className='btncompras'>Terminar Compra</button>
                    </Link>
                  </div>
                </>
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemDetailLds