import { Twitter, Instagram, Linkedin } from '../components/SocialIcons';

const staff = [
  {
    name: 'Dr. Sarah Jenkins',
    role: 'Head of Data Science',
    category: 'Senior Faculty',
    bio: 'Over 15 years of experience in Big Data and AI. Formerly a Lead Researcher at a Global Tech Hub.',
    img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400'
  },
  {
    name: 'Marcus Thorne',
    role: 'Cybersecurity Specialist',
    category: 'Senior Faculty',
    bio: 'A certified ethical hacker who has secured infrastructure for major financial institutions.',
    img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400'
  },
  {
    name: 'Elena Rodriguez',
    role: 'Full Stack Developer',
    category: 'Lab Instructor',
    bio: 'An expert in React and Node.js. Elena focuses on hands-on project-based learning.',
    img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400'
  },
  {
    name: 'David Chen',
    role: 'Registrar & Admissions',
    category: 'Administration',
    bio: 'Managing the academic journey for over 2,000 students. David ensures a smooth process.',
    img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400'
  },
  {
    name: 'Linda Mckenzie',
    role: 'Networking Expert',
    category: 'Lab Instructor',
    bio: 'CCIE certified professional with a background in global telecommunications.',
    img: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=400'
  },
  {
    name: 'Kevin Patel',
    role: 'Mobile App Architect',
    category: 'Senior Faculty',
    bio: 'Specializing in Flutter and Swift. Kevin has launched over 50 apps on various stores.',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400'
  },
  {
    name: 'Dr. Amy Watson',
    role: 'AI Ethics Specialist',
    category: 'Senior Faculty',
    bio: 'A PhD in Philosophy and Computing. Amy explores the intersection of technology and ethics.',
    img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400'
  },
  {
    name: 'Robert Sterling',
    role: 'Director of Placement',
    category: 'Administration',
    bio: 'Bridging the gap between education and industry. Robert maintains corporate partnerships.',
    img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400'
  }
];

const Staff = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-24">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="text-primary font-bold text-xs uppercase tracking-widest">Meet Our Experts</span>
          <h1 className="text-5xl font-extrabold text-secondary">Our Faculty & Staff</h1>
          <p className="text-gray-500 text-lg leading-relaxed">
            Guided by industry veterans and academic pioneers, Optech Technology brings you a world-class team dedicated to your career success.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {['All Members', 'Senior Faculty', 'Lab Instructors', 'Administration', 'Career Counselors'].map((filter, i) => (
            <button 
              key={i} 
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all ${
                i === 0 ? 'bg-secondary text-white' : 'bg-white text-gray-500 border border-gray-100 hover:border-gray-200 shadow-sm'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Staff Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {staff.map((member, i) => (
            <div key={i} className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all group">
              <div className="relative h-72 overflow-hidden bg-gray-100">
                <img 
                  src={member.img} 
                  alt={member.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-50/90 backdrop-blur-sm text-primary text-[10px] font-bold uppercase px-3 py-1 rounded-md border border-primary/10">
                    {member.category}
                  </span>
                </div>
              </div>
              <div className="p-8 space-y-4">
                <div>
                  <h3 className="text-xl font-extrabold text-secondary mb-1 group-hover:text-primary transition-colors">{member.name}</h3>
                  <p className="text-primary font-bold text-xs tracking-tight">{member.role}</p>
                </div>
                <p className="text-gray-500 text-xs leading-relaxed line-clamp-3">
                  {member.bio}
                </p>
                <div className="flex gap-4 pt-4 border-t border-gray-50">
                   <a href="#" className="text-gray-300 hover:text-primary transition-colors"><Twitter size={16} /></a>
                   <a href="#" className="text-gray-300 hover:text-primary transition-colors"><Linkedin size={16} /></a>
                   <a href="#" className="text-gray-300 hover:text-primary transition-colors"><Instagram size={16} /></a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-24 bg-secondary rounded-[40px] p-16 md:p-24 text-center relative overflow-hidden">
           <div className="relative z-10">
              <h2 className="text-4xl font-bold text-white mb-4">Want to Join Our Team?</h2>
              <p className="text-gray-400 mb-12 max-w-xl mx-auto">
                We are always looking for passionate educators and tech experts to shape the next generation of innovators.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-primary text-white px-10 py-4 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-primary/20">View Vacancies</button>
                <button className="border border-gray-700 text-white px-10 py-4 rounded-xl font-bold hover:bg-gray-800 transition-all">Submit CV</button>
              </div>
           </div>
           <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/20 to-transparent"></div>
        </div>
      </div>
    </div>
  );
};

export default Staff;
