import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='todoF'>
        <div className="logos">
            <div className="linea"></div>
            <img className='redes' src="/main/logoig.png" alt="" />
            <img className='redes' src="/main/logofb.png" alt="" />
            <img className='logodelfooter' src="/main/logogo.png" alt="" />
            <img className='redes' src="/main/logogm.png" alt="" />
            <img className='redes' src="/main/logowp.png" alt="" />
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