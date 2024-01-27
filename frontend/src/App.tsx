import React, { Suspense, lazy } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from './pages/home';
import Work from './pages/work';
import Blog from './pages/blog';
import Contact from './pages/contact';
import About from './pages/about';
import { useQuery, useMutation, useQueryClient, QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Footer from './components/footer';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


{/*
const Home = lazy(() => import('./pages/home'));
const Work = lazy(() => import('./pages/work'));
const About = lazy(() => import('./pages/about'));
const Contact = lazy(() => import('./pages/contact'));
*/}

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <AnimatePresence mode="wait">
          <Routes >
            <Route path="/" element={<Home/>} />
            <Route path="/work" element={<Work />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
      </Router>
      <Footer />
    </QueryClientProvider>
  );
}

export default App;
