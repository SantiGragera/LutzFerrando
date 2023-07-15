import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='todoF'>
        <div className="logos">
            <div className="linea"></div>
            <img className='redes' src="/public/main/logoig.png" alt="" />
            <img className='redes' src="/public/main/logofb.png" alt="" />
            <img className='logodelfooter' src="/public/main/logogo.png" alt="" />
            <img className='redes' src="/public/main/logogm.png" alt="" />
            <img className='redes' src="/public/main/logowp.png" alt="" />
            <div className="linea"></div>
        </div>
        <div className="politics">
            <div className="copy">
                <h3>No Copyright Intended, 2023</h3>
            </div>
            <div className="legal">
                <h3>Informacion Legal</h3>
                <h3>Politica Privacidad</h3>
            </div>
        </div>
    </div>
  )
}

export default Footer