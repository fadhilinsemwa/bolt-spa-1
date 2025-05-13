import React from 'react';
import { ChevronRight, AlertCircle } from 'lucide-react';
import useSWR from 'swr';

interface MoodleCourse {
  id: number;
  fullname: string;
  shortname: string;
  summary: string;
}

interface CourseOverviewFile {
  filename: string;
  fileurl: string;
  filesize: number;
  filepath: string;
  mimetype: string;
  timemodified: number;
}

interface CourseWithFiles extends MoodleCourse {
  overviewFiles: CourseOverviewFile[];
}

interface CourseCardProps {
  image: string;
  title: string;
  category: string;
  description: string;
  link: string;
}

const fetcher = async (url: string) => {
  try {
    const parsedUrl = new URL(url);
    const moodleUrl = parsedUrl.searchParams.get('moodleUrl');
    const wstoken = parsedUrl.searchParams.get('wstoken');
    
    if (!moodleUrl || !wstoken) {
      throw new Error('Missing API configuration');
    }

    // Step 1: Fetch basic course data
    const coursesUrl = new URL(`${moodleUrl}/webservice/rest/server.php`);
    coursesUrl.searchParams.set('wstoken', wstoken);
    coursesUrl.searchParams.set('wsfunction', 'core_course_get_courses');
    coursesUrl.searchParams.set('moodlewsrestformat', 'json');

    const coursesResponse = await fetch(coursesUrl.toString());
    if (!coursesResponse.ok) {
      throw new Error('Failed to fetch courses');
    }
    const courses: MoodleCourse[] = await coursesResponse.json();

    if (!Array.isArray(courses)) {
      throw new Error('Invalid courses response');
    }

    // Take only the first 3 courses
    const limitedCourses = courses.slice(0, 3);

    // Step 2: Fetch overview files for the limited courses
    const filesUrl = new URL(`${moodleUrl}/webservice/rest/server.php`);
    filesUrl.searchParams.set('wstoken', wstoken);
    filesUrl.searchParams.set('wsfunction', 'core_course_get_course_overview_files');
    filesUrl.searchParams.set('moodlewsrestformat', 'json');
    
    limitedCourses.forEach((course, i) => {
      filesUrl.searchParams.set(`courseids[${i}]`, String(course.id));
    });

    const filesResponse = await fetch(filesUrl.toString());
    if (!filesResponse.ok) {
      throw new Error('Failed to fetch course files');
    }
    const filesData: Record<string, CourseOverviewFile[]> = await filesResponse.json();

    // Combine course data with their files
    const coursesWithFiles: CourseWithFiles[] = limitedCourses.map(course => ({
      ...course,
      overviewFiles: filesData[course.id] || []
    }));

    return coursesWithFiles;
  } catch (error) {
    console.error('Error fetching courses:', error);
    throw error;
  }
};

const CourseCard: React.FC<CourseCardProps> = ({ image, title, category, description, link }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="aspect-w-16 aspect-h-9 bg-gray-200 relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-10 h-10 border-t-2 border-teal-500 border-solid rounded-full animate-spin"></div>
        </div>
        <img 
          src={image}
          alt={title} 
          className="w-full h-full object-cover opacity-0 transition-opacity duration-500"
          onLoad={(e) => {
            e.currentTarget.classList.remove('opacity-0');
            e.currentTarget.classList.add('opacity-100');
          }}
        />
      </div>
      <div className="p-6">
        <span className="inline-block px-3 py-1 bg-teal-100 text-teal-800 text-xs rounded-full mb-3">
          {category}
        </span>
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        <div className="flex justify-between items-center mt-4">
          <a 
            href={link}
            target="_blank"
            rel="noopener noreferrer" 
            className="flex items-center text-teal-600 hover:text-teal-700 transition duration-300"
          >
            <span>Learn more</span>
            <ChevronRight size={16} className="ml-1" />
          </a>
        </div>
      </div>
    </div>
  );
};

const LatestCourses = () => {
  const moodleUrl = import.meta.env.VITE_MOODLE_URL?.replace(/\/$/, '');
  const wstoken = import.meta.env.VITE_MOODLE_TOKEN;
  
  const shouldFetch = Boolean(moodleUrl && wstoken);
  
  // Create a URL that includes the configuration but doesn't make an actual API call
  const configUrl = shouldFetch ? new URL('config', window.location.origin) : null;
  if (configUrl) {
    configUrl.searchParams.set('moodleUrl', moodleUrl);
    configUrl.searchParams.set('wstoken', wstoken);
  }
  
  const { data, error, isLoading } = useSWR<CourseWithFiles[]>(
    shouldFetch ? configUrl.toString() : null,
    shouldFetch ? fetcher : null
  );
  
  if (!shouldFetch) {
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center text-amber-600 bg-amber-50 p-4 rounded-lg">
            <AlertCircle className="mr-2" size={20} />
            <p>Moodle configuration is missing. Please check your environment variables.</p>
          </div>
        </div>
      </section>
    );
  }
  
  if (error) {
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center text-red-600 bg-red-50 p-4 rounded-lg">
            <AlertCircle className="mr-2" size={20} />
            <p>Failed to load courses. Please verify your Moodle API token and try again.</p>
          </div>
        </div>
      </section>
    );
  }
  
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
            Latest Courses
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {isLoading ? (
            Array(3).fill(null).map((_, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 animate-pulse">
                <div className="w-full h-48 bg-gray-200 rounded-lg mb-4"></div>
                <div className="h-4 bg-gray-200 rounded w-1/4 mb-4"></div>
                <div className="h-6 bg-gray-200 rounded w-3/4 mb-4"></div>
                <div className="flex justify-between items-center">
                  <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                </div>
              </div>
            ))
          ) : Array.isArray(data) && data.length > 0 ? (
            data.map((course) => (
              <CourseCard 
                key={course.id}
                image={course.overviewFiles?.[0]?.fileurl || ''}
                title={course.fullname}
                category={course.shortname}
                description={course.summary.replace(/<[^>]*>/g, '').slice(0, 150) + '...'}
                link={`${moodleUrl}/course/view.php?id=${course.id}`}
              />
            ))
          ) : (
            <div className="col-span-full text-center text-gray-600">
              No courses available at the moment.
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default LatestCourses;