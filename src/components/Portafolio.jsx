import React from 'react';

const proyectos = [
  {
    categoria: "Localización y software",
    titulo: "Localización de plataforma SaaS de grabación de podcasts",
    descripcion: "Traducción completa de la interfaz de usuario (UI/UX), de los mensajes del sistema y de los blogs de la plataforma. Se estructuraron y gestionaron arquitecturas de archivos JSON/YAML para garantizar un despliegue bilingüe sin fricciones técnicas.",
    impacto: "Adaptabilidad cultural del 100% para el mercado hispanohablante, sin necesidad de enviar al traductor todo el contenido en formato de Word.",
    tags: ["React", "JSON", "I18n", "SaaS"],
    icono: "🌐"
  },
  {
    categoria: "Traducción jurídica de alto perfil",
    titulo: "Traducción pericial de documentos corporativos",
    descripcion: "Traducción oficial y peritada de paquetes de actas constitutivas, contratos y pagarés para diferentes empresas de agroindustria de Tecomán, Colima, México.",
    impacto: "Validación legal inmediata ante autoridades gubernamentales para el cumplimiento de disposiciones en los plazos previstos.",
    tags: ["Derecho corporativo", "Peritaje", "Contratos"],
    icono: "⚖️"
  },
  {
    categoria: "Traducción e interpretación",
    titulo: "Traducción e interpretación para la firma de convenios",
    descripcion: "Interpretación consecutiva y simultánea en diversas reuniones de trabajo presenciales y en línea, entre autoridades gubernamentales y una asociación civil. Traducción de decenas de documentos internos de la asociación civil.",
    impacto: "Establecimiento de objetivos y firma de convenios entre la asociación civil y autoridades gubernamentales.",
    tags: ["Interpretación", "Gobierno", "Sociedad civil"],
    icono: "🎙️"
  }
];

const Portafolio = () => {
  return (
    <section id="portafolio" className="bg-[#f4f6f8] py-24 px-6 font-sans">
      <div className="max-w-6xl mx-auto">
        
        {/* Encabezado de la sección */}
        <div className="text-center mb-16">
          <span className="text-[#1fa4a9] font-bold tracking-widest uppercase text-sm block mb-3">
            Casos de éxito y proyectos
          </span>
          <h2 className="text-[#0f2a44] text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
            Soluciones con impacto real
          </h2>
          <div className="h-1.5 w-24 bg-[#1fa4a9] mx-auto rounded-full mb-6"></div>
          <p className="text-[#3a3f45] text-lg max-w-2xl mx-auto">
            Una muestra de cómo la precisión en el lenguaje y la arquitectura del código se unen para resolver desafíos técnicos y legales.
          </p>
        </div>

        {/* Cuadrícula Moderna (Grid con alturas idénticas h-full) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {proyectos.map((proyecto, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full group"
            >
              {/* Contenedor Superior (Información) */}
              <div className="flex flex-col flex-1">
                {/* Categoría e Ícono */}
                <div className="flex justify-between items-start mb-6 gap-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider bg-[#f4f6f8] text-[#0f2a44] px-3 py-1.5 rounded-full whitespace-nowrap">
                    {proyecto.categoria}
                  </span>
                  <span className="text-3xl shrink-0 group-hover:scale-110 transition-transform duration-300">
                    {proyecto.icono}
                  </span>
                </div>

                {/* Título */}
                <h3 className="text-[#0f2a44] text-xl font-bold mb-4 min-h-[56px] flex items-center group-hover:text-[#1fa4a9] transition-colors">
                  {proyecto.titulo}
                </h3>

                {/* Descripción */}
                <p className="text-[#3a3f45] text-sm leading-relaxed mb-6 flex-1">
                  {proyecto.descripcion}
                </p>

                {/* Bloque de Impacto (Optimizado en espaciado) */}
                <div className="bg-[#f4f6f8]/60 border-l-4 border-[#1fa4a9] p-4 rounded-r-lg mb-6">
                  <div className="text-xs text-[#3a3f45] font-semibold italic">
                    <strong className="text-[#0f2a44] not-italic block text-[11px] uppercase tracking-wide mb-1">
                      Impacto medible:
                    </strong>
                    {proyecto.impacto}
                  </div>
                </div>
              </div>

              {/* Contenedor Inferior (Tags alineados magnéticamente abajo) */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-100 shrink-0">
                {proyecto.tags.map((tag, idx) => (
                  <span 
                    key={idx} 
                    className="text-[11px] font-medium bg-[#0f2a44]/5 text-[#0f2a44] px-2.5 py-1 rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

        {/* Cierre Estratégico */}
        <div className="text-center mt-14">
          <p className="text-[#3a3f45] text-sm font-medium mb-4">
            ¿Tienes un proyecto técnico o legal con requerimientos estrictos?
          </p>
          <a 
            href="#contacto" 
            className="inline-flex items-center gap-2 text-[#1fa4a9] font-bold text-base hover:text-[#0f2a44] transition-colors group"
          >
            Hablemos de tu caso de éxito 
            <span className="transform group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>

      </div>
    </section>
  );
};

export default Portafolio;