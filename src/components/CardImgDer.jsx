const CardImgDer = ({ imageSrc, altText, title, description }) => {
  return (
    <div className="flex flex-col md:flex-row items-center border rounded-lg overflow-hidden shadow-md p-4 md:p-8 bg-white">
      {/* Texto al lado izquierdo */}
      <div className="w-full md:w-1/2 md:pr-2 mb-4 md:mb-0">
        <h3 className="text-2xl md:text-4xl font-bold text-gray-800 mb-2 md:mb-4">{title}</h3>
        <p className="text-gray-600 text-base md:text-lg">{description}</p>
      </div>
      {/* Imagen al lado derecho */}
      <div className="w-full md:w-1/2 flex justify-center md:justify-end">
        <img className="h-48 w-full md:h-auto md:w-80 object-cover rounded-md" src={imageSrc} alt={altText} />
      </div>
    </div>
  );
};

export default CardImgDer;