import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0f2a44] text-[#f4f6f8] pt-12 pb-6 px-6 border-t border-[#1fa4a9]/20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        
        {/* Columna 1: Branding, Enfoque y Redes Sociales */}
        <div className="flex flex-col gap-4">
          <div>
            <span className="text-xl font-extrabold tracking-tight text-white block">
              Luis Medina
            </span>
            <p className="text-[#f4f6f8]/80 text-sm leading-relaxed max-w-sm mt-2">
              Traducción jurídica certificada y localización de software. El punto de encuentro óptimo entre el rigor legal y la arquitectura de código.
            </p>
          </div>

          {/* Enlaces a Redes Sociales con diseño UI/UX sutil pero accesible */}
          <div className="flex items-center gap-4 mt-2">
            {/* LinkedIn */}
            <a 
              href="https://www.linkedin.com/in/luis-medina-b6534910/" // Reemplaza con tu URL
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#f4f6f8]/70 hover:text-[#1fa4a9] transition-colors p-2 bg-[#3a3f45]/20 rounded-lg hover:bg-[#3a3f45]/40"
              aria-label="LinkedIn de Luis Medina"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>

            {/* YouTube */}
            <a 
              href="https://www.youtube.com/@luismedinatraductor" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#f4f6f8]/70 hover:text-[#1fa4a9] transition-colors p-2 bg-[#3a3f45]/20 rounded-lg hover:bg-[#3a3f45]/40"
              aria-label="Canal de YouTube de Luis Medina"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>

            {/* Facebook (Opcional, omitir si no generas contenido de negocio ahí) */}
            <a 
              href="https://www.facebook.com/luis.felipe.5477/?locale=es_LA" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#f4f6f8]/70 hover:text-[#1fa4a9] transition-colors p-2 bg-[#3a3f45]/20 rounded-lg hover:bg-[#3a3f45]/40"
              aria-label="Facebook de Luis Medina"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Columna 2: Navegación Interna (UX) */}
        <div className="flex flex-col gap-3">
          <h4 className="text-[#1fa4a9] font-bold uppercase tracking-wider text-xs">
            Navegación
          </h4>
          <ul className="grid grid-cols-2 gap-2 text-sm">
            <li><a href="#inicio" className="hover:text-[#1fa4a9] transition-colors text-[#f4f6f8]/90">Inicio</a></li>
            <li><a href="#sobre-mi" className="hover:text-[#1fa4a9] transition-colors text-[#f4f6f8]/90">Sobre mí</a></li>
            <li><a href="#servicios" className="hover:text-[#1fa4a9] transition-colors text-[#f4f6f8]/90">Servicios</a></li>
            <li><a href="#portafolio" className="hover:text-[#1fa4a9] transition-colors text-[#f4f6f8]/90">Portafolio</a></li>
            <li><a href="#contacto" className="hover:text-[#1fa4a9] transition-colors text-[#f4f6f8]/90">Contacto</a></li>
          </ul>
        </div>

        {/* Columna 3: Validaciones de Autoridad (Marketing) */}
        <div className="flex flex-col gap-3">
          <h4 className="text-[#1fa4a9] font-bold uppercase tracking-wider text-xs">
            Acreditaciones
          </h4>
          <p className="text-sm text-[#f4f6f8]/80 leading-relaxed">
            • Traductor certificado por la American Translators Association (N.º 516315)<br />
            • Perito oficial del Poder Judicial del Estado de Colima<br />
            • Full-stack dev en formación continua
          </p>
        </div>

      </div>

      {/* Barra de Derechos de Autor */}
      <div className="max-w-6xl mx-auto pt-6 border-t border-[#3a3f45]/30 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#f4f6f8]/60">
        <p>
          &copy; {currentYear} Luis Medina. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;