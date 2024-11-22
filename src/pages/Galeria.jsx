import CerezosImage from '../assets/cerezos-home.webp';

export const Galeria = () => {
  const imagenes = [
    { src: CerezosImage, alt: 'Sala común de Los Cerezos' },
    { src: CerezosImage, alt: 'Jardín y área de recreación' },
    { src: CerezosImage, alt: 'Terapias de grupo' },
    { src: CerezosImage, alt: 'Habitaciones cómodas' },
    { src: CerezosImage, alt: 'Comedor comunitario' },
    { src: CerezosImage, alt: 'Actividades recreativas' },
  ];

  return (
    <section className='h-auto py-16 bg-gray-100'>
      {/* Título de la sección */}
      <div className='text-center mb-12'>
        <h2 className='text-6xl font-bold text-gray-800'>
          Nuestra <span className='text-red-600'>Galería</span>
        </h2>
        <p className='text-gray-600 text-xl mt-4'>
          Descubre nuestros espacios y las actividades que realizamos para el
          bienestar de nuestros residentes.
        </p>
      </div>

      {/* Grid de la galería */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-8'>
        {imagenes.map((imagen, index) => (
          <div
            key={index}
            className='overflow-hidden rounded-lg shadow-lg'
          >
            <img
              src={imagen.src}
              alt={imagen.alt}
              className='w-full h-64 object-cover hover:scale-105 transition-transform duration-300'
            />
          </div>
        ))}
      </div>
    </section>
  );
};
