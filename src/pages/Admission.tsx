import { Search, ClipboardList, CheckCircle, Rocket, FileText, ArrowRight } from 'lucide-react';

const steps = [
  {
    icon: <Search className="text-primary" size={24} />,
    title: 'Enquiry',
    desc: 'Fill out our online form or visit our center for a free career counseling session.'
  },
  {
    icon: <ClipboardList className="text-primary" size={24} />,
    title: 'Counseling',
    desc: 'Meet our experts to determine the right course based on your skills and goals.'
  },
  {
    icon: <FileText className="text-primary" size={24} />,
    title: 'Registration',
    desc: 'Complete your application with necessary documents and registration fee.'
  },
  {
    icon: <Rocket className="text-primary" size={24} />,
    title: 'Batch Start',
    desc: 'Receive your ID card and starter kit to begin your professional journey.'
  }
];

const Admission = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="py-24 bg-gray-50 overflow-hidden">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <span className="text-primary font-bold text-xs uppercase tracking-widest">Begin Your Journey</span>
            <h1 className="text-5xl md:text-6xl font-extrabold text-secondary leading-tight">
              Start Your Digital Career Today
            </h1>
            <p className="text-gray-500 text-lg leading-relaxed max-w-lg">
              Join thousands of successful alumni who have transformed their lives through industry-leading technology education at Optech.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-secondary text-white px-8 py-4 rounded-md font-bold hover:bg-gray-800 transition-all flex items-center justify-center gap-2">
                Download Prospectus <FileText size={18} />
              </button>
              <button className="border border-gray-200 text-secondary px-8 py-4 rounded-md font-bold hover:bg-gray-50 transition-all">
                View Eligibility
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl rotate-2">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1000" 
                alt="Students Working" 
                className="w-full h-[500px] object-cover"
              />
            </div>
            {/* Decorative dots */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-24">
        <div className="container text-center mb-16">
          <h2 className="text-4xl font-bold text-secondary mb-4">Simple 4-Step Admission</h2>
          <p className="text-gray-500">Your path to expertise is structured and straightforward.</p>
        </div>
        
        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-6">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-secondary mb-3">{step.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-secondary">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="text-white">
            <h2 className="text-3xl font-bold mb-4">Still have questions?</h2>
            <p className="text-gray-400">Our counselors are here to help you choose the right path.</p>
          </div>
          <button className="bg-primary text-white px-10 py-4 rounded-md font-bold hover:bg-blue-700 transition-all whitespace-nowrap">
            Speak with an Advisor
          </button>
        </div>
      </section>
    </div>
  );
};

export default Admission;
