import React from 'react';

const servicios = [
  {
    titulo: "Documentación jurídica y de negocios",
    descripcion: "Traducción pericial y corporativa con validez oficial para procesos nacionales e internacionales.",
    detalles: [
      "Contratos", 
      "Actas civiles",
      "Actas constitutivas",
      "Pagarés",
      "Documentación académica",
    ],
    icono: "⚖️",
    color: "border-[#0f2a44]"
  },
  {
    titulo: "Software y localización",
    descripcion: "Traducción de UI/UX y documentación técnica respaldada por conocimiento activo en programación.",
    detalles: [
      "Localización de aplicaciones SaaS",
      "Documentación de API",
      "Traducción de archivos JSON/YAML",
      "Optimización SEO bilingüe",
      "Desarrollo de software",
    ],
    icono: "💻",
    color: "border-[#1fa4a9]"
  },
  {
    titulo: "Interpretación profesional",
    descripcion: "Comunicación oral presencial y en línea para entornos de alta exigencia.",
    detalles: [
      "Reuniones de negocios y corporativas",
      "Conferencias y ruedas de prensa",
      "Talleres y cursos de capacitación",
      "Consultas médicas especializadas",
      "Interpretación remota (en línea)"
    ],
    icono: "🎙️",
    color: "border-[#0f2a44]" 
  },
  {
    titulo: "Capacitación",
    descripcion: "Cursos o talleres de capacitación para personas físicas y morales.",
    detalles: [
      "Inglés desde el nivel A1 hasta el C1",
      "Técnicas de traducción",
      "Prácticas de interpretación consecutiva y simultánea",
      "Uso de herramientas para la traducción profesional",
      "Programación de software básica (JavaScript y Python)"
    ],
    icono: "🎓",
    color: "border-[#1fa4a9]" 
  }
];

const Servicios = () => {
  return (
    <section className="bg-[#f4f6f8] py-24 px-6 font-sans">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-[#0f2a44] text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
            Servicios especializados
          </h2>
          <div className="h-1.5 w-24 bg-[#1fa4a9] mx-auto rounded-full"></div>
          <p className="mt-6 text-[gris-carbon] text-lg max-w-2xl mx-auto">
            Soluciones lingüísticas y tecnológicas para los sectores empresarial, legal, gubernamental y de tecnologías de información.
          </p>
        </div>

        <div className="flex flex-col gap-8">
          {servicios.map((servicio, index) => (
            <div 
              key={index} 
              className={`group flex flex-col lg:flex-row bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border-l-8 ${servicio.color}`}
            >
              {/* Sección del Icono */}
              <div className="p-8 lg:p-10 flex items-center justify-center bg-gray-50 lg:w-48 shrink-0">
                <div className="text-6xl group-hover:scale-110 transition-transform duration-300">
                  {servicio.icono}
                </div>
              </div>

              {/* Sección de Contenido Principal */}
              <div className="p-8 lg:p-10 flex-grow border-b lg:border-b-0 lg:border-r border-gray-100 flex flex-col justify-center">
                <h3 className="text-[#0f2a44] text-2xl font-bold mb-3">
                  {servicio.titulo}
                </h3>
                <p className="text-[#3a3f45] text-lg leading-relaxed">
                  {servicio.descripcion}
                </p>
              </div>

              {/* Sección de Detalles / Viñetas */}
              <div className="p-8 lg:p-10 lg:w-1/3 shrink-0 bg-white flex flex-col justify-center">
                <ul className="space-y-3">
                  {servicio.detalles.map((item, idx) => (
                    <li key={idx} className="flex items-start text-[#3a3f45] text-sm">
                      <span className="text-[#1fa4a9] font-bold mr-3 mt-0.5">✓</span>
                      <span className="leading-tight">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Servicios;