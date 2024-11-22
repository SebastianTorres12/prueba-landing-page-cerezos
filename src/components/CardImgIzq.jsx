const CardImgIzq = ({ imageSrc, altText, title, description }) => {
  return (
    <div className="flex flex-col md:flex-row items-center border rounded-lg overflow-hidden shadow-md p-4 md:p-6 bg-white">
      {/* Imagen al lado izquierdo */}
      <div className="w-full md:w-1/2 flex justify-center md:justify-start mb-4 md:mb-0">
        <img className="h-48 w-full md:h-auto md:w-80 object-cover rounded-md" src={imageSrc} alt={altText} />
      </div>
      {/* Texto al lado derecho */}
      <div className="w-full md:w-1/2 md:pl-2">
        <h3 className="text-2xl md:text-4xl font-bold text-gray-800 mb-2 md:mb-4">{title}</h3>
        <p className="text-gray-600 text-base md:text-lg">{description}</p>
      </div>
    </div>
  );
};

export default CardImgIzq;
