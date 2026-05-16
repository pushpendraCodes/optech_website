import { Play, Search, ArrowRight } from 'lucide-react';

const Videos = () => {
  return (
    <div className="bg-white min-h-screen pb-24">
      {/* Header Area with Search */}
      <div className="container py-8 border-b border-gray-50 flex flex-col md:flex-row justify-between items-center gap-6">
        <h1 className="text-2xl font-bold text-secondary">Course Lectures</h1>
        <div className="relative w-full md:w-96">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input 
            type="text" 
            placeholder="Search lectures..." 
            className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
        </div>
      </div>

      <div className="container pt-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Featured Hero Video */}
        <div className="lg:col-span-2">
          <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl bg-secondary group cursor-pointer">
            <img 
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1200" 
              alt="Hero Video" 
              className="w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 bg-primary text-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-2xl">
                <Play size={32} fill="currentColor" />
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/90 to-transparent">
              <span className="bg-primary text-white text-[10px] font-bold uppercase px-3 py-1 rounded-md mb-4 inline-block tracking-widest">Institute Highlight</span>
              <h2 className="text-3xl font-extrabold text-white mb-3">The Future of Tech Education: Optech 2024 Vision</h2>
              <p className="text-gray-400 text-sm max-w-xl">Join us as we explore the revolutionary changes in our 2024 curriculum, featuring AI integration, advanced programming paradigms, and industry-partnered projects.</p>
            </div>
          </div>
        </div>

        {/* Trending Now Sidebar */}
        <div className="space-y-8">
          <div className="flex items-center gap-2 text-primary font-bold">
            <div className="w-1.5 h-6 bg-primary rounded-full"></div>
            Trending Now
          </div>
          <div className="space-y-6">
            {[
              { title: 'Advanced JavaScript Patterns', meta: '12k views • 15 mins', img: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?auto=format&fit=crop&q=80&w=300' },
              { title: 'Digital Strategy Foundations', meta: '8.5k views • 22 mins', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=300' },
              { title: 'Mastering Tally Prime 2024', meta: '5.2k views • 45 mins', img: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=300' }
            ].map((video, i) => (
              <div key={i} className="flex gap-4 group cursor-pointer">
                <div className="relative w-32 h-20 shrink-0 rounded-xl overflow-hidden bg-gray-100">
                   <img src={video.img} alt={video.title} className="w-full h-full object-cover" />
                   <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/20 transition-opacity">
                     <Play size={16} className="text-white" fill="currentColor" />
                   </div>
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-bold text-secondary leading-tight group-hover:text-primary transition-colors">{video.title}</h4>
                  <p className="text-[10px] text-gray-400 font-medium">{video.meta}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Categorized Playlists */}
      <section className="container mt-24 space-y-12">
        <div>
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-secondary">Programming & Software</h3>
            <button className="text-primary font-bold text-sm flex items-center gap-2 hover:underline">
              View Playlist <ArrowRight size={16} />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Python for Backend Development', desc: 'Learn to build robust APIs and server-side logic using modern Python frameworks.', time: '18:42', img: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&q=80&w=500' },
              { title: 'Scalable Systems Architecture', desc: 'A deep dive into distributed systems and high-availability design principles.', time: '34:10', img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=500' },
              { title: 'Modern UI with React & Tailwind', desc: 'Building responsive, beautiful interfaces using the latest web technologies.', time: '12:15', img: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&q=80&w=500' },
              { title: 'DSA: Cracking the Logic Code', desc: 'Essential data structures and algorithms explained for technical interviews.', time: '58:00', img: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&q=80&w=500' }
            ].map((video, i) => (
              <div key={i} className="space-y-4 group cursor-pointer">
                <div className="relative aspect-video rounded-xl overflow-hidden shadow-md">
                   <img src={video.img} alt={video.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                   <div className="absolute bottom-2 right-2 bg-black/70 text-white text-[10px] px-2 py-1 rounded-md font-bold">{video.time}</div>
                </div>
                <div className="space-y-2">
                  <h4 className="font-bold text-secondary leading-tight group-hover:text-primary transition-colors">{video.title}</h4>
                  <p className="text-xs text-gray-500 leading-relaxed line-clamp-2">{video.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-blue-50 rounded-3xl p-12 relative overflow-hidden">
           <div className="relative z-10">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-bold text-secondary">Digital Marketing Masterclass</h3>
                <button className="bg-white text-primary font-bold text-xs px-4 py-2 rounded-lg shadow-sm hover:shadow-md transition-all">Explore Category</button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { title: 'SEO & SEM Deep Dive 2024', author: 'John Doe', role: 'SEO Lead', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=500' },
                  { title: 'Social Media ROI & Analytics', author: 'Sarah Jane', role: 'Growth Hacker', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=500' },
                  { title: 'Content Strategy & Storytelling', author: 'Mike Ross', role: 'Brand Lead', img: 'https://images.unsplash.com/photo-1493612276216-ee3925520721?auto=format&fit=crop&q=80&w=500' }
                ].map((video, i) => (
                  <div key={i} className="bg-white p-4 rounded-2xl shadow-sm space-y-4 group">
                    <div className="relative aspect-video rounded-xl overflow-hidden">
                       <img src={video.img} alt={video.title} className="w-full h-full object-cover" />
                       <div className="absolute top-2 left-2 bg-primary text-white text-[8px] font-bold uppercase px-2 py-0.5 rounded tracking-widest">Live</div>
                    </div>
                    <div className="space-y-3">
                      <h4 className="font-bold text-secondary text-sm group-hover:text-primary transition-colors">{video.title}</h4>
                      <div className="flex items-center gap-3 pt-2 border-t border-gray-50">
                        <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden">
                           <img src={`https://i.pravatar.cc/150?u=${i}`} alt={video.author} className="w-full h-full object-cover" />
                        </div>
                        <div>
                          <div className="text-[10px] font-bold text-secondary">{video.author}</div>
                          <div className="text-[8px] text-gray-400 font-bold uppercase">{video.role}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
           </div>
           <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full blur-3xl -mr-32 -mt-32"></div>
        </div>
      </section>
    </div>
  );
};

export default Videos;
