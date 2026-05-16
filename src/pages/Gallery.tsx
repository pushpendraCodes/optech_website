const Gallery = () => {
  const images = [
    { url: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800', title: 'Collaboration' },
    { url: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800', title: 'Lecture Hall' },
    { url: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800', title: 'Lab Session' },
    { url: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=800', title: 'Workshop' },
    { url: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=800', title: 'Student Team' },
    { url: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800', title: 'Campus Life' },
    { url: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800', title: 'Digital Learning' },
    { url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800', title: 'Innovation' },
  ];

  return (
    <div className="bg-white min-h-screen py-24">
      <div className="container">
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-secondary">Student Gallery</h1>
          <p className="text-gray-500 max-w-2xl mx-auto">
            A glimpse into the vibrant campus life, hands-on learning experiences, and moments of achievement at Optech.
          </p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((img, i) => (
            <div key={i} className="break-inside-avoid relative group overflow-hidden rounded-2xl cursor-pointer">
              <img 
                src={img.url} 
                alt={img.title} 
                className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div className="text-white">
                  <h3 className="font-bold text-lg">{img.title}</h3>
                  <p className="text-xs text-gray-300 uppercase tracking-widest mt-1">Campus Moments</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Video Section Placeholder */}
        <div className="mt-32">
          <div className="bg-secondary rounded-3xl overflow-hidden relative group">
             <div className="h-[400px] md:h-[600px] flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&q=80&w=2000" 
                  alt="Video Placeholder" 
                  className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale"
                />
                <div className="relative z-10 text-center">
                  <div className="w-24 h-24 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-8 cursor-pointer hover:scale-110 transition-transform shadow-2xl shadow-primary/20">
                    <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-white border-b-[10px] border-b-transparent ml-2"></div>
                  </div>
                  <h2 className="text-3xl font-bold text-white mb-2">Life at Optech</h2>
                  <p className="text-gray-400">Watch our campus highlights video</p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
