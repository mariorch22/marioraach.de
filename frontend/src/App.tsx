import { Suspense, lazy } from 'react';
import './App.css';
import {  Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from './pages/home';
import Blog from './pages/blog';
import Footer from './components/footer';
import ScrollToTop from './animations/scrollToTop';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Work = lazy(() => import('./pages/work'));
const About = lazy(() => import('./pages/about'));
const Contact = lazy(() => import('./pages/contact'));
const Admin = lazy(()=> import ('./pages/admin'));
const Blogarticle = lazy(()=> import ("./pages/blogarticle"))
const NotFound = lazy(()=> import ("./pages/NotFound"))


const queryClient = new QueryClient()

function App() {

  const location = useLocation();

  return (
    <>
      <QueryClientProvider client={queryClient}>
          <Suspense fallback={<div className='w-screen h-[200vh] flex justify-center items-center text-4xl text-white bg-pageAnimationGray overflow-hidden'></div>}>
            <AnimatePresence mode="wait">
              <ScrollToTop />
              <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Footer/>}>
                  <Route path="/" element={<Home />} />
                  <Route path="/work" element={<Work />} />
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/blog/:blogId" element={<Blogarticle />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/admin" element={<Admin />} />
                </Route>
                <Route path="*" element={<NotFound />} />
              </Routes>
            </AnimatePresence>
          </Suspense>
      </QueryClientProvider>
    </>
  );
}

export default App;
