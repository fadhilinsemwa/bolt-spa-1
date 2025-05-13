import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { GraduationCap, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <GraduationCap className="text-teal-500" size={32} />
          <span className="text-lg font-bold text-teal-700">Tandabui Online</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <NavLink to="/" className="text-gray-700 hover:text-teal-600 transition duration-200">Home</NavLink>
          <NavLink to="/about" className="text-gray-700 hover:text-teal-600 transition duration-200">About</NavLink>
          <div className="relative group">
            <NavLink to="/programs" className="flex items-center space-x-1 text-gray-700 hover:text-teal-600 transition duration-200">
              <span>Programs</span>
              <span className="text-xs">▼</span>
            </NavLink>
            <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 z-10 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300">
              <NavLink to="/programs/certificate" className="block px-4 py-2 text-gray-700 hover:bg-teal-50 hover:text-teal-600">Certificate Programs</NavLink>
              <NavLink to="/programs/diploma" className="block px-4 py-2 text-gray-700 hover:bg-teal-50 hover:text-teal-600">Diploma Courses</NavLink>
              <NavLink to="/programs/professional" className="block px-4 py-2 text-gray-700 hover:bg-teal-50 hover:text-teal-600">Professional Development</NavLink>
            </div>
          </div>
          <NavLink to="/administration" className="text-gray-700 hover:text-teal-600 transition duration-200">Administration</NavLink>
          <NavLink to="/resources" className="text-gray-700 hover:text-teal-600 transition duration-200">Student Resources</NavLink>
        </nav>
        
        <div className="hidden md:flex items-center space-x-4">
          <NavLink to="/sign-in" className="px-4 py-2 rounded-md text-gray-700 hover:text-teal-600 transition duration-200">Sign In</NavLink>
          <NavLink to="/sign-up" className="px-4 py-2 bg-teal-500 hover:bg-teal-600 text-white rounded-md transition duration-200">Sign Up</NavLink>
        </div>
        
        <button 
          className="md:hidden text-gray-700" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-md">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-3">
            <NavLink to="/" className="text-gray-700 py-2 hover:text-teal-600 transition duration-200">Home</NavLink>
            <NavLink to="/about" className="text-gray-700 py-2 hover:text-teal-600 transition duration-200">About</NavLink>
            <NavLink to="/programs" className="text-gray-700 py-2 hover:text-teal-600 transition duration-200">Programs</NavLink>
            <NavLink to="/administration" className="text-gray-700 py-2 hover:text-teal-600 transition duration-200">Administration</NavLink>
            <NavLink to="/resources" className="text-gray-700 py-2 hover:text-teal-600 transition duration-200">Student Resources</NavLink>
            <div className="flex flex-col pt-3 border-t border-gray-200">
              <NavLink to="/sign-in" className="text-gray-700 py-2 hover:text-teal-600 transition duration-200">Sign In</NavLink>
              <NavLink to="/sign-up" className="mt-2 text-center py-2 bg-teal-500 hover:bg-teal-600 text-white rounded-md transition duration-200">Sign Up</NavLink>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;