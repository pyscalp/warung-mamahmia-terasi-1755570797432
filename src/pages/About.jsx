import React from 'react';
import SectionHeader from '../components/SectionHeader';
import { Check } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen container mx-auto py-12 px-4">
      <SectionHeader
        title="Tentang Warung Mamahmia Terasi"
        subtitle="Kisah di Balik Setiap Gigitan Autentik"
      />

      <div className="bg-white p-8 rounded-lg shadow-lg mb-12">
        <h3 className="text-3xl font-bold text-secondary mb-6 text-center">
          Perjalanan Rasa Kami
        </h3>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <img
              src="/images/warung-interior.svg"
              alt="Warung Mamahmia Terasi"
              className="rounded-lg shadow-md w-full h-auto object-cover"
            />
          </div>
          <div className="md:w-1/2 text-gray-700 leading-relaxed">
            <p className="mb-4">
              Warung Mamahmia Terasi didirikan dengan satu tujuan: melestarikan dan menyajikan kelezatan masakan terasi tradisional yang kaya rasa. Berawal dari resep rahasia keluarga yang diwariskan turun-temurun, kami berkomitmen untuk menghadirkan pengalaman kuliner yang autentik dan tak terlupakan bagi setiap pelanggan.
            </p>
            <p className="mb-4">
              Setiap bumbu diracik dengan hati-hati, setiap bahan dipilih dengan cermat, memastikan kualitas dan cita rasa yang konsisten. Kami percaya bahwa makanan bukan hanya tentang mengisi perut, tetapi juga tentang menciptakan kenangan dan kebahagiaan.
            </p>
            <p>
              Datang dan rasakan sendiri kehangatan serta kelezatan masakan terasi yang hanya bisa Anda temukan di Warung Mamahmia Terasi. Kami menanti kedatangan Anda!
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-primary text-white p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Check size={24} /> Visi Kami
          </h3>
          <p className="leading-relaxed">
            Menjadi warung makan terkemuka yang dikenal akan keautentikan rasa terasi dan keramahan pelayanan, serta menjadi destinasi kuliner favorit bagi pecinta masakan Indonesia.
          </p>
        </div>
        <div className="bg-secondary text-white p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Check size={24} /> Misi Kami
          </h3>
          <ul className="list-disc list-inside space-y-2 leading-relaxed">
            <li>Menyajikan masakan terasi dengan resep asli dan bahan berkualitas tinggi.</li>
            <li>Menciptakan suasana warung yang nyaman dan ramah bagi semua pelanggan.</li>
            <li>Terus berinovasi dalam menu tanpa meninggalkan akar tradisi.</li>
            <li>Memberikan pengalaman kuliner yang memuaskan dan berkesan.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;