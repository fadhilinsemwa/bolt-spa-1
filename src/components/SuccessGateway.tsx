import React from 'react';
import { ArrowRight } from 'lucide-react';

const SuccessGateway = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Your gateway to success.
            </h2>
            <p className="text-gray-600 mb-4">
              Tandasoul has established a legacy of excellence in online education. We provide comprehensive, industry-relevant courses that not only enhance your knowledge but also equip you with practical skills for the real world.
            </p>
            <p className="text-gray-600 mb-6">
              Our expert instructors bring their wealth of industry experience to create an enjoyable learning environment that makes learning engaging and accessible. Join us on your journey to knowledge and see the difference our approach makes in your educational experience and career outcomes.
            </p>
            <button className="group flex items-center bg-teal-500 hover:bg-teal-600 text-white py-2 px-6 rounded-md transition duration-300">
              Learn More
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={16} />
            </button>
          </div>
          <div className="md:w-1/2 mt-10 md:mt-0">
            <img 
              src="https://images.pexels.com/photos/5905555/pexels-photo-5905555.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Students collaborating on computer" 
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessGateway;