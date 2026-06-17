import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-azul-profundo text-nube-clara pt-12 pb-6 px-6 border-t border-turquesa-tech/20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        
        {/* Columna 1: Branding y Enfoque */}
        <div className="flex flex-col gap-3">
          <span className="text-xl font-extrabold tracking-tight text-white">
            Luis Medina
          </span>
          <p className="text-nube-clara/80 text-sm leading-relaxed max-w-sm">
            Traducción jurídica certificada y localización de software. El punto de encuentro óptimo entre el rigor legal y la arquitectura de código.
          </p>
        </div>

        {/* Columna 2: Navegación Interna (UX) */}
        <div className="flex flex-col gap-3">
          <h4 className="text-turquesa-tech font-bold uppercase tracking-wider text-xs">
            Navegación
          </h4>
          <ul className="grid grid-cols-2 gap-2 text-sm">
            <li><a href="#inicio" className="hover:text-turquesa-tech transition-colors text-nube-clara/90">Inicio</a></li>
            <li><a href="#servicios" className="hover:text-turquesa-tech transition-colors text-nube-clara/90">Servicios</a></li>
            <li><a href="#portafolio" className="hover:text-turquesa-tech transition-colors text-nube-clara/90">Portafolio</a></li>
            <li><a href="#sobre-mi" className="hover:text-turquesa-tech transition-colors text-nube-clara/90">Sobre mí</a></li>
            <li><a href="#testimonios" className="hover:text-turquesa-tech transition-colors text-nube-clara/90">Testimonios</a></li>
            <li><a href="#contacto" className="hover:text-turquesa-tech transition-colors text-nube-clara/90">Contacto</a></li>
          </ul>
        </div>

        {/* Columna 3: Validaciones de Autoridad (Marketing) */}
        <div className="flex flex-col gap-3">
          <h4 className="text-turquesa-tech font-bold uppercase tracking-wider text-xs">
            Acreditaciones
          </h4>
          <p className="text-sm text-nube-clara/80 leading-relaxed">
            • Traductor certificado por la American Translators Association (N.º 516315)<br />
            • Perito oficial del Poder Judicial del Estado de Colima<br />
            • Full-stack dev en formación continua
          </p>
        </div>

      </div>

      {/* Barra de Derechos de Autor */}
      <div className="max-w-6xl mx-auto pt-6 border-t border-gris-carbon/30 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-nube-clara/60">
        <p>
          &copy; {currentYear} Luis Medina. Todos los derechos reservados.
        </p>
        <p className="flex items-center gap-1">
          Construido con <span className="font-mono text-turquesa-tech">React & Tailwind v4</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;