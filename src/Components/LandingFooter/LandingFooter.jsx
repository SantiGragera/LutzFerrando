import React from 'react'
import './LandingFooter.css'

const LandingFooter = () => {
  return (
    <div className='todoLF'>
        <div className="form">
            <h2>
                suscribite a nuestro <span className='halfcolor'> newsletter</span>  
            </h2>
            <div className="formbox">
                <div className="inputsform">
                    <input type="text" placeholder='nombre' />
                    <input type="text" placeholder='apellido' />
                    <input type="text" placeholder='email' />
                    <button className="suscribe">
                        SUSCRIBIRSE
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LandingFooter