import React from 'react';
import { Search, BookOpen, ClipboardCheck, Lightbulb, Users } from 'lucide-react';

interface ProcessStepProps {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  isLast?: boolean;
}

const ProcessStep: React.FC<ProcessStepProps> = ({ 
  number, 
  title, 
  description, 
  icon, 
  color,
  isLast = false 
}) => {
  return (
    <div className="relative">
      <div className={`p-6 ${color} rounded-lg h-full`}>
        <div className="flex items-center mb-3">
          <div className="flex items-center justify-center bg-white rounded-full w-8 h-8 mr-3">
            <span className="font-bold text-teal-600">{number}</span>
          </div>
          <h3 className="font-bold text-white">{title}</h3>
        </div>
        <div className="flex items-start mb-3">
          <div className="mr-3 text-white">{icon}</div>
          <p className="text-white text-sm">{description}</p>
        </div>
      </div>
      {!isLast && (
        <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
          <div className="w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center">
            <ArrowIcon />
          </div>
        </div>
      )}
    </div>
  );
};

const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#0D9488" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const EducationProcess = () => {
  const steps = [
    {
      number: 1,
      title: "Course Search and Selection",
      description: "Browse our extensive catalog to find a course that matches your professional goals, from introductory to advanced learning options.",
      icon: <Search size={20} />,
      color: "bg-teal-500"
    },
    {
      number: 2,
      title: "Getting Access to Learning",
      description: "After registration and enrollment, you'll gain immediate access when you pay, thus giving you the freedom to start learning immediately.",
      icon: <BookOpen size={20} />,
      color: "bg-teal-600"
    },
    {
      number: 3,
      title: "Assessment and Evaluation",
      description: "Participate in both formative and summative assessments to show your understanding and earn your credentials.",
      icon: <ClipboardCheck size={20} />,
      color: "bg-teal-500"
    },
    {
      number: 4,
      title: "Application and Practice",
      description: "Practice through hands-on projects and real-world case studies that deepen your understanding and build your skills.",
      icon: <Lightbulb size={20} />,
      color: "bg-teal-600"
    },
    {
      number: 5,
      title: "Engaging in Learning Activities",
      description: "Interactive learning materials and exercises, plus discussion forums, webinars, and collaborative activities engage your mind.",
      icon: <Users size={20} />,
      color: "bg-teal-500",
      isLast: true
    }
  ];
  
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
            How Online Education Works at Tandabui
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Designed for working adults, our supportive community offers education that fits around your lifestyle, allowing your access with your personal and professional life.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
          {steps.map((step, index) => (
            <ProcessStep 
              key={index}
              number={step.number}
              title={step.title}
              description={step.description}
              icon={step.icon}
              color={step.color}
              isLast={step.isLast}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationProcess;