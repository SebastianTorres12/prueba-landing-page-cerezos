import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';
import CerezosImage from '../assets/cerezos-home.webp';
import { useState } from 'react';

export const Salidas = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState('');

  const openModal = (content) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent('');
  };

  const proximasSalidas = [
    {
      titulo: 'Visita al Jardín Botánico',
      descripcion:
        'Un paseo relajante para disfrutar de la naturaleza y aire fresco.',
      icono: '🌿',
      link: '#',
    },
    {
      titulo: 'Taller de Pintura al Aire Libre',
      descripcion:
        'Explora la creatividad con actividades artísticas al aire libre.',
      icono: '🎨',
      link: '#',
    },
    {
      titulo: 'Excursión al Museo',
      descripcion: 'Una visita cultural para explorar la historia y el arte.',
      icono: '🏛️',
      link: '#',
    },
    {
      titulo: 'Picnic en el Parque',
      descripcion:
        'Disfruta de un picnic con juegos y actividades recreativas.',
      icono: '🧺',
      link: '#',
    },
  ];

  return (
    <section className='py-16 bg-gray-100'>
      {/* Sección de Salidas Recientes (Carrusel) */}
      <div className='container mx-auto px-8 mb-16'>
        <h2 className='text-5xl font-bold text-center mb-8'>
          Salidas recientes
        </h2>
        <Swiper
          modules={[Navigation, Autoplay]} // Añadimos Autoplay como módulo
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{
            delay: 3000, // Tiempo en milisegundos (3 segundos)
            disableOnInteraction: false, // Permite seguir con autoplay tras interacción del usuario
          }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 2 },
          }}
          className='w-full relative'
        >
          {/* Carrusel de Salidas Recientes */}
          {[...Array(5)].map((_, index) => (
            <SwiperSlide key={index}>
              <div className='flex flex-col md:flex-row items-center gap-8 bg-white shadow-lg rounded-lg p-4 max-w-[80%] mx-auto'>
                <div className='md:w-1/2'>
                  <p className='text-gray-600 text-lg'>
                    Recientemente, nuestros residentes disfrutaron de un día
                    maravilloso explorando el parque local, compartiendo
                    sonrisas y buenos momentos al aire libre.
                  </p>
                </div>
                <div className='md:w-1/2'>
                  <img
                    src={CerezosImage}
                    alt='Salida reciente'
                    className='w-full rounded-lg shadow-lg'
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}

          {/* Botones de Navegación con react-icons */}
          <div className='swiper-button-prev hidden md:flex absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-700 z-10 cursor-pointer'></div>
          <div className='swiper-button-next hidden md:flex absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-700 z-10 cursor-pointer'></div>
        </Swiper>
      </div>

      <div className='container mx-auto px-8'>
        <h2 className='text-5xl font-bold text-center mb-8'>
          Próximas salidas
        </h2>
        <p className='text-gray-600 text-center mb-12'>
          Tenemos planeadas emocionantes salidas para los próximos días,
          diseñadas para el disfrute y la socialización de nuestros residentes.
        </p>

        {/* Grid para Próximas Salidas */}
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 items-center'>
          {/* Primer grupo de salidas */}
          <div className='flex flex-col gap-6'>
            {proximasSalidas.slice(0, 2).map((salida, index) => (
              <div
                key={index}
                className='flex items-start gap-4'
              >
                <span className='text-3xl'>{salida.icono}</span>
                <div>
                  <h3 className='text-xl font-semibold'>{salida.titulo}</h3>
                  <p className='text-gray-600'>{salida.descripcion}</p>
                  <button
                    onClick={() => openModal(salida.descripcion)}
                    className='text-blue-600 hover:text-blue-800 bg-transparent border-none cursor-pointer'
                  >
                    Más información
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Imagen Central */}
          <div className='flex justify-center'>
            <img
              src={CerezosImage}
              alt='Próximas salidas'
              className='w-full max-w-md rounded-lg shadow-lg'
            />
          </div>

          {/* Segundo grupo de salidas */}
          <div className='flex flex-col gap-6'>
            {proximasSalidas.slice(2).map((salida, index) => (
              <div
                key={index}
                className='flex items-start gap-4'
              >
                <span className='text-3xl'>{salida.icono}</span>
                <div>
                  <h3 className='text-xl font-semibold'>{salida.titulo}</h3>
                  <p className='text-gray-600'>{salida.descripcion}</p>
                  <button
                    onClick={() => openModal(salida.descripcion)}
                    className='text-blue-600 hover:text-blue-800 bg-transparent border-none cursor-pointer'
                  >
                    Más información
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div className='fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-20'>
            <div className='bg-white p-6 rounded-lg shadow-lg max-w-lg w-full'>
              <h3 className='text-2xl font-semibold mb-4'>
                Detalles de la salida
              </h3>
              <p className='text-gray-600'>{modalContent}</p>
              <button
                onClick={closeModal}
                className='mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700'
              >
                Cerrar
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
