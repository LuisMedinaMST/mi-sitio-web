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
        Certificado por la ATA e intérprete experto. 
        Desarrollador back-end en formación con dominio de JavaScript y Python.
      </p>
      <div className="flex gap-4 mt-8">
        <button className="bg-turquesa-tech text-white px-8 py-3 rounded-lg font-bold hover:bg-azul-profundo transition-colors">
          Contactar
        </button>
        <button className="border-2 border-azul-profundo text-azul-profundo px-8 py-3 rounded-lg font-bold hover:bg-nube-clara transition-colors">
          Ver GitHub
        </button>
      </div>
    </section>
  );
};

export default Hero;