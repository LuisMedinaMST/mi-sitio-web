import React, { useState } from 'react';

const Contacto = () => {
  // 1. Estado para los datos del formulario
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    servicio: 'Traducción', // Valor por defecto
    mensaje: ''
  });

  // 2. Estado para la interfaz (UX)
  const [status, setStatus] = useState(''); // 'loading', 'success', 'error', o vacío

  // 3. Manejador de cambios en los inputs
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // 4. Lógica de envío (Submit)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      // Reemplaza 'TU_ENDPOINT_AQUI' con la URL que te dé Formspree
      const response = await fetch('https://formspree.io/f/xbdwwlre', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('success');
        // Limpiamos el formulario
        setFormData({ nombre: '', email: '', servicio: 'Traducción', mensaje: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-[#0f2a44] text-4xl font-bold mb-4">¿Listo para iniciar tu proyecto?</h2>
          <p className="text-[#3a3f45] text-lg">
            Solicita una cotización para servicios de traducción, interpretación o localización de software.
          </p>
        </div>

        <div className="bg-[#f4f6f8] p-8 md:p-12 rounded-2xl shadow-sm border border-[#1fa4a9]/20">
          
          {/* Mensajes de retroalimentación de estado */}
          {status === 'success' && (
            <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-lg text-center font-semibold">
              ¡Mensaje enviado con éxito! Me pondré en contacto contigo a la brevedad.
            </div>
          )}
          {status === 'error' && (
            <div className="mb-6 p-4 bg-red-100 text-red-700 rounded-lg text-center font-semibold">
              Hubo un problema al enviar el mensaje. Inténtalo de nuevo o escríbeme directamente al correo.
            </div>
          )}

          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label htmlFor="nombre" className="text-[#0f2a44] font-semibold mb-2">Nombre completo</label>
              <input 
                type="text" 
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                required
                className="p-3 rounded-lg border border-[#3a3f45]/20 focus:border-[#1fa4a9] focus:ring-1 focus:ring-[#1fa4a9] outline-none transition-all bg-white"
                placeholder="Ej. Juan Pérez"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="email" className="text-[#0f2a44] font-semibold mb-2">Correo electrónico</label>
              <input 
                type="email" 
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="p-3 rounded-lg border border-[#3a3f45]/20 focus:border-[#1fa4a9] focus:ring-1 focus:ring-[#1fa4a9] outline-none transition-all bg-white"
                placeholder="nombre@ejemplo.com" 
              />
            </div>

            <div className="flex flex-col md:col-span-2">
              <label htmlFor="servicio" className="text-[#0f2a44] font-semibold mb-2">Tipo de servicio</label>
              <select 
                id="servicio"
                name="servicio"
                value={formData.servicio}
                onChange={handleChange}
                className="p-3 rounded-lg border border-[#3a3f45]/20 focus:border-[#1fa4a9] outline-none bg-white"
              >
                <option value="Traducción">Traducción</option>
                <option value="Interpretación presencial o en línea">Interpretación presencial o en línea</option>
                <option value="Capacitación de inglés, traducción o tecnología">Capacitación de inglés, traducción o tecnología</option>
                <option value="Proyecto de desarrollo">Proyecto de desarrollo</option>
                <option value="Otro proyecto">Otro proyecto</option>
              </select>
            </div>

            <div className="flex flex-col md:col-span-2">
              <label htmlFor="mensaje" className="text-[#0f2a44] font-semibold mb-2">Mensaje o detalles del proyecto</label>
              <textarea 
                id="mensaje"
                name="mensaje"
                value={formData.mensaje}
                onChange={handleChange}
                required
                rows="4" 
                className="p-3 rounded-lg border border-[#3a3f45]/20 focus:border-[#1fa4a9] outline-none transition-all bg-white"
                placeholder="Cuéntame sobre los plazos y el tipo de documentos o código a traducir..."
              ></textarea>
            </div>

            <button 
              type="submit" 
              disabled={status === 'loading'}
              className="md:col-span-2 bg-[#1fa4a9] text-white font-bold py-4 rounded-xl hover:bg-[#0f2a44] transition-colors shadow-lg text-lg disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {status === 'loading' ? 'Enviando...' : 'Enviar solicitud de cotización'}
            </button>
          </form>

          <div className="mt-12 pt-8 border-t border-[#3a3f45]/10 flex flex-col md:flex-row justify-between items-center text-[#3a3f45] gap-4">
            <div className="flex items-center gap-2">
              <span>📍</span> 
              <span>Colima, México</span> 
            </div>
            <div className="flex items-center gap-2">
              <span>✉️</span>
              <a href="mailto:luis@saymetra.com" className="hover:text-[#1fa4a9] transition-colors">luis@saymetra.com</a>
            </div>
            <div className="flex items-center gap-2">
              <span>📱</span>
              <span>+52 312 9437963</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacto;