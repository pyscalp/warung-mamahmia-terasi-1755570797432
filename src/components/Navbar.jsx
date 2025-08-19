import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Home, Users, Package, Image, Mail } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: 'Beranda', path: '/', icon: Home },
    { name: 'Tentang Kami', path: '/about', icon: Users },
    { name: 'Menu', path: '/services', icon: Package },
    { name: 'Galeri', path: '/gallery', icon: Image },
    { name: 'Kontak', path: '/contact', icon: Mail },
  ];

  return (
    <nav className="bg-primary p-4 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold flex items-center gap-2">
          <img src="/images/mamahmia-logo.svg" alt="Logo" className="h-8 w-8" />
          Mamahmia Terasi
        </Link>

        <div className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `text-white hover:text-accent transition-colors duration-300 flex items-center gap-1 ${
                  isActive ? 'font-bold text-accent' : ''
                }`
              }
            >
              <link.icon size={18} />
              {link.name}
            </NavLink>
          ))}
        </div>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-primary px-4 pt-2 pb-4 space-y-2">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={toggleMenu}
              className={({ isActive }) =>
                `block text-white hover:text-accent transition-colors duration-300 py-2 flex items-center gap-2 ${
                  isActive ? 'font-bold text-accent' : ''
                }`
              }
            >
              <link.icon size={18} />
              {link.name}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;