import React from 'react';
import { GraduationCap, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-teal-700 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <GraduationCap size={32} />
              <span className="text-xl font-bold">Tandabui Online</span>
            </div>
            <p className="text-teal-100 mb-4">
              Transforming education through innovative online learning experiences since 2015.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-teal-200 transition duration-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-teal-200 transition duration-300">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-teal-200 transition duration-300">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-teal-200 transition duration-300">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 flex-shrink-0" />
                <span>123 Education Street, Suite 400<br />Learning City, TS 54321</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 flex-shrink-0" />
                <span>+1 (555) 765-4321</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 flex-shrink-0" />
                <span>info@tandabui.edu</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/resources" className="text-teal-100 hover:text-white transition duration-200">
                  Student Resources
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-teal-100 hover:text-white transition duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/courses" className="text-teal-100 hover:text-white transition duration-200">
                  Courses
                </Link>
              </li>
              <li>
                <Link to="/admin" className="text-teal-100 hover:text-white transition duration-200">
                  Administration
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-teal-100 hover:text-white transition duration-200">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-teal-100 hover:text-white transition duration-200">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Study</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/certificate" className="text-teal-100 hover:text-white transition duration-200">
                  Certificate Programs
                </Link>
              </li>
              <li>
                <Link to="/diploma" className="text-teal-100 hover:text-white transition duration-200">
                  Diploma Courses
                </Link>
              </li>
              <li>
                <Link to="/professional" className="text-teal-100 hover:text-white transition duration-200">
                  Professional Development
                </Link>
              </li>
              <li>
                <Link to="/short-courses" className="text-teal-100 hover:text-white transition duration-200">
                  Short Courses
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="bg-teal-800 py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-teal-100 text-sm">
              © 2025 Tandabui Online. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-6">
                <li>
                  <Link to="/privacy" className="text-teal-100 hover:text-white text-sm transition duration-200">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="text-teal-100 hover:text-white text-sm transition duration-200">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link to="/cookies" className="text-teal-100 hover:text-white text-sm transition duration-200">
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;