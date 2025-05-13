import React from 'react';
import { ChevronRight } from 'lucide-react';

const ProfessionalDevelopment = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-teal-600 rounded-lg p-8 text-white">
            <h3 className="text-xl font-semibold mb-4">
              Professional Programs (Short Courses)
            </h3>
            <p className="mb-4">
              Boost your career quickly with our flexible, industry-focused short courses designed to give you practical skills.
            </p>
            <p className="mb-4">
              These programs are perfect for professionals looking to:
            </p>
            <ul className="mb-6 list-disc list-inside space-y-2">
              <li>Gain new skills in a short timeframe</li>
              <li>Update knowledge in rapidly evolving fields</li>
              <li>Enhance résumé with specialized training</li>
              <li>Prepare for career advancement</li>
            </ul>
            <button className="inline-block bg-white text-teal-600 py-2 px-6 rounded-md hover:bg-gray-100 transition duration-300">
              Read more
            </button>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Certificates and Diplomas
            </h3>
            <p className="text-gray-600 mb-4">
              Earn a formal qualification that's recognized in the industry. Our certificates and diplomas provide comprehensive education in specific fields.
            </p>
            <p className="text-gray-600 mb-4">
              Benefits include:
            </p>
            <ul className="mb-6 text-gray-600 list-disc list-inside space-y-2">
              <li>Industry-recognized credentials</li>
              <li>Comprehensive curriculum designed by experts</li>
              <li>Flexible learning options (part-time, full-time)</li>
              <li>Career services and networking opportunities</li>
            </ul>
            <button className="flex items-center text-teal-600 hover:text-teal-700 transition duration-300">
              <span>Read more</span>
              <ChevronRight size={16} className="ml-1" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalDevelopment;