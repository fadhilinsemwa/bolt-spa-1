import React from 'react';
import { Calendar, User, ChevronRight } from 'lucide-react';

interface NewsCardProps {
  image: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  authorImage?: string;
}

const NewsCard: React.FC<NewsCardProps> = ({ 
  image, 
  title, 
  excerpt, 
  date, 
  author, 
  authorImage 
}) => {
  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
      <div className="aspect-w-16 aspect-h-9">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{excerpt}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            {authorImage && (
              <img 
                src={authorImage} 
                alt={author} 
                className="w-8 h-8 rounded-full mr-2"
              />
            )}
            <div>
              <span className="flex items-center text-sm text-gray-500">
                <User size={14} className="mr-1" />
                {author}
              </span>
              <span className="flex items-center text-sm text-gray-500">
                <Calendar size={14} className="mr-1" />
                {date}
              </span>
            </div>
          </div>
          <button className="flex items-center text-teal-600 hover:text-teal-700 transition duration-300">
            <span>Read</span>
            <ChevronRight size={16} className="ml-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

const LatestNews = () => {
  const newsItems = [
    {
      image: "https://images.pexels.com/photos/3182801/pexels-photo-3182801.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Tandasoul Receives Grant to scale educational initiatives",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget felis eget nunc lobortis mattis aliquam faucibus.",
      date: "2 July 2025",
      author: "Sarah",
      authorImage: "https://randomuser.me/api/portraits/women/44.jpg"
    }
  ];
  
  const upcomingEvents = [
    {
      title: "Summer Online Open House",
      date: "July 15, 2025",
      location: "Virtual Event"
    },
    {
      title: "Career Fair - Tech & Business",
      date: "August 20, 2025",
      location: "Virtual Event"
    }
  ];
  
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
            Latest News and Blog
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">
              Recent News
            </h3>
            <NewsCard 
              image={newsItems[0].image}
              title={newsItems[0].title}
              excerpt={newsItems[0].excerpt}
              date={newsItems[0].date}
              author={newsItems[0].author}
              authorImage={newsItems[0].authorImage}
            />
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-6">
              Upcoming Events
            </h3>
            <div className="bg-white rounded-lg shadow-sm p-6">
              {upcomingEvents.map((event, index) => (
                <div key={index} className={`${index > 0 ? 'border-t border-gray-200 pt-4 mt-4' : ''}`}>
                  <h4 className="font-semibold text-gray-800">{event.title}</h4>
                  <p className="text-gray-600 text-sm mb-1">Date: {event.date}</p>
                  <p className="text-gray-600 text-sm">Location: {event.location}</p>
                </div>
              ))}
              <button className="w-full mt-6 bg-teal-500 hover:bg-teal-600 text-white py-2 rounded-md transition duration-300">
                View All Events
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestNews;