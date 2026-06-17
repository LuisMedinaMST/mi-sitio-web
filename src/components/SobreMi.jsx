import React from 'react';
import FotoLuisMedina from '../assets/FOTO_LUIS_MEDINA.png'

const SobreMi = () => {
  return (
    <section className="bg-[#f4f6f8] py-20 px-6">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-start gap-12">
        
        {/* Columna Izquierda: Fotografía con un toque moderno */}
        <div className="w-full lg:w-1/3 flex justify-center lg:sticky lg:top-24">
          <div className="w-72 h-72 bg-[#0f2a44] rounded-2xl shadow-2xl flex items-center justify-center border-b-4 border-r-4 border-[#1fa4a9] transition-transform hover:-translate-y-2 overflow-hidden">
             <img 
              src={FotoLuisMedina} // Usamos la variable que importamos arriba
              alt="Luis Medina - Traductor certificado por la ATA y desarrollador" // Texto alt descriptivo (¡importante para SEO!)
              className="w-full h-full object-cover object-top" // Asegura que la foto llene el contenedor y se recorte bien
            />
          </div>
        </div>

        {/* Columna Derecha: Contenido */}
        <div className="flex-1">
          {/* Título Principal (Gancho) */}
          <h2 className="text-4xl md:text-5xl font-bold text-[#0f2a44] leading-tight mb-6">
            Donde la precisión lingüística encuentra la <span className="text-[#1fa4a9]">arquitectura del código.</span>
          </h2>
          
          {/* El Pitch */}
          <div className="text-[#3a3f45] text-lg leading-relaxed mb-10 space-y-5">
            <p>
              Con más de 20 años de experiencia en la intersección del lenguaje y la tecnología, evolucioné de ser un traductor certificado por la ATA y perito oficial a convertirme en un <strong>desarrollador full stack</strong> enfocado en soluciones reales de localización.
            </p>
            <p>
              Mi trayectoria no es solo sobre palabras; es sobre sistemas. Desde la vicepresidencia de la Organización Mexicana de Traductores hasta el dominio de <strong className="text-[#1fa4a9]">JavaScript, Python y Git</strong>, ayudo a empresas a derribar barreras idiomáticas mediante software robusto y terminología impecable.
            </p>
          </div>

          {/* Separador Visual */}
          <div className="h-px w-full bg-[#3a3f45] opacity-20 mb-10"></div>

          {/* Respaldo Profesional - Grid de Tarjetas para escanear rápido */}
          <h3 className="text-2xl font-bold text-[#0f2a44] mb-6">Mi respaldo profesional</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Tarjeta 1 */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-[#f4f6f8] border-l-4 border-l-[#1fa4a9] hover:shadow-md transition-shadow">
              <h4 className="font-bold text-[#0f2a44] mb-2">Formación académica</h4>
              <p className="text-[#3a3f45] text-sm leading-relaxed">Licenciatura en Lengua Inglesa y Maestría en Traducción e Interpretación por la Universidad de Colima.</p>
            </div>

            {/* Tarjeta 2 */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-[#f4f6f8] border-l-4 border-l-[#1fa4a9] hover:shadow-md transition-shadow">
              <h4 className="font-bold text-[#0f2a44] mb-2">Certificaciones</h4>
              <p className="text-[#3a3f45] text-sm leading-relaxed">Certificado de Traducción Jurídica (2005) y Certificación de la American Translators Association (ATA, 2016).</p>
            </div>

            {/* Tarjeta 3 */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-[#f4f6f8] border-l-4 border-l-[#1fa4a9] hover:shadow-md transition-shadow">
              <h4 className="font-bold text-[#0f2a44] mb-2">Peritaje oficial</h4>
              <p className="text-[#3a3f45] text-sm leading-relaxed">Auxiliar en la administración de justicia del Poder Judicial y traductor oficial en varios municipios de Colima.</p>
            </div>

            {/* Tarjeta 4 */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-[#f4f6f8] border-l-4 border-l-[#1fa4a9] hover:shadow-md transition-shadow">
              <h4 className="font-bold text-[#0f2a44] mb-2">Liderazgo en el gremio</h4>
              <p className="text-[#3a3f45] text-sm leading-relaxed">Exvicepresidente de la OMT (Organización Mexicana de Traductores) y formador de nuevos profesionales.</p>
            </div>
          </div>
          
          {/* Botón CTA (Call to Action) */}
          <div className="mt-10">
             <a 
               href="/Resume_LuisMedina_2026.pdf" 
               download="Resume_LuisMedina_2026.pdf"
               className="inline-flex items-center gap-2 bg-[#0f2a44] text-[#f4f6f8] font-bold py-3 px-8 rounded-lg hover:bg-[#1fa4a9] hover:-translate-y-1 transition-all duration-300 shadow-lg"
             >
               <span>📄</span> Descargar CV completo
             </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SobreMi;