"use client"
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    // { name: 'Home', href: '#' },
    // { name: 'About', href: '#' },
    // { name: 'Services', href: '#' },
    // { name: 'Portfolio', href: '#' },
    { name: 'Contact Me', href: 'https://shaninishad1999.github.io/MY-PORTFOLIO/' }
  ];

  return (
    <header className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 p-4 shadow-lg">
      <nav className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-bold text-white hover:scale-110 transition-transform duration-200">
           My Projects
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-white font-medium relative group"
              >
                <span className="relative z-10 transition-colors duration-200 hover:text-yellow-200">
                  {item.name}
                </span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-300 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-yellow-200 transition-colors duration-200"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block text-white font-medium hover:text-yellow-200 transition-all duration-200 transform hover:translate-x-2"
              >
                {item.name}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;