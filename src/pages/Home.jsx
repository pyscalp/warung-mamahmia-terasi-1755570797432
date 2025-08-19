import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionHeader from '../components/SectionHeader';
import Card from '../components/Card';

const Home = () => {
  const featuredDishes = [
    {
      title: 'Nasi Goreng Terasi',
      description: 'Nasi goreng spesial dengan aroma terasi yang menggoda selera.',
      imageUrl: '/images/terasi-dish1.svg',
    },
    {
      title: 'Ayam Bakar Terasi',
      description: 'Ayam bakar empuk dengan bumbu terasi meresap sempurna.',
      imageUrl: '/images/terasi-dish2.svg',
    },
    {
      title: 'Sambal Terasi Spesial',
      description: 'Sambal terasi pedas nampol, cocok untuk semua hidangan.',
      imageUrl: '/images/terasi-dish3.svg',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-20 px-4 text-center">
        <div className="container mx-auto">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 leading-tight">
            WARUNG MAMAHMIA TERASI
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Nikmati kelezatan masakan terasi autentik dengan bumbu rahasia keluarga.
          </p>
          <Link
            to="/services"
            className="inline-flex items-center bg-accent text-secondary font-bold py-3 px-8 rounded-full text-lg hover:bg-yellow-400 transition-colors duration-300 shadow-lg"
          >
            Lihat Menu Kami <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>

      {/* Featured Dishes Section */}
      <section className="container mx-auto py-16 px-4">
        <SectionHeader
          title="Menu Unggulan Kami"
          subtitle="Rasakan sensasi terasi yang tak terlupakan!"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredDishes.map((dish, index) => (
            <Card
              key={index}
              title={dish.title}
              description={dish.description}
              imageUrl={dish.imageUrl}
            />
          ))}
        </div>
      </section>

      {/* About Us Teaser */}
      <section className="bg-gray-100 py-16 px-4">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <img
              src="/images/warung-interior.svg"
              alt="Warung Interior"
              className="rounded-lg shadow-xl w-full h-auto object-cover"
            />
          </div>
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-4xl font-bold text-secondary mb-4">Kisah di Balik Rasa</h2>
            <p className="text-lg text-gray-700 mb-6">
              Warung Mamahmia Terasi lahir dari kecintaan kami pada warisan kuliner keluarga. Setiap hidangan dibuat dengan resep turun-temurun dan bahan pilihan, menjamin cita rasa autentik yang selalu dirindukan.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center bg-primary text-white font-bold py-3 px-6 rounded-full hover:bg-orange-600 transition-colors duration-300"
            >
              Pelajari Lebih Lanjut <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;