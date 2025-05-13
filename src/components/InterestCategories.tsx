import React from 'react';
import { ChevronRight } from 'lucide-react';

const InterestCategories = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
            What are you interested in?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Looking to enhance your career and skill set or are you eager to branch into a new field? We have been uniquely guiding the skills you need to succeed. Whether you're looking to upskill, reskill or gain that extra qualification, our courses provide you with the confidence, knowledge and practical skills you need to achieve your goals.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-100 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 h-full">
            <div className="aspect-w-16 aspect-h-9 bg-gray-200">
              <img 
                src="https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Professional development" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Continue professional development programs (CPD)
              </h3>
              <p className="text-gray-600 mb-4">
                Advance your skills and knowledge for your current career path with our CPD courses that will help you stay up-to-date with the latest industry developments.
              </p>
              <button className="flex items-center text-teal-600 hover:text-teal-700 transition duration-300">
                <span>Read more</span>
                <ChevronRight size={16} className="ml-1" />
              </button>
            </div>
          </div>
          
          <div className="bg-teal-600 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 text-white h-full">
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3">
                Professional programs (Short courses)
              </h3>
              <p className="mb-4">
                Boost your career quickly with our flexible, industry-focused short courses designed to give you practical skills you need to stand out in the workplace.
              </p>
              <p className="mb-6">
                These short courses are specifically created for busy professionals who need to upskill quickly but don't have time for extended study programs.
              </p>
              <button className="inline-block bg-white text-teal-600 py-2 px-6 rounded-md hover:bg-gray-100 transition duration-300">
                Read more
              </button>
            </div>
          </div>
          
          <div className="bg-gray-100 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 h-full">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Certificates and Diplomas
              </h3>
              <p className="text-gray-600 mb-4">
                Earn a formal qualification that's recognized in the industry. Our certificates and diplomas provide comprehensive education in specific fields, giving you the knowledge and credentials you need to advance.
              </p>
              <p className="text-gray-600 mb-4">
                Perfect for career changers or those looking to build a strong foundation in a professional discipline.
              </p>
              <button className="flex items-center text-teal-600 hover:text-teal-700 transition duration-300">
                <span>Read more</span>
                <ChevronRight size={16} className="ml-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InterestCategories;