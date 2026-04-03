const TrustBar = () => {
  const certifications = [
    {
      title: "Certificado por la American Translators Association",
      subtitle: "Traducción de inglés a español",
      info: "Certificación #511370", 
      icon: "📜" 
    },
    {
      title: "Perito traductor",
      subtitle: "Supremo Tribunal de Justicia del Estado de Colima",
      info: "Autorizado por el Supremo Tribunal",
      icon: "⚖️"
    },
    {
      title: "Exvicepresidente de la Organización Mexicana de Traductores",
      subtitle: "Liderazgo gremial",
      info: "Gestión 2017-2019",
      icon: "👥"
    },
    {
      title: "Fullstack Dev",
      subtitle: "JS & Python",
      info: "En formación activa desde 2024", 
      icon: "💻"
    }
  ];

  return (
    <section className="bg-azul-profundo py-10 border-t border-turquesa-tech/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {certifications.map((cert, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center group cursor-default"
            >
              <div className="text-4xl mb-3 grayscale group-hover:grayscale-0 transition-all duration-300 transform group-hover:scale-110">
                {cert.icon}
              </div>
              <h3 className="text-nube-clara font-bold text-sm md:text-base uppercase tracking-widest">
                {cert.title}
              </h3>
              <p className="text-turquesa-tech text-xs font-semibold mt-1">
                {cert.subtitle}
              </p>
              <p className="text-gris-carbon text-[10px] mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                {cert.info}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;