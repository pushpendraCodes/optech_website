import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header.tsx';
import Footer from './components/Footer.tsx';
import Home from './pages/Home.tsx';
import Courses from './pages/Courses.tsx';
import CourseDetails from './pages/CourseDetails.tsx';
import Admission from './pages/Admission.tsx';
import Contact from './pages/Contact.tsx';
import Gallery from './pages/Gallery.tsx';
import Videos from './pages/Videos.tsx';
import Staff from './pages/Staff.tsx';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow ">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/course/:id" element={<CourseDetails />} />
            <Route path="/admission" element={<Admission />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/videos" element={<Videos />} />
            <Route path="/staff" element={<Staff />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
