import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';
import CerezosImage from '../assets/cerezos-home.webp';

export const Home = () => {
  const testimonios = [
    {
      mensaje:
        'La residencia Los Cerezos es como una segunda familia para mí. Recibo atención y cariño cada día.',
      autor: 'María López',
    },
    {
      mensaje:
        'Las instalaciones son excelentes y el personal siempre está pendiente de nuestras necesidades.',
      autor: 'Carlos Sánchez',
    },
    {
      mensaje:
        'Desde que estoy aquí, me siento como en casa. El ambiente es muy acogedor y familiar.',
      autor: 'Ana Rodríguez',
    },
  ];

  return (
    <>
      <section className='w-full grid grid-cols-1 md:grid-cols-2 bg-gray-100 lg:pt-8'>
        {/* Contenedor de la imagen */}
        <div className='flex items-center justify-center p-4 sm:p-8'>
          <img
            src={CerezosImage}
            alt='Residencia Los Cerezos'
            className='w-full h-full object-cover rounded-lg shadow-lg md:max-h-[500px]'
          />
        </div>

        {/* Contenedor de texto de bienvenida */}
        <div className='flex items-center justify-center md:justify-center p-4 sm:p-8'>
          <div className='flex flex-col gap-4 text-center'>
            <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold'>
              Bienvenidos a la Residencia <br />
              <span>Los Cerezos</span>
            </h1>
            <p className='text-gray-500 text-base sm:text-lg md:text-xl leading-6 text-justify my-4 sm:my-5'>
              En la Residencia Los Cerezos, nos comprometemos a brindar una
              atención de calidad y un ambiente cálido para nuestros residentes.
              Nos esforzamos por ofrecer una vida digna, llena de actividades
              que promuevan el bienestar físico, mental y emocional de cada
              persona.
            </p>
            <p className='text-gray-500 text-base sm:text-lg md:text-xl leading-6 text-justify'>
              Contamos con un equipo de profesionales dedicados que proporciona
              cuidados personalizados, asegurando que cada residente reciba la
              atención que necesita en un entorno de respeto y cariño. Nuestro
              objetivo es que se sientan como en casa, rodeados de seguridad y
              confort.
            </p>
            <button className='bg-red-600 mt-4 md:mt-8 text-white text-lg sm:text-xl py-2 px-6 rounded-full hover:bg-red-700 transition duration-300'>
              Conoce Más
            </button>
          </div>
        </div>
      </section>

      <section className='w-full flex flex-col pt-20 bg-gray-100 items-center gap-8 px-6 md:flex-row md:items-center md:px-12 md:gap-12'>
        <div className='md:w-[40%] text-center md:text-left flex items-center justify-center md:justify-start'>
          <div>
            <h2 className='text-2xl font-bold text-gray-800 mb-4'>
              ¿Por qué elegirnos?
            </h2>
            <p className='text-gray-600 text-sm sm:text-base md:text-lg'>
              En Residencia Los Cerezos, ofrecemos un ambiente cálido y acogedor
              para nuestros residentes. Nuestro equipo de profesionales
              altamente capacitados se dedica a proporcionar cuidados de
              calidad, fomentando el bienestar físico, emocional y social. Aquí,
              cada residente es tratado como un miembro de nuestra familia, con
              atención personalizada y un enfoque en su comodidad y felicidad.
            </p>
          </div>
        </div>

        <div className='md:w-[60%] grid grid-cols-1 sm:grid-cols-2 gap-4'>
          {[
            'Compromiso y dedicación',
            'Instalaciones Modernas',
            'Actividades y terapias',
            'Ambiente familiar',
          ].map((title, index) => (
            <div
              key={index}
              className='flex flex-col items-center p-4 border rounded-lg shadow-sm bg-white'
            >
              <img
                src={CerezosImage}
                alt='Residencia Los Cerezos'
                className='w-full h-[200px] object-cover mb-3'
              />
              <h3 className='text-lg font-semibold text-gray-800'>{title}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className='w-full py-12 px-6 bg-gray-100'>
        <div className='max-w-screen-lg mx-auto text-center relative'>
          <h1 className='text-2xl sm:text-3xl font-bold text-gray-800 mb-4'>
            Testimonios
          </h1>
          <p className='text-gray-600 text-sm sm:text-base leading-relaxed mb-6'>
            Nuestros residentes y sus familias confían en nuestra atención y
            calidad de vida.
          </p>

          {/* Contenedor del carrusel con posición relativa */}
          <div className='relative'>
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              loop={true}
              navigation={{
                prevEl: '.swiper-button-prev',
                nextEl: '.swiper-button-next',
              }}
              modules={[Navigation, Autoplay]}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              className='w-full max-w-md mx-auto'
            >
              {testimonios.map((testimonio, index) => (
                <SwiperSlide
                  key={index}
                  className='text-center p-6'
                >
                  <p className='text-gray-600 text-base sm:text-lg leading-relaxed italic mb-4'>
                    {testimonio.mensaje}
                  </p>
                  <div className='flex justify-center mt-2'>
                    <img
                      src={CerezosImage}
                      alt={testimonio.autor}
                      className='rounded-full h-16 sm:h-20 mb-2'
                    />
                  </div>
                  <p className='font-semibold text-gray-800'>
                    {testimonio.autor}
                  </p>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Flechas de navegación a los lados del carrusel */}
            <div className='swiper-button-prev md:flex hidden items-center justify-center w-10 h-10 text-gray-700 cursor-pointer absolute top-1/2 transform -translate-y-1/2 left-[-20px] z-10'></div>
            <div className='swiper-button-next md:flex hidden items-center justify-center w-10 h-10 text-gray-700 cursor-pointer absolute top-1/2 transform -translate-y-1/2 right-[-20px] transition z-10'></div>
          </div>
        </div>
      </section>
    </>
  );
};
