const Hero = () => {
  return (
    <section className="bg-nube-clara py-24 px-6 flex flex-col items-center text-center">
      <span className="text-turquesa-tech font-bold tracking-widest uppercase text-sm mb-4">
        Traductor y desarrollador full stack 
      </span>

      <h1 className="text-azul-profundo text-5xl md:text-6xl font-extrabold leading-tight max-w-4xl">
        Traducción jurídica y localización de software: <br />
        <span className="text-turquesa-tech">El encuentro entre el derecho y el código de programación</span>
      </h1>

      <h2 className="text-gris-carbon text-2xl font-semibold mt-6">
        Luis Medina <span className="font-normal text-lg">| M.A. en Traducción e Interpretación | Desarrollador full stack</span>
      </h2>
      
      <p className="text-gris-carbon mt-6 text-xl max-w-3xl leading-relaxed">
        Traductor certificado por la ATA y perito autorizado por el STJ de Colima. 
        Con más de 20 años de trayectoria, combino el rigor legal con el dominio activo de 
        <span className="font-mono text-azul-profundo"> JavaScript, Python y Git</span>  para localizar entornos técnicos sin errores conceptuales.
      </p>
      
      <div className="flex flex-col md:flex-row gap-6 mt-10">
        <button 
          aria-label="Solicitar presupuesto legal o técnico"
          className="bg-turquesa-tech text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-[#0f2a44] transition-all shadow-lg transform hover:-translate-y-1">
          Solicitar cotización
        </button>
        
        <a 
          href="https://github.com/LuisMedinaMST"
          target="_blank"
          rel="noopener noreferrer"
          className="border-2 border-azul-profundo text-[#0f2a44] px-10 py-4 rounded-xl font-bold text-lg hover:bg-[#f4f6f8] transition-all flex items-center justify-center gap-2 transform hover:-translate-y-1">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
          Validar código en GitHub
        </a>
      </div>
    </section>
  );
};

export default Hero;