import banner1 from '../assets/imagem1.webp';
import banner2 from '../assets/imagem2.webp';
import banner3 from '../assets/imagem3.webp';
import { useState, useEffect } from 'react';
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

export default function Banner () {
  const images = [banner1, banner2, banner3];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  const prevImage = () => setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 10000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="flex flex-col gap-3 w-full"> {/* w-100 é w-full no Tailwind */}
      {/* Container pai com 'relative' para posicionar as setas */}
      <div className="relative w-full overflow-hidden"> {/* Adicionei overflow-hidden para garantir que nada transborde */}
        {/* Imagem */}
        <img
          src={images[currentIndex]}
          alt="banner"
          className="w-full h-auto banner-image" // Ajustado para ser responsivo
        />

        {/* Seta Esquerda */}
        <div
          className="absolute inset-y-0 left-0 flex items-center justify-center p-4 cursor-pointer"
          onClick={prevImage}
        >
          <IoIosArrowBack className="text-white text-4xl sm:text-5xl md:text-6xl drop-shadow-lg" /> {/* Ajuste o tamanho e adicione sombra para visibilidade */}
        </div>

        {/* Seta Direita */}
        <div
          className="absolute inset-y-0 right-0 flex items-center justify-center p-4 cursor-pointer"
          onClick={nextImage}
        >
          <IoIosArrowForward className="text-white text-4xl sm:text-5xl md:text-6xl drop-shadow-lg" /> {/* Ajuste o tamanho e adicione sombra para visibilidade */}
        </div>
      </div>
    </div>
  );
}
