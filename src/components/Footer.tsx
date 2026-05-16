import { Facebook, Twitter, Instagram, Linkedin } from './SocialIcons';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="shrink-0 border-t border-gray-100/50 pt-16 pb-8">
      <div className="container grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-secondary">Optech</h3>
          <p className="text-gray-500 text-sm leading-relaxed">
            Leading the way in professional computer education since inception. Empowering the next generation of tech leaders.
          </p>
        </div>
        
        <div>
          <h4 className="font-bold text-secondary mb-6">Quick Links</h4>
          <ul className="space-y-4 text-sm text-gray-500">
            <li><Link to="/courses" className="hover:text-primary transition-colors">Courses</Link></li>
            <li><Link to="/admission" className="hover:text-primary transition-colors">Admissions</Link></li>
            <li><Link to="/gallery" className="hover:text-primary transition-colors">Gallery</Link></li>
            <li><Link to="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-bold text-secondary mb-6">Legal</h4>
          <ul className="space-y-4 text-sm text-gray-500">
            <li><Link to="#" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
            <li><Link to="#" className="hover:text-primary transition-colors">Terms of Service</Link></li>
            <li><Link to="#" className="hover:text-primary transition-colors">Cookie Policy</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-bold text-secondary mb-6">Connect</h4>
          <div className="flex space-x-4">
            <a href="#" className="p-2 bg-gray-50 rounded-full text-gray-400 hover:text-primary hover:bg-blue-50 transition-all">
              <Facebook size={20} />
            </a>
            <a href="#" className="p-2 bg-gray-50 rounded-full text-gray-400 hover:text-primary hover:bg-blue-50 transition-all">
              <Twitter size={20} />
            </a>
            <a href="#" className="p-2 bg-gray-50 rounded-full text-gray-400 hover:text-primary hover:bg-blue-50 transition-all">
              <Instagram size={20} />
            </a>
            <a href="#" className="p-2 bg-gray-50 rounded-full text-gray-400 hover:text-primary hover:bg-blue-50 transition-all">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>
      
      <div className="container border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
        <p>© 2026 Optech Computer Institute of Technology. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <Link to="#" className="hover:text-primary">Sitemap</Link>
          <Link to="#" className="hover:text-primary">Accessibility</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
