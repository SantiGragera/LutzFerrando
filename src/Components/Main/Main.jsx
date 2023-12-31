import React from 'react'
import './Main.css'
import Landingdos from '../Landingdos/Landingdos'
import Landingtres from '../Landingtres/Landingtres'
import LandingFooter from '../LandingFooter/LandingFooter'
import Footer from '../Footer/Footer'
import NavBar from '../NavBar/NavBar'
import { Link } from 'react-router-dom'

const Main = () => {
  return (
    <div className='todomain'>
      <NavBar/>
      <div className='landingp1'>
        <div className='landingText'>
          <h1>La <span className='toqueta'>mejor</span> 
            <br /> calidad
            <br /> en lentes
            <br /> de sol
          </h1>
          <Link className="links textd" to="/lentesdesol">
            <button className="btnvcl">
              VER COLECCION
            </button>
          </Link>

        </div>
        <div className='imagenmain'>
          <img className='distor' src="/main/lentemain.png" alt="" />
        </div>
      </div>
      <Landingdos />
      <Landingtres />
      <LandingFooter />
      <Footer/>
    </div>
  )
}

export default Main