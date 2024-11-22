import CardImgDer from "../components/CardImgDer.jsx";
import CardImgIzq from "../components/CardImgIzq.jsx";
import CerezosImage from '../assets/cerezos-home.webp';


export const SobreNosotros = () => {
  // Datos de ejemplo
  const cardsData = [
    {
      imageSrc: CerezosImage,
      altText: "Misión",
      title: "Misión",
      description: "Nuestra misión es proporcionar un servicio de alta calidad para todos nuestros clientes.",
    },
    {
      imageSrc: CerezosImage,
      altText: "Visión",
      title: "Visión",
      description: "Nuestra visión es convertirnos en líderes de la industria con soluciones innovadoras.",
    },
    {
      imageSrc: CerezosImage,
      altText: "Valores",
      title: "Valores",
      description: "Nuestros valores fundamentales son la integridad, el respeto y la innovación.",
    },
  ];

  return (
    <div className="p-8 bg-gray-100">
      <div className="flex flex-col space-y-6">
        {cardsData.map((card, index) => (
          // Alternar entre CardImgDer y CardImgIzq
          index % 2 === 0 ? (
            <CardImgDer
              key={index}
              imageSrc={card.imageSrc}
              altText={card.altText}
              title={card.title}
              description={card.description}  
            />
          ) : (
            <CardImgIzq
              key={index}
              imageSrc={card.imageSrc}
              altText={card.altText}
              title={card.title}
              description={card.description}
            />
          )
        ))}
      </div>
    </div>
  );
};
