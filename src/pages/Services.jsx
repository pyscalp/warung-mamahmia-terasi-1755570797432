import React from 'react';
import SectionHeader from '../components/SectionHeader';
import Card from '../components/Card';
import { Star } from 'lucide-react';

const Services = () => {
  const menuItems = [
    {
      title: 'Nasi Goreng Terasi Spesial',
      description: 'Nasi goreng dengan bumbu terasi khas, telur, ayam suwir, dan kerupuk.',
      imageUrl: '/images/terasi-dish1.svg',
      price: 'Rp 25.000',
    },
    {
      title: 'Ayam Bakar Terasi Madu',
      description: 'Ayam bakar bumbu terasi manis pedas, disajikan dengan lalapan.',
      imageUrl: '/images/terasi-dish2.svg',
      price: 'Rp 35.000',
    },
    {
      title: 'Ikan Bakar Terasi',
      description: 'Ikan segar dibakar dengan lumuran bumbu terasi yang meresap.',
      imageUrl: '/images/terasi-dish3.svg',
      price: 'Rp 40.000',
    },
    {
      title: 'Sambal Terasi Mentah',
      description: 'Sambal terasi segar pedas dengan irisan tomat dan jeruk limau.',
      imageUrl: '/images/terasi-dish4.svg',
      price: 'Rp 10.000',
    },
    {
      title: 'Tumis Kangkung Terasi',
      description: 'Kangkung segar ditumis dengan bumbu terasi dan sedikit cabai.',
      imageUrl: '/images/terasi-dish1.svg', // Reusing image
      price: 'Rp 18.000',
    },
    {
      title: 'Es Teh Manis',
      description: 'Minuman pelepas dahaga yang sempurna setelah hidangan pedas.',
      imageUrl: '/images/terasi-dish2.svg', // Reusing image
      price: 'Rp 5.000',
    },
  ];

  return (
    <div className="min-h-screen container mx-auto py-12 px-4">
      <SectionHeader
        title="Menu Kami"
        subtitle="Pilihan hidangan terasi autentik yang menggugah selera"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {menuItems.map((item, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
            <img src={item.imageUrl} alt={item.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-bold text-secondary mb-2">{item.title}</h3>
              <p className="text-gray-700 text-sm mb-3">{item.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-primary font-bold text-lg">{item.price}</span>
                <div className="flex items-center text-yellow-500">
                  <Star size={18} fill="currentColor" />
                  <Star size={18} fill="currentColor" />
                  <Star size={18} fill="currentColor" />
                  <Star size={18} fill="currentColor" />
                  <Star size={18} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center bg-primary text-white p-8 rounded-lg shadow-md">
        <h3 className="text-2xl font-bold mb-4">Layanan Tambahan</h3>
        <p className="text-lg mb-4">
          Kami juga melayani pesanan katering untuk acara spesial Anda. Hubungi kami untuk informasi lebih lanjut!
        </p>
        <p className="text-lg">
          Tersedia layanan pesan antar melalui aplikasi online favorit Anda.
        </p>
      </div>
    </div>
  );
};

export default Services;