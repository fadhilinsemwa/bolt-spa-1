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
      title: "Interactive Learning",
      description: "Access comprehensive MD program modules with interactive content and multimedia resources.",
      color: "bg-primary"
    },
    {
      icon: <Award size={24} className="text-white" />,
      title: "Clinical Excellence",
      description: "Study materials aligned with international medical education standards and best practices.",
      color: "bg-primary-light"
    },
    {
      icon: <Lightbulb size={24} className="text-white" />,
      title: "Continuous Support",
      description: "Get assistance from experienced medical faculty and access study resources 24/7.",
      color: "bg-primary"
    },
    {
      icon: <Users size={24} className="text-white" />,
      title: "Collaborative Learning",
      description: "Connect with fellow medical students through discussion forums and virtual study groups.",
      color: "bg-primary-light"
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