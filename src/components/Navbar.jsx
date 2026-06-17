import React from 'react';
import LogoLuisMedina from '../assets/logo-navbar-transparente.png'; 

const Navbar = () => {
  // Aquí usamos un comentario JS normal fuera del bloque return
  // Configuramos el fondo claro y texto oscuro para buen contraste
  return (
    <nav className="bg-azul-profundo text-white py-3 px-6 sticky top-0 z-50 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        
        {/* Logo Gráfico */}
        <div className="flex items-center">
          <a href="/" className="block transition-transform hover:scale-105">
            <img 
              src={LogoLuisMedina} 
              alt="Logotipo Luis Medina - Traductor y Desarrollador" 
              className="h-14 md:h-32 w-auto object-contain rounded-full" 
            />
          </a>
        </div>

        {/* Enlaces de Navegación (Desktop) */}
        <div className="hidden md:flex space-x-8 items-center font-medium">
          <a href="#sobre-mi" className="text-nube-clara hover:text-turquesa-tech transition-colors font-bold">Sobre mí</a>
          <a href="#servicios" className="text-nube-clara hover:text-turquesa-tech transition-colors font-bold">Servicios</a>
          <a href="#portafolio" className="text-nube-clara hover:text-turquesa-tech transition-colors font-bold">Portafolio</a>
          <a href="#contacto" className="bg-turquesa-tech text-nube-clara px-5 py-2 rounded-lg hover:bg-azul-profundo hover:text-nube-clara transition-all font-bold shadow-sm">
            Cotización
          </a>
        </div>

        {/* Menú Hamburguesa (Mobile) */}
        <div className="md:hidden flex items-center">
          <button className="text-azul-profundo hover:text-turquesa-tech focus:outline-none" aria-label="Abrir menú">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;