import { doc, getDoc, getFirestore } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetailLds from '../ItemDetailLds/ItemDetailLds'

const DetailContainerLds = () => {

    const [ isLoading, setIsLoading ] = useState(true)
    const [producto, setProducto] = useState({})
    const { pid } = useParams()

    useEffect(() => {
        const dbFirestore = getFirestore()
        const queryDoc = doc(dbFirestore, 'productos', pid)
    
        getDoc(queryDoc)
          .then( resp => setProducto( { id: resp.id, ...resp.data() } ) )
          .catch( err => console.log(err) )
          .finally( () => setIsLoading(false))
      }, [])

  return (
    <div>
    {isLoading ?
      <h2 className='charging2'>cargando...</h2>
    :
      <ItemDetailLds producto={producto} />
    }
  </div>
  )
}

export default DetailContainerLds