import { Search, Filter, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const courses = [
  {
    id: 'full-stack',
    title: 'Web Development',
    category: 'Advanced',
    description: 'Build modern, responsive websites using HTML5, CSS3, JavaScript, and popular frameworks.',
    duration: '12 Weeks',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800',
    tag: 'Advanced'
  },
  {
    id: 'advanced-excel',
    title: 'Advanced Excel',
    category: 'Intermediate',
    description: 'Unlock the power of data with pivot tables, complex formulas, VBA macros, and automation.',
    duration: '6 Weeks',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    tag: 'Intermediate'
  },
  {
    id: 'computer-basics',
    title: 'Computer Basics',
    category: 'Beginner',
    description: 'Master fundamental computing skills, from hardware understanding to essential software.',
    duration: '4 Weeks',
    image: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&q=80&w=800',
    tag: 'Beginner'
  },
  {
    id: 'programming',
    title: 'Programming (C, Java, Python)',
    category: 'Multi-Level',
    description: 'Master the core logic and syntax of industry-standard languages. Choice of multiple tracks.',
    duration: '16 Weeks',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800',
    tag: 'Multi-Level'
  },
  {
    id: 'tally',
    title: 'Tally Prime',
    category: 'Professional',
    description: 'Gain expertise in modern accounting and GST compliance using Tally Prime tools.',
    duration: '8 Weeks',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800',
    tag: 'Professional'
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    category: 'Creative',
    description: 'Master SEO, SEM, Social Media Marketing, and Content Strategy to drive business growth.',
    duration: '10 Weeks',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    tag: 'Creative'
  }
];

const Courses = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="container">
        {/* Header */}
        <div className="mb-12">
          <span className="text-primary font-bold text-xs uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full">Education for the Future</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-secondary mt-4 mb-6 max-w-2xl">
            Master the Skills that Shape Tomorrow.
          </h1>
          <p className="text-gray-500 text-lg max-w-3xl">
            Explore our comprehensive catalog of industry-recognized courses designed to bridge the gap between academic theory and technological mastery.
          </p>
        </div>

        {/* Search & Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-12">
          <div className="relative flex-grow">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input 
              type="text" 
              placeholder="Search for courses..." 
              className="w-full pl-12 pr-4 py-4 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
            />
          </div>
          <button className="flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-700 transition-all">
            <Filter size={20} />
            Filter
          </button>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div key={course.id} className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all group">
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={course.image} 
                  alt={course.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-secondary text-[10px] font-bold uppercase px-3 py-1 rounded-md">
                    {course.tag}
                  </span>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-secondary mb-3 group-hover:text-primary transition-colors">
                  {course.title}
                </h3>
                <p className="text-gray-500 text-sm mb-8 line-clamp-2">
                  {course.description}
                </p>
                <div className="flex items-center justify-between pt-6 border-t border-gray-50">
                  <div className="flex items-center text-gray-400 text-sm">
                    <Clock size={16} className="mr-2" />
                    {course.duration}
                  </div>
                  <Link to={`/course/${course.id}`} className="text-primary font-bold text-sm flex items-center hover:underline">
                    View Details <ArrowRight size={16} className="ml-2" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-24 bg-secondary rounded-3xl p-12 md:p-16 text-center relative overflow-hidden">
           <div className="relative z-10">
              <h2 className="text-3xl font-bold text-white mb-6">Ready to Start Your Journey?</h2>
              <p className="text-gray-400 mb-10 max-w-2xl mx-auto">
                Join over 5,000+ students who have transformed their careers through our industry-leading certification programs. Expert faculty and 100% placement assistance await.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-primary text-white px-8 py-3 rounded-md font-bold hover:bg-blue-700 transition-all">Download Brochure</button>
                <button className="border border-gray-700 text-white px-8 py-3 rounded-md font-bold hover:bg-gray-800 transition-all">Find a Center</button>
              </div>
           </div>
           {/* Decorative elements */}
           <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
