import { FaPhone, FaEnvelope} from 'react-icons/fa';

export const Contactos = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-2">Contactos</h1>
        <p className="text-gray-600">Póngase en contacto con nosotros a través de cualquiera de los siguientes medios.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {/* Sección de Teléfono/WhatsApp */}
        <div className="border rounded-lg p-6 shadow-md bg-white flex flex-col items-center text-center">
          <FaPhone className="text-4xl text-red-600 mb-4" />
          <h2 className="text-xl font-bold mb-2">Teléfono / WhatsApp</h2>
          <p className="text-gray-700 mb-1">+123 456 7890</p>
          <p className="text-gray-700">Disponible de 9 AM a 6 PM</p>
        </div>

        {/* Sección de Correo Electrónico */}
        <div className="border rounded-lg p-6 shadow-md bg-white flex flex-col items-center text-center">
          <FaEnvelope className="text-4xl text-red-600 mb-4" />
          <h2 className="text-xl font-bold mb-2">Correo Electrónico</h2>
          <p className="text-gray-700 mb-1">info@example.com</p>
          <p className="text-gray-700">Respondiendo dentro de 24 horas</p>
        </div>

        {/* Sección de Correo Electrónico */}
        <div className="border rounded-lg p-6 shadow-md bg-white flex flex-col items-center text-center">
          <FaEnvelope className="text-4xl text-red-600 mb-4" />
          <h2 className="text-xl font-bold mb-2">Correo Electrónico</h2>
          <p className="text-gray-700 mb-1">info@example.com</p>
          <p className="text-gray-700">Respondiendo dentro de 24 horas</p>
        </div>

        {/* Sección de Mapa */}
        <div className="border rounded-lg overflow-hidden shadow-md bg-white col-span-1 md:col-span-2 lg:col-span-3">
          <h2 className="text-xl font-bold p-4 text-center">Ubicación</h2>
          <div className="flex justify-center items-center p-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093647!2d144.95373531531594!3d-37.8162791797517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf0727b3b46b2a7e6!2sEnvato!5e0!3m2!1sen!2sau!4v1615959982928!5m2!1sen!2sau"
              width="100%"
              height="400"
              frameBorder="0"
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
              className="border-0"
              style={{ maxWidth: '500px', maxHeight: '400px' }}
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

