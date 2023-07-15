import React, { useEffect, useState } from 'react'
import './ldsContainer.css'
import { collection, getDocs, getFirestore } from 'firebase/firestore'
import NavBarCat from '../NavBarCat/NavBarCat'
import { Link } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Filter from '../Filter/Filter'


const LdsContainer = () => {

    const [productos, setProductos] = useState([])
    const [isLoading, setIsLoading] = useState (true)

    useEffect( () => {
        const dbFirestore = getFirestore()
        const queryCollection = collection(dbFirestore, 'productos')
        
        getDocs(queryCollection)
        .then(res => setProductos( res.docs.map(productos => ( { id: productos.id, ...productos.data() } ) ) ))
        .catch( error => console.log(error))
        .finally(() => setIsLoading(false))
    }, []) 

    const handleProductFiltered = ({ filterState, handleFilterChange }) => (
        <div>
        <NavBarCat />
        <div className='todolds'>
              <div className="containerlds">
                  <div className='containerfilter'>
                        <div className='filterLdS'>
                            <div className='busqueda'>                            
                                <h2>BUSCAR</h2>
                                <input className='inputBuscar' type="text" value={filterState} onChange={handleFilterChange} />
                            </div>
                        </div>
                  </div>
                      <div className='bg'>
                        { isLoading ?
                                <h2> Cargando </h2>
                            :
                              <>
                                {filterState === ''
                                
                                    ? productos.map(producto =>
                                        <div className='cardLds' key={producto.id}>
                                            <img className='fotocard' src={producto.imagen} alt="foto producto" />
                                            <div className="textoslds">
                                                <h3 className='nombrelds' >{producto.nombre}</h3>
                                                <h4 className='preciolds' >$ {producto.precio}</h4>
                                            </div>
                                            <Link to={`/detailLds/${producto.id}`} className='linkcards' >
                                              <button className='btnlds'>ver más</button>
                                            </Link>
                                        </div>
                                    )
                                    :
                                    productos.filter(producto => producto.nombre.toLowerCase().includes(filterState.toLowerCase())).map(
                                        producto => <div className='cardLds' key={producto.id}>
                                            <img className='fotocard' src={producto.imagen} alt="foto producto" />
                                            <div className="textoslds">
                                                <h3 className='nombrelds' >{producto.nombre}</h3>
                                                <h4 className='preciolds' >$ {producto.precio}</h4>
                                            </div>
                                            <Link to={`/detailLds/${producto.id}`} className='linkcards' >
                                                <button className='btnlds'>ver más</button>
                                            </Link>
                                        </div>)    
                                }
                            </>    
                        }
                      </div>
              </div>
        </div>
        <Footer />
    </div>
    )
  return (
    <div>
        <Filter>
            { handleProductFiltered }
        </Filter>
    </div>
  )
}

export default LdsContainer