import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './NavBarCat.css'

const NavBarCat = () => {

    const [menuVisible, setMenuVisible] = useState(false);

  return (
      <div className='navbar cat'>
          <div className='nbLogo catlog'>
              <Link to="/">
                  <img src="/public/main/logogo.png" alt="logo" />
              </Link>
          </div>
          <div className={`nbList ${menuVisible && 'visible'}`}>
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
                  <img src="/public/main/cerrar.png" alt="" />
              </button>
          </div>
          <div className='nbCarrito'>
                <Link to="/cart">
                    <img className='cartito' src="/public/main/carrito.png" alt="carritologo" />
                </Link>
          </div>
          <div>
              <button className='abrir-menu hamburlogo' onClick={() => setMenuVisible(true)} >
                  <img src="/public/main/hambur.png" alt="logo de hamburguesa" />
              </button>
          </div>
      </div>
  )
}

export default NavBarCat