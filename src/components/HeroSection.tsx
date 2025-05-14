import React from 'react';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="pt-24 md:pt-32 bg-gradient-to-br from-primary/5 to-white">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-10">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              Excellence in Medical Education
            </h1>
            <p className="text-gray-600 text-lg mb-6 max-w-lg">
              Access your MD program modules and resources anytime, anywhere. 
              Continue your medical education journey with our comprehensive 
              online learning platform designed specifically for Soma Mwanza 
              University medical students.
            </p>
            <button className="group flex items-center bg-primary hover:bg-primary-dark text-white py-3 px-6 rounded-md transition duration-300">
              Access Your Modules
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={18} />
            </button>
          </div>
          <div className="md:w-1/2 mt-10 md:mt-0">
            <img 
              src="https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg" 
              alt="Medical students learning" 
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;