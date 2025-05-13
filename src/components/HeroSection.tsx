import React from 'react';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="pt-24 md:pt-32 bg-gradient-to-br from-teal-50 to-white">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-10">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              Expert-Led Courses
            </h1>
            <p className="text-gray-600 text-lg mb-6 max-w-lg">
              Empower your future through high-quality online learning experiences 
              facilitated by industry-leading instructors.
            </p>
            <button className="group flex items-center bg-teal-500 hover:bg-teal-600 text-white py-3 px-6 rounded-md transition duration-300">
              Explore Courses
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={18} />
            </button>
          </div>
          <div className="md:w-1/2 mt-10 md:mt-0">
            <img 
              src="https://images.pexels.com/photos/5915202/pexels-photo-5915202.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Students learning together" 
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;