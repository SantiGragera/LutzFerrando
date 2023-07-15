import React, { useEffect, useState } from 'react'
import './ItemDetailLr.css'
import { Link, useParams } from 'react-router-dom'
import { doc, getDoc, getFirestore } from 'firebase/firestore'
import ItemCount from '../ItemCount/ItemCount'
import NavBar from '../NavBar/NavBar'
import { useCartContext } from '../context/CartContex'

const ItemDetailLr = () => {

    const [ isLoading, setIsLoading ] = useState(true)
    const [producto, setProducto] = useState({})
    const { pid } = useParams()

    useEffect(() => {
        const dbFirestore = getFirestore()
        const queryDoc = doc(dbFirestore, 'lentesrecetados', pid)
    
        getDoc(queryDoc)
          .then( resp => setProducto( { id: resp.id, ...resp.data() } ) )
          .catch( err => console.log(err) )
          .finally( () => setIsLoading(false))
    }, [])

    const [ isCant, setIsCant ] = useState(false)
    const {addToCart, cartList} = useCartContext()
    const onAdd = (cantidad) => {
      addToCart( { ...producto, cantidad } )
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
                    <Link to={'/lentes'}>
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

export default ItemDetailLr