import Portafolio from './components/Portafolio'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustBar from './components/TrustBar'
import Servicios from './components/Servicios'
import SobreMi from './components/SobreMi'
import Contacto from './components/Contacto'
import Testimonios from './components/Testimonios'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-nube-clara">
      <Navbar /> 
      
      <div id="inicio">
        <Hero />
      </div>
      
      <TrustBar />
      
      <div id="servicios">
        <Servicios />
      </div>

      <div id="portafolio">
        <Portafolio />
      </div>
      
      <div id="sobre-mi">
        <SobreMi />
      </div>

      <div id="testimonios">
        <Testimonios />
      </div>
      
      <div id="contacto">
        <Contacto />
      </div>

      {/* 💡 ¡Listo! El footer ahora vive dentro del contenedor principal */}
      <Footer /> 
    </div>
  )
}

export default App
