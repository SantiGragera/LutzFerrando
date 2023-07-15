import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './NavBarCat.css'

const NavBarCat = () => {

    const [menuVisible, setMenuVisible] = useState(false);

  return (
      <div className='navbar cat'>
          <div className='nbLogo catlog'>
              <Link className="textd" to="/">
                  <img src="/main/logogo.png" alt="logo" />
              </Link>
          </div>
          <div className={`nbList ${menuVisible && 'visible'}`}>
              <ul>
              <li>
                      <Link className="textd" to="/lentes">
                          Lentes
                      </Link>
                </li>
                <li>
                    <Link className="textd" to="/lentesdesol">
                        Lentes De Sol
                    </Link>
                </li>
                <li>
                      <Link className="textd" to="/accesorios">
                          Accesorios
                      </Link>
                </li>
                <li>
                      <Link className="textd" to="/nosotros">
                          Nosotros
                      </Link>
                </li>
              </ul>
              <button className='cerrar-menu cerrarhambur' onClick={() => setMenuVisible(false)}>
                  <img src="/main/cerrar.png" alt="" />
              </button>
          </div>
          <div className='nbCarrito'>
                <Link className="textd" to="/cart">
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

export default NavBarCat