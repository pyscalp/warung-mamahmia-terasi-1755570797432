import React from 'react';
import SectionHeader from '../components/SectionHeader';

const Gallery = () => {
  const galleryImages = [
    { src: '/images/terasi-dish1.svg', alt: 'Hidangan Terasi 1' },
    { src: '/images/terasi-dish2.svg', alt: 'Hidangan Terasi 2' },
    { src: '/images/terasi-dish3.svg', alt: 'Hidangan Terasi 3' },
    { src: '/images/terasi-dish4.svg', alt: 'Hidangan Terasi 4' },
    { src: '/images/warung-interior.svg', alt: 'Suasana Warung' },
    { src: '/images/terasi-dish1.svg', alt: 'Hidangan Terasi 5' }, // Reusing
    { src: '/images/terasi-dish2.svg', alt: 'Hidangan Terasi 6' }, // Reusing
    { src: '/images/warung-interior.svg', alt: 'Suasana Warung 2' }, // Reusing
  ];

  return (
    <div className="min-h-screen container mx-auto py-12 px-4">
      <SectionHeader
        title="Galeri Kami"
        subtitle="Momen kebahagiaan dan kelezatan di Warung Mamahmia Terasi"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {galleryImages.map((image, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-lg group transform hover:scale-105 transition-transform duration-300"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-lg font-semibold text-center p-4">{image.alt}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;