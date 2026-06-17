import React from 'react';

const reseñas = [
  {
    cita: "As a localization coordinator/Project Manager, I rely on excellent translators to provide a quality job. Because I'm an experienced Spanish translator myself, I have very high expectations for Spanish translators. Luis has always met and at times surpassed those very high expectations. He is professional, responsive, and reliable. His language skills are superb. His translation into Mexican Spanish flows very naturally, is correct in grammar, and exudes an exquisite style. I highly recommend Luis as one of the best English into Mex Spanish translators available today.",
    autor: "Silvia Carvahlo",
    compañia: "Líder de localización",
    contexto: "Localización"
  },
  {
    cita: "Luis and his team have done a great job for us! They have helped us in person, on Zoom, and with documents. We have used them in small settings, with government meetings, and in large group events. They are some of the best!",
    autor: "Joe Darago",
    compañia: "Director ejecutivo de The Hope Effect",
    contexto: "Traducción e interpretación"
  },
  {
    cita: "I have had the pleasure of working with Luis for several years. I have used his services to translate “Spanish to English” medical documents and legal documents related to adoption / home ownership. He has accompanied me to school meetings as well as medical appointments. Luis has been professional, patient and knowledgeable. All translated documents have met the scrutiny of powers that be in America. The turnaround time has always been quick and the cost reasonable. I highly recommend him.",
    autor: "Donna Pigalargi",
    compañia: "Cliente",
    contexto: "Traducción e interpretación"
  },
];

const Testimonios = () => {
  return (
    <section id="testimonios" className="bg-white py-24 px-6 font-sans">
      <div className="max-w-6xl mx-auto">
        
        {/* Encabezado */}
        <div className="text-center mb-16">
          <span className="text-[#1fa4a9] font-bold tracking-widest uppercase text-sm block mb-3">
            Prueba social verificable
          </span>
          <h2 className="text-[#0f2a44] text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
            Respaldado por opiniones reales
          </h2>
          <div className="h-1.5 w-24 bg-[#1fa4a9] mx-auto rounded-full mb-6"></div>
          <p className="text-[#3a3f45] text-lg max-w-2xl mx-auto">
            Testimonios reales y verificables extraídos directamente de las recomendaciones públicas de mi perfil en LinkedIn y Google Business.
          </p>
        </div>

        {/* Grid de Testimonios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reseñas.map((resena, index) => (
            <div 
              key={index}
              className="bg-[#f4f6f8] rounded-2xl p-8 flex flex-col justify-between border border-gray-100 hover:shadow-lg transition-all duration-300 relative group"
            >
              {/* Comilla decorativa gigante */}
              <span className="absolute top-4 right-6 text-6xl text-[#1fa4a9]/10 font-serif select-none group-hover:text-[#1fa4a9]/20 transition-colors">
                “
              </span>

              {/* Texto de la cita */}
              <p className="text-[#3a3f45] text-sm leading-relaxed italic relative z-10 mb-6">
                "{resena.cita}"
              </p>

              {/* Autor y origen */}
              <div className="border-t border-gray-200/60 pt-4 mt-auto">
                <h4 className="text-[#0f2a44] font-bold text-base">
                  {resena.autor}
                </h4>
                <p className="text-[#3a3f45] text-xs font-medium">
                  {resena.compañia}
                </p>
                <span className="inline-block text-[10px] uppercase font-bold tracking-wider text-[#1fa4a9] mt-2 bg-white px-2 py-0.5 rounded-md border border-[#1fa4a9]/10">
                  {resena.contexto}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonios;