import React from 'react';
import { BookOpen, Award, Lightbulb, Users } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, color }) => {
  return (
    <div className="group p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center">
      <div className={`p-3 rounded-full ${color} mb-4 group-hover:-translate-y-1 transition-transform duration-300`}>
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const FeatureCards = () => {
  const features = [
    {
      icon: <BookOpen size={24} className="text-white" />,
      title: "Quality Education",
      description: "Start on your goals now with our flexible online program options.",
      color: "bg-teal-500"
    },
    {
      icon: <Award size={24} className="text-white" />,
      title: "Industry Recognition",
      description: "Benefit from highly-valuable credentials recognized by top employers.",
      color: "bg-cyan-500"
    },
    {
      icon: <Lightbulb size={24} className="text-white" />,
      title: "Skills Enhancement",
      description: "Enhance your career with practical skills that make you more productive and more valuable.",
      color: "bg-sky-500"
    },
    {
      icon: <Users size={24} className="text-white" />,
      title: "Supportive Community",
      description: "Join a supportive online community and connect with other professionals.",
      color: "bg-blue-500"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              color={feature.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;