import React from 'react'
import './Nosotros.css'
import NavBar from '../NavBar/NavBar'
import { Link } from 'react-router-dom'


const Nosotros = () => {
  return (
    <div className='todomainNos'>
        <NavBar />
        <div className="sobreNosotrosTd">
              <div className='presentacion'>
                  <h4 className='titulos'> <span className="toque spanbienv">Bienvenido</span> a Lutz Ferrando JM !</h4>
                  <p className='parrafos'>En Lutz Ferrando, nos enorgullece brindar soluciones visuales de calidad y cuidado
                      ocular excepcional a nuestra comunidad. Con una trayectoria
                      sólida en el campo de la optometría, nos esforzamos por ofrecer servicios
                      personalizados y productos ópticos de vanguardia para satisfacer las necesidades
                      individuales de cada cliente.
                  </p>
              </div>
              <div className="equipo">
                  <h4 className='titulos'>Nuestro <span className="toque">Equipo</span></h4>
                  <div className='titmasimg'>
                      <p className='parrafos'>Contamos con un equipo de profesionales altamente capacitados y apasionados
                          por su trabajo. Nuestros ópticos y optometristas cuentan con una amplia experiencia y conocimientos
                          en el campo de la salud visual. Están dedicados a realizar exámenes oculares completos y precisos,
                          utilizando tecnología de última generación para obtener resultados confiables y precisos.
                      </p>
                      <img src="public/main/optico.jpg" alt="optico trabjando" />
                  </div>
              </div>
              <div className='armazones'>
                <h4 className="titulos"> <span className="toque">Nuestros</span> Productos</h4>
                <p className="parrafoperso">Nuestra amplia selección de armazones de lentes y accesorios 
                nos permite ofrecer soluciones visuales que combinan estilo y funcionalidad. Trabajamos con 
                marcas reconocidas y productos de calidad para garantizar la satisfacción y comodidad de 
                nuestros clientes.</p>
                <div className='fotosnosotro'>
                    <Link to="/accesorios">
                        <img className='imgNos' src="public/productos/accesorios/aosept.png" alt="" />
                    </Link>
                    <Link to="/lentes">
                        <img className='imgNos' src="public/productos/lentesrecetados/barcelonacarey.png" alt="" />
                    </Link>
                    <Link to="/lentesdesol">
                        <img className='imgNos' src="public/productos/lentesdesol/squarerosa.png" alt="" />
                    </Link>
                </div>
              </div>
            <div className="ubicacion">
                <h4 className="titulos">Visitenos!</h4>
                <div className="titmasimg">
                    <p className="parrafos">
                        Nos complace ser parte de la comunidad de Jesús María, Córdoba, y estamos
                        comprometidos con su salud visual y bienestar. Si estás buscando servicios
                        ópticos confiables y atención personalizada, te invitamos a visitar nuestra
                        óptica y descubrir cómo podemos ayudarte a tener una visión clara y saludable.
                    </p>
                    <iframe className="mapita" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4837.554170693268!2d-64.09792864440833!3d-30.979763738302744!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432639cee31eb91%3A0xec47d91fde110c1c!2sLutz%20Ferrando!5e0!3m2!1ses-419!2sar!4v1689024435060!5m2!1ses-419!2sar" 
                    loading="lazy" referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
            </div>
            <div className="redesNosotros">
                <h4 className="titulos">Nuestras Redes y Contacto</h4>
                <div className="redesIframes">
                    <iframe className='instagram' src="//www.instagram.com/p/CuZemfaOEf4/embed" frameBorder="0"></iframe>
                    <iframe className="facebook" src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FLutzFerrando.jm%2Fposts%2Fpfbid017jekKw5FGKd7mUEmEzLo1bu6NdSaYZkZvTddPGvxFAPJ3kXhxZUatbyS1oWVJiMl&show_text=true&width=500" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                    <p className="parrafos">Telefono Fijo: 03525 42-3774
                    <br />Email: jm.lutzferrando@gmail.com
                    <br />Horarios:
                    <br />Lunes a Viernes 8:30-12:30 y 17:00-20:45 
                    <br />Sabados 9:00-12:30
                    <br />Domingos Cerrado
                    </p>
                </div>
            </div>
        </div>
    </div>            

  )
}

export default Nosotros