import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary text-white py-8 mt-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">Warung Mamahmia Terasi</h3>
          <p className="text-sm">
            Spesialis masakan terasi dengan cita rasa autentik dan bumbu rahasia keluarga.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Kontak Kami</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <MapPin size={18} /> Jl. Kenangan Indah No. 123, Kota Bahagia
            </li>
            <li className="flex items-center gap-2">
              <Phone size={18} /> 0812-3456-7890
            </li>
            <li className="flex items-center gap-2">
              <Mail size={18} /> info@mamahmiaterasi.com
            </li>
            <li className="flex items-center gap-2">
              <Clock size={18} /> Senin-Sabtu, 10:00 - 22:00
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Ikuti Kami</h3>
          <div className="flex space-x-4">
            {/* Placeholder for social media icons */}
            <a href="#" className="text-white hover:text-accent transition-colors">FB</a>
            <a href="#" className="text-white hover:text-accent transition-colors">IG</a>
            <a href="#" className="text-white hover:text-accent transition-colors">TW</a>
          </div>
        </div>
      </div>
      <div className="text-center text-sm mt-8 pt-4 border-t border-red-700">
        &copy; {new Date().getFullYear()} Warung Mamahmia Terasi. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;