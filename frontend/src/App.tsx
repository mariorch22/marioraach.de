import React, { Suspense, lazy, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from './pages/home';
import Blog from './pages/blog';
import Footer from './components/footer';
import ScrollToTop from './animations/scrollToTop';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import ReactGA from 'react-ga';
import { useLocation } from 'react-router-dom';


const Work = lazy(() => import('./pages/work'));
const About = lazy(() => import('./pages/about'));
const Contact = lazy(() => import('./pages/contact'));
const Admin = lazy(()=> import ('./pages/admin'));
const Blogarticle = lazy(()=> import ("./pages/blogarticle"))

ReactGA.initialize('G-FF5MY3V993');

const queryClient = new QueryClient()

function App() {

  const location = useLocation();
  useEffect(() => {
    ReactGA.pageview(location.pathname + location.search);
  }, [location]);
  
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Router>
          <Suspense fallback={<div className='w-screen h-screen bg-backgroundGray overflow-hidden'></div>}>
            <AnimatePresence mode="wait">
              <ScrollToTop />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/work" element={<Work />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:blogId" element={<Blogarticle />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/admin" element={<Admin />} />
              </Routes>
            </AnimatePresence>
          </Suspense>
        </Router>
        <Footer />
      </QueryClientProvider>
    </>
  );
}

export default App;
