import React from 'react'
import './Landingtres.css'
import { Link } from 'react-router-dom'

const Landingtres = () => {
  return (
    <div className='todolpt'>
        <div className="accmain">
            <div className="acclogo">
                <img src="/main/acclogo.png" alt="logo de accesorios" />
            </div>
            <div className="textacc">
                <h2>
                    ACCESORIOS
                </h2>
                <div className="containerdeboton">
                    <Link className="links textd" to="/accesorios">
                        <button className="btnvc3">
                            VER COLECCION
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    </div>

  )
  
}

export default Landingtres