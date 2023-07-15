import React from 'react'
import './ItemCount.css'
import useCounter from '../UseCounter/UseCounter'

const ItemCount = ({initial=1, stock=5, onAdd}) => {
    const { counter, handleSumar, handleRestar } = useCounter(initial, 1, stock)

    return (
      <div className='itemcount'>
        <div className='botonsitos'>
          <button className='btncountmas' onClick={handleSumar}> + 1 </button>
          <label> {counter} </label>
          <button className='btncountmenos' onClick={handleRestar}> - 1 </button>
        </div>
        <button onClick={()=>{onAdd(counter)}} className='btncountadd' >Agregar al Carrito</button>
      </div>
    )
}

export default ItemCount