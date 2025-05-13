import React from 'react';
import { GraduationCap, LifeBuoy, Headphones } from 'lucide-react';

interface SupportCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  buttonText: string;
}

const SupportCard: React.FC<SupportCardProps> = ({ icon, title, description, buttonText }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col h-full">
      <div className="text-teal-500 mb-4">{icon}</div>
      <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4 flex-grow">{description}</p>
      <button className="mt-auto bg-teal-500 hover:bg-teal-600 text-white py-2 px-4 rounded-md transition duration-300 text-sm">
        {buttonText}
      </button>
    </div>
  );
};

const StudentSupport = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
            Dedicated Student Support
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We are here to help you succeed every step of the way.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <SupportCard 
            icon={<GraduationCap size={32} />}
            title="Academic Support"
            description="Access tutoring and study resources to help you excel in your courses."
            buttonText="Learn More"
          />
          
          <SupportCard 
            icon={<Headphones size={32} />}
            title="Technical Support"
            description="Get help with any technical issues you might encounter."
            buttonText="Contact Tech Support"
          />
          
          <SupportCard 
            icon={<LifeBuoy size={32} />}
            title="Career Services"
            description="Get personalized career guidance and job placement assistance."
            buttonText="Explore Services"
          />
        </div>
        
        <div className="flex flex-col md:flex-row items-center bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="md:w-1/2">
            <img 
              src="https://images.pexels.com/photos/7516363/pexels-photo-7516363.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Student support team" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="md:w-1/2 p-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Our team is ready to help you succeed
            </h3>
            <p className="text-gray-600 mb-6">
              We understand that online learning can present unique challenges. That's why our dedicated support team is available to assist you with academic questions, technical issues, or career guidance whenever you need it.
            </p>
            <button className="bg-teal-500 hover:bg-teal-600 text-white py-2 px-6 rounded-md transition duration-300">
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentSupport;