import React, { useState } from 'react'

const useCounter = (initial = 1, min, max) => {
    const [ counter, setCounter ] = useState(initial)

    let handleSumar = () => {
        if ( counter < max ) {
            setCounter( counter + 1 )
        }
    }
    let handleRestar = () => {
        if ( counter > min ) {
            setCounter ( counter - 1 )
        }
    }
  return ({counter, handleRestar, handleSumar}) 
}

export default useCounter