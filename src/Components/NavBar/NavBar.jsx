import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {

    const [menuVisible, setMenuVisible] = useState(false);

  return (
    <div className='navbar'>
        <div className='nbLogo'>
            <Link to="/">
                 <img src="/main/logogo.png" alt="logo" />
            </Link>
        </div>
        <div  className={`nbList ${menuVisible && 'visible'}`}> 
            <ul>
                <li>
                      <Link to="/lentes">
                          Lentes
                      </Link>
                </li>
                <li>
                    <Link to="/lentesdesol">
                        Lentes De Sol
                    </Link>
                </li>
                <li>
                      <Link to="/accesorios">
                          Accesorios
                      </Link>
                </li>
                <li>
                      <Link to="/nosotros">
                          Nosotros
                      </Link>
                </li>
            </ul>
            <button className='cerrar-menu cerrarhambur' onClick={() => setMenuVisible(false)}>
                <img src="/main/cerrar.png" alt="" />
            </button>
        </div>
        <div className='nbCarrito'>
              <Link to="/cart">
                  <img className='cartito' src="/main/carrito.png" alt="carritologo" />
              </Link>
        </div>
        <div>
            <button className='abrir-menu hamburlogo' onClick={() => setMenuVisible(true)} >
                <img src="/main/hambur.png" alt="logo de hamburguesa" />
            </button>
        </div>
    </div>
  )
}

export default NavBar