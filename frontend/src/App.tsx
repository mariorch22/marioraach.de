import React, { Suspense, lazy } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from './pages/home';
import Blog from './pages/blog';
import Footer from './components/footer';
import ScrollToTop from './animations/scrollToTop';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import LanguageSelector from './components/language-selector';

const Work = lazy(() => import('./pages/work'));
const About = lazy(() => import('./pages/about'));
const Contact = lazy(() => import('./pages/contact'));4

function App() {

  return (
    <>
      <Router>
        <Suspense fallback={<div className='w-screen h-screen bg-backgroundGray overflow-hidden'></div>}>
          <AnimatePresence mode="wait">
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/work" element={<Work />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
            <LanguageSelector />
          </AnimatePresence>
        </Suspense>
      </Router>
      <Footer />
    </>
  );
}

export default App;
