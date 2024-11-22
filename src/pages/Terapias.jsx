// components/Terapias.jsx
import CardImgArri from "../components/CardImgArri.jsx";
import CerezosImage from '../assets/cerezos-home.webp';


const therapies = [
  {
    imageSrc: CerezosImage,
    altText: 'Therapy 1',
    title: 'Terapia Física',
    description: 'Mejora la movilidad y reduce el dolor.',
    details: 'Detalles completos de la Terapia Física...',
  },
  {
    imageSrc: CerezosImage,
    altText: 'Therapy 2',
    title: 'Terapia Ocupacional',
    description: 'Ayuda a realizar actividades diarias.',
    details: 'Detalles completos de la Terapia Ocupacional...',
  },
  {
    imageSrc: CerezosImage,
    altText: 'Therapy 2',
    title: 'Terapia Ocupacional',
    description: 'Ayuda a realizar actividades diarias.',
    details: 'Detalles completos de la Terapia Ocupacional...',
  },
  {
    imageSrc: CerezosImage,
    altText: 'Therapy 2',
    title: 'Terapia Ocupacional',
    description: 'Ayuda a realizar actividades diarias.',
    details: 'Detalles completos de la Terapia Ocupacional...',
  },
  {
    imageSrc: CerezosImage,
    altText: 'Therapy 2',
    title: 'Terapia Ocupacional',
    description: 'Ayuda a realizar actividades diarias.',
    details: 'Detalles completos de la Terapia Ocupacional...',
  },
  {
    imageSrc: CerezosImage,
    altText: 'Therapy 2',
    title: 'Terapia Ocupacional',
    description: 'Ayuda a realizar actividades diarias.',
    details: 'Detalles completos de la Terapia Ocupacional...',
  },
  // Añadir 6 terapias más con el mismo formato
];

export const Terapias = () => {
  return (
    <div className="container mx-auto p-4">
     <div className='text-center mb-12'>
        <h1 className='text-6xl font-bold'>
          Nuestras <span className='text-red-600'>Terapias</span>
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {therapies.map((therapy, index) => (
          <CardImgArri
            key={index}
            imageSrc={therapy.imageSrc}
            altText={therapy.altText}
            title={therapy.title}
            description={therapy.description}
            details={therapy.details}
          />
        ))}
      </div>
    </div>
  );
};
