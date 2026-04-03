const Hero = () => {
  return (
    <section className="bg-nube-clara py-20 px-10 flex flex-col items-center text-center">
      <h1 className="text-azul-profundo text-5xl font-bold leading-tight">
        Luis Medina
      </h1>
      <h2 className="text-turquesa-tech text-2xl font-semibold mt-2">
        Traducción jurídica y localización de software 
      </h2>
      <p className="text-gris-carbon mt-6 text-xl max-w-3xl">
        Traductor certificado por la American Translators Association  y perito traductor autorizado por el Supremo Tribunal de Justicia del Estado de Colima.
      </p>
      <p className="text-gris-carbon mt-6 text-xl max-w-3xl"> 
        Desarrollador back-end en formación con dominio de JavaScript y Python.
      </p>
      <div className="flex gap-4 mt-8">
        <button 
          aria-label="Contactar a Luis Medina para servicios de traducción"
          className="border-2 border-azul-profundo text-azul-profundo px-8 py-3 rounded-lg font-bold hover:bg-nube-clara transition-all shadow-md">
          Contactar
        </button>
        <a 
          href="https://github.com/LuisMedinaMST"
          target="_blank"
          rel="noopener noreferrer"
          className="border-2 border-azul-profundo text-azul-profundo px-8 py-3 rounded-lg font-bold hover:bg-nube-clara transition-all flex items-center">
          Ver GitHub
        </a>
      </div>
    </section>
  );
};

export default Hero;