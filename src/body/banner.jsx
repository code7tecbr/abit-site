import banner1 from '../assets/imagem1.webp';
import banner2 from '../assets/imagem2.webp';
import banner3 from '../assets/imagem3.webp';
import { useState, useEffect } from 'react';

export default function Banner () {
  const images = [banner1, banner2, banner3];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000);
    return () => clearInterval(interval);
  }, [images.length]);

  return(
    <div className="flex flex-col gap-3">
      <div>
        <img src={images[currentIndex]} alt="banner" className="banner-image"/>
      </div>
    </div>
  );
}
