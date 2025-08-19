import React from 'react';
import SectionHeader from '../components/SectionHeader';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen container mx-auto py-12 px-4">
      <SectionHeader
        title="Hubungi Kami"
        subtitle="Kami siap melayani Anda dengan sepenuh hati"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold text-secondary mb-6">Informasi Kontak</h3>
          <ul className="space-y-6 text-gray-700 text-lg">
            <li className="flex items-center gap-4">
              <MapPin size={28} className="text-primary" />
              <div>
                <span className="font-semibold">Alamat:</span>
                <p>Jl. Kenangan Indah No. 123, Kota Bahagia, 12345</p>
              </div>
            </li>
            <li className="flex items-center gap-4">
              <Phone size={28} className="text-primary" />
              <div>
                <span className="font-semibold">Telepon:</span>
                <p>+62 812-3456-7890</p>
              </div>
            </li>
            <li className="flex items-center gap-4">
              <Mail size={28} className="text-primary" />
              <div>
                <span className="font-semibold">Email:</span>
                <p>info@mamahmiaterasi.com</p>
              </div>
            </li>
            <li className="flex items-center gap-4">
              <Clock size={28} className="text-primary" />
              <div>
                <span className="font-semibold">Jam Buka:</span>
                <p>Senin - Sabtu: 10:00 - 22:00</p>
                <p>Minggu: Tutup</p>
              </div>
            </li>
          </ul>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold text-secondary mb-6">Kirim Pesan Kepada Kami</h3>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                Nama Lengkap
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-primary"
                placeholder="Nama Anda"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-primary"
                placeholder="email@contoh.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
                Pesan Anda
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-primary"
                placeholder="Tulis pesan Anda di sini..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-primary hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-full focus:outline-none focus:shadow-outline transition-colors duration-300"
            >
              Kirim Pesan
            </button>
          </form>
        </div>
      </div>

      {/* Map Placeholder */}
      <div className="mt-12 bg-gray-200 h-96 rounded-lg shadow-lg flex items-center justify-center text-gray-500 text-xl">
        <MapPin size={48} className="mr-2" /> Lokasi Warung Kami (Peta Placeholder)
      </div>
    </div>
  );
};

export default Contact;