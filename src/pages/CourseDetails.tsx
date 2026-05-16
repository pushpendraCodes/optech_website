import { Clock, BarChart, BookOpen, CheckCircle, ChevronDown, Download, Users, Mail, Phone, User } from 'lucide-react';

const CourseDetails = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Course Hero */}
      <section className="relative h-[60vh] flex items-center bg-secondary overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=2000" 
            alt="Code Background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container relative z-10 text-white">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 bg-primary/20 text-blue-300 border border-primary/30 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
              <CheckCircle size={14} /> Professional Certification
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6">Full-Stack Web Development</h1>
            <p className="text-xl text-gray-400 mb-10 leading-relaxed">
              Master the art of building scalable, responsive, and high-performance web applications using the latest industry frameworks and best practices.
            </p>
            <div className="flex flex-wrap gap-8 text-sm">
              <div className="flex items-center gap-3">
                <Clock className="text-primary" size={20} />
                <div>
                  <div className="text-gray-500 uppercase text-[10px] font-bold tracking-widest">Duration</div>
                  <div className="font-bold">12 Months</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <BarChart className="text-primary" size={20} />
                <div>
                  <div className="text-gray-500 uppercase text-[10px] font-bold tracking-widest">Level</div>
                  <div className="font-bold">Intermediate</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Users className="text-primary" size={20} />
                <div>
                  <div className="text-gray-500 uppercase text-[10px] font-bold tracking-widest">Format</div>
                  <div className="font-bold">Hybrid Learning</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container py-24 grid grid-cols-1 lg:grid-cols-3 gap-16">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-16">
          {/* What You Will Learn */}
          <div>
            <h2 className="text-3xl font-bold text-secondary mb-8 pl-4 border-l-4 border-primary">What You Will Learn</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: 'Frontend Mastery', desc: 'Deep dive into HTML5, CSS3, JavaScript (ES6+), and modern React patterns for building dynamic user interfaces.' },
                { title: 'Backend Logic', desc: 'Master Node.js, Express, and database management with MongoDB and PostgreSQL for robust server-side engineering.' },
                { title: 'DevOps & Cloud', desc: 'Learn version control with Git, containerization with Docker, and automated deployment via CI/CD pipelines.' },
                { title: 'System Architecture', desc: 'Understand microservices, API design principles, and security best practices for enterprise-level applications.' }
              ].map((item, i) => (
                <div key={i} className="bg-white p-8 rounded-2xl border border-gray-100 hover:border-primary/20 transition-all group">
                   <div className="text-primary mb-6 group-hover:scale-110 transition-transform origin-left">
                     <BookOpen size={24} />
                   </div>
                   <h3 className="text-xl font-bold text-secondary mb-3">{item.title}</h3>
                   <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Course Syllabus */}
          <div>
            <h2 className="text-3xl font-bold text-secondary mb-8 pl-4 border-l-4 border-primary">Course Syllabus</h2>
            <div className="space-y-4">
              {[
                'Module 1: Foundations of the Web',
                'Module 2: JavaScript & Logic',
                'Module 3: Full Stack Integration'
              ].map((module, i) => (
                <div key={i} className="border border-gray-100 rounded-xl overflow-hidden">
                  <button className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-all group">
                    <span className="font-bold text-secondary group-hover:text-primary transition-colors">{module}</span>
                    <ChevronDown size={20} className="text-gray-400" />
                  </button>
                  {i === 0 && (
                    <div className="p-6 bg-gray-50/50 border-t border-gray-50 space-y-3">
                      <div className="flex items-center gap-3 text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        Internet Protocols & How Browsers Work
                      </div>
                      <div className="flex items-center gap-3 text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        Semantic HTML5 & Accessibility (a11y)
                      </div>
                      <div className="flex items-center gap-3 text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        Advanced CSS3: Grid, Flexbox, and Animations
                      </div>
                      <div className="flex items-center gap-3 text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        Responsive Design & Mobile-First Strategies
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Instructor Profile */}
          <div className="bg-secondary text-white p-10 rounded-3xl flex flex-col md:flex-row gap-10 items-center">
            <div className="w-32 h-32 rounded-2xl overflow-hidden shrink-0">
               <img 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400" 
                alt="Instructor" 
                className="w-full h-full object-cover"
               />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-1">Dr. Marcus Chen</h3>
              <p className="text-primary text-sm font-bold mb-4">Lead Instructor & Ex-Senior Engineer at Google</p>
              <p className="text-gray-400 text-sm leading-relaxed">
                With over 15 years of experience in distributed systems and modern web architecture, Dr. Chen brings a wealth of practical industry knowledge to the classroom. He focuses on developing analytical thinking alongside technical skills.
              </p>
            </div>
          </div>
        </div>

        {/* Sidebar Form */}
        <div className="space-y-8">
          <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-xl sticky top-24">
            <h3 className="text-xl font-bold text-secondary mb-2">Request Information</h3>
            <p className="text-gray-500 text-sm mb-8">Interested in this course? Fill out the form and our advisors will reach out shortly.</p>
            
            <form className="space-y-5">
              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Full Name</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" size={18} />
                  <input type="text" placeholder="John Doe" className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" size={18} />
                  <input type="email" placeholder="john@example.com" className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Your Question</label>
                <textarea rows={4} placeholder="How can we help?" className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 resize-none"></textarea>
              </div>
              <button className="w-full bg-secondary text-white py-4 rounded-lg font-bold hover:bg-gray-800 transition-all shadow-lg shadow-gray-200">
                Send Enquiry
              </button>
            </form>
          </div>

          <div className="bg-blue-50 p-6 rounded-2xl flex items-center justify-between group cursor-pointer hover:bg-blue-100 transition-all">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center">
                <Download size={20} />
              </div>
              <div>
                <div className="font-bold text-secondary">Download Syllabus</div>
                <div className="text-xs text-gray-500 font-medium">PDF, 2.4 MB</div>
              </div>
            </div>
            <ChevronDown size={20} className="text-gray-400 -rotate-90" />
          </div>

          <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
            <div className="flex items-center gap-3 text-primary mb-3">
              <CheckCircle size={20} />
              <span className="font-bold text-secondary">Placement Support</span>
            </div>
            <p className="text-xs text-gray-500 leading-relaxed font-medium">
              100% placement assistance provided upon successful completion of the course and final capstone project.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
