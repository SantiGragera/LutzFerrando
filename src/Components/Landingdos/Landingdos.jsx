import React from 'react'
import './landingdos.css'
import { Link } from 'react-router-dom'

const Landingdos = () => {
  return (
    <div className="todolp2">  
        <div className="Landing2ttl">
            <h2 className="titulolpd">
                <span className='toqueLD'> LENTES </span> 
                <br /> RECETADOS
            </h2>
            <Link className="links" to={"/lentes"}>
                <button className="btnvc">
                    VER COLECCION
                </button>
            </Link>

        </div>
        <div className='landing2'>
            <div className="cuno">
                <div className="cards">
                    <div className="imgcard carduno">
                        <img src="/public/main/lenteLp.png" alt="" />
                    </div>
                    <div className="textoscard">
                        <h2 className="cardtitle">
                            SQUARE TERRA
                        </h2>
                        <h5 className="cardprecio">
                            $42.900
                        </h5>
                          <Link to={'/lentes'} >
                              <button className='btncard'>ver más</button>
                          </Link>
                    </div>
                </div>
            </div>

            <div className="cdos">
                <div className="cards">
                    <div className="imgcard cardo">
                        <img src="/public/main/lenteLpDos.png" alt="" />
                    </div>
                    <div className="textoscard">
                        <h2 className="cardtitle">
                            HOLBOX
                        </h2>
                        <h5 className="cardprecio">
                            $49.980
                        </h5>
                          <Link to={'/lentes'}>
                              <button className='btncard'>ver más</button>
                          </Link>
                    </div>
                </div>
            </div>

            <div className="ctres">
                <div className="cards">
                    <div className="imgcard cardtres">
                        <img src="/public/main/lenteLpTres.png" alt="" />
                    </div>
                    <div className="textoscard">
                        <h2 className="cardtitle">
                            FRIDA
                        </h2>
                        <h5 className="cardprecio">
                            $42.900
                        </h5>
                          <Link to={'/lentes'}>
                              <button className='btncard'>ver más</button>
                          </Link>
                    </div>
                </div>
            </div>

        </div>
    </div>
    

  )

}

export default Landingdos